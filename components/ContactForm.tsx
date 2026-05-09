"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

export type { ContactFormValues };

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const phoneValue = watch("phone") ?? "";

  function formatPhone(input: string) {
    const d = input.replace(/\D/g, "").slice(0, 10);
    if (d.length === 0) return "";
    if (d.length < 4) return `(${d}`;
    if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }

  async function onSubmit(data: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg =
        typeof payload.error === "string"
          ? payload.error
          : "Something went wrong. Please try again or call us.";
      toast.error(msg);
      return;
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
          inputMode="numeric"
          placeholder="(555) 555-5555"
          value={phoneValue}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          maxLength={14}
          onChange={(e) => {
            setValue("phone", formatPhone(e.target.value), {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
          onBlur={register("phone").onBlur}
        />
        {errors.phone && (
          <span id="phone-error" className="form-error" role="alert">
            {errors.phone.message}
          </span>
        )}
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
