"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Please add a bit more detail (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: ContactFormValues) {
    await new Promise((r) => setTimeout(r, 600));
    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", data);
    }
    toast.success(
      "Message sent! We'll get back to you shortly — for urgent needs, call us directly.",
    );
    reset();
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Contact form"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <span id="name-error" className="form-error" role="alert">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <span id="email-error" className="form-error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          {...register("phone")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project or question..."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <span id="message-error" className="form-error" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="btn-spinner" size={18} aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
