import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Wrench, ArrowRight, Lamp, Sparkles } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ChristmasLightFlyer } from "@/components/ChristmasLightFlyer";

const PHONE = "469-835-4691";

export const metadata = createPageMetadata({
  title: "Landscaping & Irrigation Services in DFW",
  description:
    "Custom landscaping, efficient irrigation systems, and year-round maintenance in the Dallas-Fort Worth area. Residential and commercial. Licensed. Free estimates.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/pic-3.jpg"
          alt=""
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <div className="hero__inner">
            <h1 className="hero__title">Landscaping & Irrigation Services in DFW</h1>
            <p className="hero__tagline">
              Custom landscaping, efficient irrigation, and year-round maintenance for residential and commercial properties across the Dallas-Fort Worth area.
            </p>
            <p className="hero__cta">
              <Link href="/contact" className="hero__cta-link">Get a Free Estimate</Link>
              <span className="hero__cta-divider">or call</span>
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hero__cta-phone">{PHONE}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--lg">
        <div className="container container--wide">
          <p className="services-intro">
            BDI Landscape | Irrigation provides custom landscaping, efficient irrigation systems, and year-round maintenance for residential and commercial properties across the Dallas-Fort Worth metroplex and surrounding areas.
          </p>
          <div className="services-grid">
            <article className="service-card">
              <h2><Leaf size={20} className="service-card__icon" aria-hidden />Custom Landscaping</h2>
              <p>
                We design and install custom landscapes tailored to your property and goals. From new installations to refreshes, we serve homeowners and businesses throughout the DFW area with professional, quality work.
              </p>
            </article>
            <article className="service-card">
              <h2><Droplets size={20} className="service-card__icon" aria-hidden />Efficient Irrigation Systems</h2>
              <p>
                As a licensed irrigation company, we install, repair, and maintain efficient irrigation systems. Proper irrigation saves water and keeps your lawn and landscape healthy. We serve Dallas-Fort Worth and surrounding communities.
              </p>
            </article>
            <article className="service-card">
              <h2><Wrench size={20} className="service-card__icon" aria-hidden />Year-Round Maintenance</h2>
              <p>
                Ongoing maintenance for both residential and commercial properties in the DFW area. From mowing and edging to seasonal cleanups and irrigation checks, we keep your property looking its best year-round.
              </p>
            </article>
            <article className="service-card">
              <h2><Lamp size={20} className="service-card__icon" aria-hidden />Landscape Lighting</h2>
              <p>
                We do landscape lighting for flowerbeds and walkways. Illuminate paths, highlight plantings, and add ambiance and safety to your outdoor spaces. Professional design and installation across the Dallas–Fort Worth area.
              </p>
            </article>
            <article className="service-card">
              <h2><Sparkles size={20} className="service-card__icon" aria-hidden />Christmas Light Installation</h2>
              <p>
                We offer Christmas light installation on houses throughout the DFW area. From rooflines to trees and displays, we handle design, installation, and takedown so you can enjoy the season without the hassle.
              </p>
              <ChristmasLightFlyer />
            </article>
          </div>
          <div className="services-cta">
            <p>
              <strong>Ready to get started?</strong> Contact us for a free estimate on any of our services in the Dallas-Fort Worth area.
            </p>
            <p>
              <Link href="/contact" className="link-with-icon">
                Get a Free Estimate
                <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
              </Link>
              {" · "}
              <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
