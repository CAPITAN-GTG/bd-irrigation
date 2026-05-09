import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

function getTransporter() {
  const user = process.env.GOOGLE_EMAIL?.trim();
  const pass = process.env.APP_PASSWORD?.trim();
  if (!user || !pass) {
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return Response.json(
      { error: first?.message ?? "Invalid form data" },
      { status: 400 },
    );
  }

  const { name, email, phone, message } = parsed.data;
  const transporter = getTransporter();
  if (!transporter) {
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 503 },
    );
  }

  const from = process.env.GOOGLE_EMAIL!.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || from;
  const subject = `Website contact: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return Response.json(
      { error: "Could not send your message. Please try again or call us." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
