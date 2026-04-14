import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Clock, Shield } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Get a free estimate for landscaping or irrigation in the DFW area. Call 469-835-4691 or email isaiah@bdirrigation.com. Serving Dallas-Fort Worth and surrounding areas.",
});

export default function ContactPage() {
  return (
    <>
      <section className="hero hero--simple hero--compact">
        <Image
          src="/contact-image.jpg"
          alt="Contact Big Dawg Irrigation for landscaping and irrigation in DFW"
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__content">
          <div className="hero__copy hero__inner">
            <h1 className="hero__title hero__title--simple">Contact us</h1>
            <div className="hero__cta-row">
              <a href={`tel:${PHONE_TEL}`} className="btn btn--primary btn--lg">
                Call Now
              </a>
              <Link href="#contact-form" className="btn btn--outline-light btn--lg">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-section page-section--lg page-section--surface home-intro"
        id="contact-form"
        aria-labelledby="form-heading"
      >
        <div className="container container--home">
          <Reveal>
            <div className="section-eyebrow">
              <span className="section-eyebrow__dot" aria-hidden />
              Next steps
            </div>
            <h2 id="form-heading" className="contact-section-heading">
              Request a free estimate
            </h2>
            <div className="contact-trust" aria-label="Service assurances">
              <span>
                <Clock size={16} aria-hidden />
                Fast follow-up
              </span>
              <span>
                <Shield size={16} aria-hidden />
                Licensed irrigation
              </span>
              <span>Free estimates</span>
            </div>
            <div className="contact-layout">
              <aside className="contact-info-card">
                <h3>Quick contact</h3>
                <p className="contact-info-card__row">
                  <Phone size={18} className="contact-info-card__icon" aria-hidden />
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </p>
                <p className="contact-info-card__row">
                  <Mail size={18} className="contact-info-card__icon" aria-hidden />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <h3>Service area</h3>
                <p className="contact-info-card__row">
                  <MapPin size={18} className="contact-info-card__icon" aria-hidden />
                  <span>
                    Dallas–Fort Worth metroplex and surrounding communities. Residential and
                    commercial.
                  </span>
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
                  Share a few details about your project—we&apos;ll reply with timing and next
                  steps. Prefer to talk now? Call{" "}
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
                </p>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
