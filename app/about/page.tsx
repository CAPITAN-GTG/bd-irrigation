import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import { TrustBadges } from "@/components/TrustBadges";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata = createPageMetadata({
  description:
    "Licensed irrigation company in the Dallas-Fort Worth area since 2023. Over 10 years of experience. Rooted in faith, serving with excellence. Free estimates.",
});

export default function AboutPage() {
  return (
    <>
      <section className="hero hero--simple hero--compact">
        <Image
          src="/about-image.jpg"
          alt="Landscaping and irrigation team serving Dallas–Fort Worth"
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__content">
          <div className="hero__copy hero__inner">
            <h1 className="hero__title hero__title--simple">About Big Dawg Irrigation</h1>
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

      <article className="page-section page-section--lg page-section--surface home-intro">
        <div className="container container--home">
          <Reveal>
            <div className="section-eyebrow">
              <span className="section-eyebrow__dot" aria-hidden />
              Who we are
            </div>
            <h2>Our story</h2>
            <p className="lead">
              Big Dawg Irrigation is a licensed irrigation company serving the Dallas–Fort
              Worth area and surrounding communities. Founded in 2023, we bring over 10 years of
              industry experience to every project.
            </p>
            <p className="lead">
              We are rooted in faith and committed to serving our customers with excellence. Whether
              you need custom landscaping, efficient irrigation systems, or year-round maintenance
              for your residential or commercial property, we provide reliable, professional
              service across the DFW metroplex.
            </p>
            <p className="lead">
              We offer free estimates and stand behind our work.{" "}
              <Link href="/contact" className="link-with-icon">
                Contact us
                <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
              </Link>{" "}
              to learn how we can help with your next landscaping or irrigation project.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <TrustBadges />
          </Reveal>
          <Reveal delay={0.12}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </article>
    </>
  );
}
