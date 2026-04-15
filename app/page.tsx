import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ChristmasLightsBand } from "@/components/ChristmasLightsBand";
import { HomeServicesCarousel } from "@/components/HomeServicesCarousel";
import { ParallaxSlashFigure } from "@/components/ParallaxSlashFigure";
import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Big Dawg Irrigation offers custom landscaping, efficient irrigation systems, and year-round maintenance across the Dallas-Fort Worth area. Licensed. Free estimates. Call today.",
});

export default function HomePage() {
  return (
    <>
      <section className="hero hero--simple">
        <Image
          src="/fronpage-image.jpg"
          alt="Landscaped property with healthy lawn and irrigation in the Dallas–Fort Worth area"
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__content">
          <div className="hero__copy hero__inner">
            <p className="hero__eyebrow">DFW · Landscape &amp; irrigation</p>
            <h1 className="hero__title">Landscaping &amp; irrigation built for North Texas</h1>
            <p className="hero__tagline">
              Licensed crews, efficient systems, and outdoor care you can count on—homes and
              businesses welcome.
            </p>
            <ul className="hero__stat-chips" aria-label="Service highlights">
              <li>Licensed irrigation</li>
              <li>10+ yrs · DFW</li>
              <li>Res. &amp; commercial</li>
            </ul>
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
              <span>Dallas–Fort Worth</span>
            </p>
          </div>
        </div>
      </section>

      <section
        className="page-section page-section--surface home-intro"
        aria-labelledby="intro-heading"
      >
        <div className="container container--home">
          <div className="home-intro__grid">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow__dot" aria-hidden />
                Who we are
              </div>
              <h2 id="intro-heading">Big Dawg Irrigation</h2>
              <p className="home-section__lead">
                We serve the Dallas–Fort Worth metroplex with custom landscaping, efficient
                irrigation, and year-round maintenance. We are a licensed irrigation company with
                over 10 years of experience—rooted in faith and committed to excellence on every
                property we touch.
              </p>
              <p className="home-intro__cta">
                <Link href="/about" className="link-with-icon">
                  Read our story
                  <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                </Link>
              </p>
            </div>
            <aside className="home-intro__aside" aria-label="Company highlights">
              <div className="home-intro__stat">
                <span className="home-intro__stat-value">10+</span>
                <p className="home-intro__stat-label">Years serving DFW homeowners and businesses</p>
              </div>
              <div className="home-intro__stat">
                <span className="home-intro__stat-value">Licensed</span>
                <p className="home-intro__stat-label">Irrigation work done to code, start to finish</p>
              </div>
              <div className="home-intro__stat">
                <span className="home-intro__stat-value">Full-service</span>
                <p className="home-intro__stat-label">Design, install, lighting, and seasonal care</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="page-section home-offerings-dark texture-overlay"
        aria-labelledby="offerings-heading"
      >
        <Reveal>
          <header className="home-offerings-dark__head home-section__head home-section__head--center">
            <div className="section-eyebrow">
              <span className="section-eyebrow__dot" aria-hidden />
              What we do
            </div>
            <h2 id="offerings-heading">Services that cover your whole property</h2>
            <p className="home-section__lead">
              Hover a card to see the service—full-width carousel, real project photos.
            </p>
          </header>
        </Reveal>
        <HomeServicesCarousel />
        <Reveal>
          <p className="home-offerings-dark__foot">
            <Link href="/services" className="link-with-icon">
              Explore all services
              <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
            </Link>
          </p>
        </Reveal>
      </section>

      <section className="home-trust-slash" aria-labelledby="trust-heading">
        <div className="home-trust-slash__grid">
          <div className="home-trust-slash__copy">
            <Reveal>
              <div className="home-trust-slash__copy-inner">
                <div className="section-eyebrow">
                  <span className="section-eyebrow__dot" aria-hidden />
                  Local trust
                </div>
                <h2 id="trust-heading">Trusted in Dallas–Fort Worth</h2>
                <p className="home-trust-slash__lead">
                  From new installations to ongoing maintenance, we help homeowners and businesses
                  across DFW keep their properties looking sharp—without the stress.
                </p>
                <p className="home-trust-slash__link-wrap">
                  <Link href="/about" className="link-with-icon">
                    Our story &amp; credentials
                    <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
          <ParallaxSlashFigure
            src="/pic-31.webp"
            alt="Professional landscaping service in Dallas-Fort Worth"
            figureClassName="home-trust-slash__figure-wrap"
            imgClassName="home-trust-slash__img object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
            loading="lazy"
            strength={24}
          />
        </div>
      </section>

      <section className="home-lighting-slash" aria-labelledby="lighting-heading">
        <div className="home-lighting-slash__grid">
          <ParallaxSlashFigure
            src="/pic-38.webp"
            alt="Landscape lighting for flowerbeds and walkways in DFW"
            figureClassName="home-lighting-slash__figure-wrap"
            imgClassName="home-lighting-slash__img object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
            loading="lazy"
            strength={24}
          />
          <div className="home-lighting-slash__copy">
            <Reveal>
              <div className="home-lighting-slash__copy-inner">
                <div className="section-eyebrow">
                  <span className="section-eyebrow__dot" aria-hidden />
                  Outdoor living
                </div>
                <h2 id="lighting-heading">Landscape lighting</h2>
                <p className="home-lighting-slash__lead">
                  Illuminate paths, highlight plantings, and add ambiance and safety to your outdoor
                  spaces with professional design and installation.
                </p>
                <p className="home-lighting-slash__link-wrap">
                  <Link href="/services" className="link-with-icon">
                    See lighting options
                    <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="page-section page-section--seasonal texture-overlay"
        aria-labelledby="seasonal-heading"
      >
        <Reveal>
          <ChristmasLightsBand />
        </Reveal>
      </section>

      <section className="page-section home-work-showcase" aria-labelledby="gallery-teaser-heading">
        <div className="container container--home">
          <Reveal>
            <div className="home-gallery-mosaic">
              <div className="home-gallery-mosaic__intro">
                <div className="home-gallery-mosaic__intro-card">
                  <div className="section-eyebrow">
                    <span className="section-eyebrow__dot" aria-hidden />
                    Portfolio
                  </div>
                  <h2 id="gallery-teaser-heading" className="home-gallery-mosaic__title">
                    See our work
                  </h2>
                  <p className="home-gallery-mosaic__text">
                    Landscaping, irrigation, and outdoor projects across DFW—real installs, real
                    curb appeal.
                  </p>
                  <Link href="/gallery" className="btn btn--primary home-gallery-mosaic__cta">
                    Open full gallery
                    <ArrowRight size={18} className="home-gallery-mosaic__cta-icon" aria-hidden />
                  </Link>
                </div>
              </div>
              <Link
                href="/gallery"
                className="home-gallery-mosaic__grid"
                aria-label="View project gallery — featured photos"
              >
                <span className="home-gallery-mosaic__cell home-gallery-mosaic__cell--hero">
                  <Image
                    src="/pic-5.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 50vw, 400px"
                    loading="lazy"
                    quality={70}
                  />
                  <span className="home-gallery-mosaic__cell-label">Projects</span>
                </span>
                <span className="home-gallery-mosaic__cell">
                  <Image
                    src="/pic-6.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 50vw, 200px"
                    loading="lazy"
                    quality={70}
                  />
                </span>
                <span className="home-gallery-mosaic__cell">
                  <Image
                    src="/pic-7.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 50vw, 200px"
                    loading="lazy"
                    quality={70}
                  />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section home-estimate texture-overlay" aria-labelledby="estimate-heading">
        <div className="container container--home">
          <Reveal>
            <div className="home-estimate__card">
              <div className="home-estimate__layout">
                <div className="home-estimate__copy">
                  <p className="home-estimate__eyebrow">Next steps</p>
                  <h2 id="estimate-heading">Ready for a free estimate?</h2>
                  <p className="home-estimate__lead">
                    Spots fill quickly during peak seasons. Call or message us—we&apos;ll follow up
                    fast with clear next steps for your landscaping or irrigation project.
                  </p>
                  <ul className="home-estimate__chips" aria-label="Why reach out">
                    <li>Licensed irrigation</li>
                    <li>Free estimates</li>
                    <li>DFW metroplex</li>
                  </ul>
                  <div className="home-estimate__phone">
                    <span className="home-estimate__phone-label">Call us directly</span>
                    <a href={`tel:${PHONE_TEL}`} className="home-estimate__phone-num">
                      <Phone size={18} aria-hidden className="home-estimate__phone-icon" />
                      <span>{PHONE_DISPLAY}</span>
                    </a>
                  </div>
                  <div className="home-estimate__actions">
                    <Link href="/contact" className="btn btn--primary btn--lg">
                      Request a quote
                    </Link>
                    <a href={`tel:${PHONE_TEL}`} className="btn btn--secondary btn--lg">
                      Call now
                    </a>
                  </div>
                  <p className="home-estimate__note">
                    Prefer email?{" "}
                    <Link href="/contact" className="link-with-icon">
                      Contact us online
                      <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
                    </Link>
                  </p>
                </div>
                <div className="home-estimate__visual">
                  <div className="home-estimate__photos">
                    <div className="home-estimate__photo home-estimate__photo--back">
                      <Image
                        src="/pic-28.webp"
                        alt="Irrigation and lawn care in the Dallas–Fort Worth area"
                        fill
                        className="object-cover"
                        sizes="(max-width: 899px) 45vw, 320px"
                      />
                    </div>
                    <div className="home-estimate__photo home-estimate__photo--front">
                      <Image
                        src="/pic-21.webp"
                        alt="Landscaping project in the Dallas–Fort Worth area"
                        fill
                        className="object-cover"
                        sizes="(max-width: 899px) 55vw, 380px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
