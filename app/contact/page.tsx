import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

const PHONE = "469-835-4691";
const EMAIL = "isaiah@bdirrigation.com";

export const metadata = createPageMetadata({
  title: "Contact BDI Landscape | Irrigation",
  description:
    "Get a free estimate for landscaping or irrigation in the DFW area. Call 469-835-4691 or email isaiah@bdirrigation.com. Serving Dallas-Fort Worth and surrounding areas.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/pic-4.jpg"
          alt=""
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <div className="hero__inner">
            <h1 className="hero__title">Contact Us</h1>
            <p className="hero__tagline">
              Serving the Dallas-Fort Worth area and surrounding communities. Request a free estimate for landscaping, irrigation, or maintenance.
            </p>
            <p className="hero__cta">
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hero__cta-phone">{PHONE}</a>
              <span className="hero__cta-divider">·</span>
              <a href={`mailto:${EMAIL}`} className="hero__cta-phone">{EMAIL}</a>
              <span className="hero__cta-divider">or</span>
              <Link href="#contact-form" className="hero__cta-link">Send a message</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--lg" id="contact-form" aria-labelledby="form-heading">
        <div className="container container--wide">
          <h2 id="form-heading" className="contact-section-heading">Request a Free Estimate</h2>
          <div className="contact-layout">
            <aside className="contact-info-card">
              <h3>Get in touch</h3>
              <p className="contact-info-card__row">
                <Phone size={18} className="contact-info-card__icon" aria-hidden />
                <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
              </p>
              <p className="contact-info-card__row">
                <Mail size={18} className="contact-info-card__icon" aria-hidden />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <h3>Service area</h3>
              <p className="contact-info-card__row">
                <MapPin size={18} className="contact-info-card__icon" aria-hidden />
                <span>Dallas-Fort Worth metroplex and surrounding communities. Residential and commercial.</span>
              </p>
              <p>
                <Link href="/services" className="link-with-icon">
                  View our services
                  <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                </Link>
              </p>
            </aside>
            <div className="contact-form-card">
              <h3>Send a message</h3>
              <p className="contact-form-card__intro">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <form className="contact-form" action="#" method="post" aria-label="Contact form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required aria-required="true" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required aria-required="true" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} aria-describedby="message-hint" placeholder="Tell us about your project or question..." />
                  <span id="message-hint" className="visually-hidden">Describe your project or question.</span>
                </div>
                <button type="submit">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
