import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Wrench, ArrowRight, Lamp, Sparkles } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ChristmasLightFlyer } from "@/components/ChristmasLightFlyer";
import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Custom landscaping, efficient irrigation systems, and year-round maintenance in the Dallas-Fort Worth area. Residential and commercial. Licensed. Free estimates.",
});

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/pic-6.jpg"
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
              Custom landscaping, efficient irrigation, and year-round maintenance for residential
              and commercial properties across the Dallas–Fort Worth area.
            </p>
            <div className="hero__cta-row">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get Free Estimate
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn btn--outline-light btn--lg">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--lg page-section--muted">
        <div className="container container--wide">
          <Reveal>
            <p className="services-intro">
              Big Dawg Irrigation provides custom landscaping, efficient irrigation systems,
              and year-round maintenance for residential and commercial properties across the
              Dallas–Fort Worth metroplex and surrounding communities.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="services-category">
              <h2 className="services-category__title">Core outdoor services</h2>
              <div className="services-grid">
                <article className="service-card">
                  <h2>
                    <Leaf size={22} className="service-card__icon" aria-hidden />
                    Custom Landscaping
                  </h2>
                  <p>
                    We design and install custom landscapes tailored to your property and goals.
                    From new installations to refreshes, we serve homeowners and businesses
                    throughout the DFW area with professional, quality work.
                  </p>
                  <p className="service-card__cta">
                    <Link href="/contact">Get an estimate →</Link>
                  </p>
                </article>
                <article className="service-card">
                  <h2>
                    <Droplets size={22} className="service-card__icon" aria-hidden />
                    Efficient Irrigation Systems
                  </h2>
                  <p>
                    As a licensed irrigation company, we install, repair, and maintain efficient
                    systems that save water and keep your landscape thriving across Dallas–Fort
                    Worth.
                  </p>
                  <p className="service-card__cta">
                    <Link href="/contact">Discuss your system →</Link>
                  </p>
                </article>
                <article className="service-card">
                  <h2>
                    <Wrench size={22} className="service-card__icon" aria-hidden />
                    Year-Round Maintenance
                  </h2>
                  <p>
                    Ongoing maintenance for residential and commercial properties—mowing, edging,
                    seasonal cleanups, and irrigation checks to keep everything on track.
                  </p>
                  <p className="service-card__cta">
                    <Link href="/contact">Plan maintenance →</Link>
                  </p>
                </article>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="services-category">
              <h2 className="services-category__title">Enhancements & seasonal</h2>
              <div className="services-grid services-grid--pair">
                <article className="service-card">
                  <h2>
                    <Lamp size={22} className="service-card__icon" aria-hidden />
                    Landscape Lighting
                  </h2>
                  <p>
                    Path lighting, accent lighting for beds and walkways, and professional
                    installation for ambiance and safety across the DFW area.
                  </p>
                  <p className="service-card__cta">
                    <Link href="/contact">Explore lighting →</Link>
                  </p>
                </article>
                <article className="service-card">
                  <h2>
                    <Sparkles size={22} className="service-card__icon" aria-hidden />
                    Christmas Light Installation
                  </h2>
                  <p>
                    Rooflines, trees, and displays—we handle design, installation, and takedown so
                    you can enjoy the season without the hassle.
                  </p>
                  <ChristmasLightFlyer />
                </article>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="services-cta">
              <p>
                <strong>Ready to get started?</strong> Contact us for a free estimate on any of our
                services in the Dallas–Fort Worth area.
              </p>
              <p>
                <Link href="/contact" className="link-with-icon">
                  Get a Free Estimate
                  <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                </Link>
                {" · "}
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
