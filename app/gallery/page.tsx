import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import { GalleryView } from "@/components/GalleryView";
import { PHONE_TEL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Photo gallery of landscaping, irrigation, and outdoor projects by Big Dawg Irrigation across the Dallas–Fort Worth area.",
});

export default function GalleryPage() {
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
            <h1 className="hero__title">Project gallery</h1>
            <p className="hero__tagline">
              A look at our work across DFW—landscaping, irrigation, lighting, and seasonal
              installs. Tap any photo to browse full size.
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

      <section
        className="page-section page-section--lg page-section--surface"
        aria-labelledby="gallery-grid-heading"
      >
        <div className="container container--wide">
          <Reveal>
            <h2 id="gallery-grid-heading" className="gallery-page__heading">
              Our work
            </h2>
            <p className="gallery-page__lead lead">
              Thumbnails load efficiently; full-size opens in a viewer you can close with the
              button, the backdrop, or Escape. On phones, swipe left or right between photos.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <GalleryView />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="gallery-page__cta">
              <Link href="/contact" className="link-with-icon">
                Start your project
                <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
