import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Droplets,
  TreePine,
  Building2,
  ArrowRight,
  Lamp,
  Sparkles,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ChristmasLightFlyer } from "@/components/ChristmasLightFlyer";
import { Reveal } from "@/components/Reveal";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Big Dawg Irrigation offers custom landscaping, efficient irrigation systems, and year-round maintenance across the Dallas-Fort Worth area. Licensed. Free estimates. Call today.",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/fronpage-image.jpg"
          alt=""
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <div className="hero__inner">
            <h1 className="hero__title">
              Landscaping, irrigation & outdoor care for DFW properties
            </h1>
            <p className="hero__tagline">
              Licensed irrigation and year-round maintenance for residential and commercial
              properties. Thoughtful design, efficient systems, and crews you can trust.
            </p>
            <div className="hero__cta-row">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get Free Estimate
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn btn--outline-light btn--lg">
                Call Now
              </a>
            </div>
            <p className="hero__cta-meta">
              <span>Free estimates</span>
              <span className="hero__cta-divider">·</span>
              <span>Serving Dallas–Fort Worth</span>
            </p>
          </div>
        </div>
      </section>

      <section className="intro-band page-section--surface" aria-labelledby="intro-heading">
        <div className="container">
          <div className="intro-band__inner">
            <div className="intro-band__accent" aria-hidden />
            <div>
              <h2 id="intro-heading" className="visually-hidden">
                About Big Dawg Irrigation
              </h2>
              <p className="intro-band__text">
                <strong>Big Dawg Irrigation</strong>{" "}
                serves the Dallas–Fort Worth metroplex with custom landscaping, efficient
                irrigation, and year-round maintenance. We are a licensed irrigation company with
                over 10 years of experience—rooted in faith and committed to excellence on every
                property we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-section page-section--surface"
        aria-labelledby="gallery-teaser-heading"
      >
        <div className="container container--wide">
          <Reveal>
            <div className="gallery-teaser">
              <div className="gallery-teaser__intro">
                <h2 id="gallery-teaser-heading" className="gallery-teaser__title">
                  See our work
                </h2>
                <p className="gallery-teaser__text">
                  Browse a full gallery of landscaping, irrigation, and outdoor projects across
                  DFW—optimized for quick loading on any device.
                </p>
                <Link href="/gallery" className="link-with-icon">
                  Open project gallery
                  <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                </Link>
              </div>
              <Link
                href="/gallery"
                className="gallery-teaser__shots"
                aria-label="View project gallery — sample photos"
              >
                <span className="gallery-teaser__shot">
                  <Image
                    src="/pic-5.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 33vw, 200px"
                    loading="lazy"
                    quality={65}
                  />
                </span>
                <span className="gallery-teaser__shot">
                  <Image
                    src="/pic-6.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 33vw, 200px"
                    loading="lazy"
                    quality={65}
                  />
                </span>
                <span className="gallery-teaser__shot">
                  <Image
                    src="/pic-7.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 33vw, 200px"
                    loading="lazy"
                    quality={65}
                  />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="container container--wide">
          <Reveal>
            <div className="section-eyebrow">
              <span className="section-eyebrow__dot" aria-hidden />
              What we do
            </div>
            <div className="layout-grid">
              <div className="layout-grid__content">
                <div className="layout-grid__panel">
                  <h2>What We Offer</h2>
                  <p className="lead">
                    From design to drip lines and seasonal cleanups, we keep outdoor spaces
                    healthy, efficient, and beautiful.
                  </p>
                  <ul className="list-with-icons">
                    <li>
                      <Leaf size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Custom landscaping design and installation</span>
                    </li>
                    <li>
                      <Droplets size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Efficient irrigation systems and repairs</span>
                    </li>
                    <li>
                      <TreePine size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Year-round lawn and landscape maintenance</span>
                    </li>
                    <li>
                      <Building2 size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Residential and commercial services</span>
                    </li>
                    <li>
                      <Lamp size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Landscape lighting for flowerbeds and walkways</span>
                    </li>
                    <li>
                      <Sparkles size={18} className="list-with-icons__icon" aria-hidden />
                      <span>Christmas light installation on houses</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full min-w-0">
                <CardContainer
                  containerClassName="!py-0 w-full max-w-none"
                  className="w-full max-w-full"
                >
                  <CardBody className="!h-auto !w-full max-w-full aspect-[4/3] shadow-[var(--shadow-lg)] ring-1 ring-[var(--color-border)]">
                    <CardItem
                      translateZ={50}
                      className="relative h-full min-h-[200px] w-full overflow-hidden"
                    >
                      <Image
                        src="/pic-2.webp"
                        alt="Landscaping and irrigation work in DFW"
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--surface page-section--tint-blue">
        <div className="container container--wide">
          <Reveal>
            <div className="layout-grid layout-grid--reverse">
              <div className="layout-grid__content">
                <div className="section-eyebrow">
                  <span className="section-eyebrow__dot" aria-hidden />
                  Local trust
                </div>
                <h2>Trusted in the Dallas–Fort Worth Area</h2>
                <p className="lead">
                  From new installations to ongoing maintenance, we help homeowners and businesses
                  across DFW keep their properties looking sharp—without the stress.
                </p>
                <p>
                  <Link href="/about" className="link-with-icon">
                    Our story &amp; credentials
                    <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                  </Link>
                </p>
              </div>
              <div className="layout-grid__media layout-grid__media--lift">
                <Image
                  src="/pic-9.webp"
                  alt="Professional landscaping service in Dallas-Fort Worth"
                  width={600}
                  height={450}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--surface">
        <div className="container container--wide">
          <Reveal>
            <div className="layout-grid">
              <div className="layout-grid__content">
                <div className="layout-grid__panel">
                  <h2>Landscape Lighting</h2>
                  <p className="lead">
                    Illuminate paths, highlight plantings, and add ambiance and safety to your
                    outdoor spaces with professional design and installation.
                  </p>
                </div>
              </div>
              <div className="layout-grid__media layout-grid__media--lift">
                <Image
                  src="/pic-14.webp"
                  alt="Landscape lighting for flowerbeds and walkways in DFW"
                  width={600}
                  height={450}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="page-section page-section--seasonal"
        aria-labelledby="seasonal-heading"
      >
        <div className="container container--wide">
          <Reveal>
            <div className="section-eyebrow section-eyebrow--light">
              <span className="section-eyebrow__dot" aria-hidden />
              Seasonal
            </div>
            <h2 id="seasonal-heading">Christmas Light Installation</h2>
            <p className="lead">
              We install holiday lighting on homes throughout DFW—from rooflines to trees and
              displays—so you can enjoy the season without the ladder or takedown hassle.
            </p>
            <div className="seasonal-card">
              <ChristmasLightFlyer />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--surface">
        <div className="container container--wide">
          <Reveal>
            <div className="cta-block">
              <h2>Ready for a free estimate?</h2>
              <p>
                Spots fill quickly during peak seasons. Call today or send a message—we&apos;ll
                follow up fast with next steps for your landscaping or irrigation project.
              </p>
              <p className="cta-phone">
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </p>
              <div className="cta-block__actions">
                <Link href="/contact" className="btn btn--ghost btn--lg">
                  Request a quote
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="btn btn--secondary btn--lg">
                  Call now
                </a>
              </div>
              <p className="cta-block__note">
                Prefer email?{" "}
                <Link href="/contact" className="link-with-icon">
                  Contact us online
                  <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                </Link>
              </p>
              <div className="layout-images" style={{ marginTop: "var(--gap-xl)" }}>
                <div className="layout-images__cell">
                  <Image
                    src="/pic-21.webp"
                    alt=""
                    width={400}
                    height={300}
                    sizes="(max-width: 767px) 50vw, 25vw"
                  />
                </div>
                <div className="layout-images__cell">
                  <Image
                    src="/pic-28.webp"
                    alt=""
                    width={400}
                    height={300}
                    sizes="(max-width: 767px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
