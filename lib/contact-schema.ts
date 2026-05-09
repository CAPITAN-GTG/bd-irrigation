import { z } from "zod";

function formatUsPhone(digits: string) {
  const d = digits.replace(/\D/g, "").slice(0, 10);
  if (d.length === 0) return "";
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .optional()
    .transform((v) => {
      const trimmed = (v ?? "").trim();
      if (!trimmed) return undefined;
      const digits = trimmed.replace(/\D/g, "");
      return formatUsPhone(digits);
    })
    .refine((v) => v === undefined || /^\(\d{3}\) \d{3}-\d{4}$/.test(v), {
      message: "Phone must be (xxx) xxx-xxxx",
    }),
  message: z
    .string()
    .min(10, "Please add a bit more detail (at least 10 characters)"),
});

// Use `input` for client forms (what users type) and `output` for server usage (normalized/validated).
export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactFormData = z.output<typeof contactSchema>;
