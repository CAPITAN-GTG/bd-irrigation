import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

const PHONE = "469-835-4691";

export const metadata = createPageMetadata({
  title: "About BDI Landscape | Irrigation",
  description:
    "Licensed irrigation company in the Dallas-Fort Worth area since 2023. Over 10 years of experience. Rooted in faith, serving with excellence. Free estimates.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/pic-2.jpg"
          alt=""
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <div className="hero__inner">
            <h1 className="hero__title">About BDI Landscape | Irrigation</h1>
            <p className="hero__tagline">
              Licensed irrigation company in the DFW area. Over 10 years of experience. Rooted in faith, serving with excellence.
            </p>
            <p className="hero__cta">
              <Link href="/contact" className="hero__cta-link">Get a Free Estimate</Link>
              <span className="hero__cta-divider">or call</span>
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hero__cta-phone">{PHONE}</a>
            </p>
          </div>
        </div>
      </section>

      <article className="page-section page-section--lg">
        <div className="container">
          <p>
            BDI Landscape | Irrigation is a licensed irrigation company serving the Dallas-Fort Worth area and surrounding communities. Founded in 2023, we bring over 10 years of industry experience to every project.
          </p>
          <p>
            We are rooted in faith and committed to serving our customers with excellence. Whether you need custom landscaping, efficient irrigation systems, or year-round maintenance for your residential or commercial property, we provide reliable, professional service across the DFW metroplex.
          </p>
          <p>
            We offer free estimates and stand behind our work.{" "}
            <Link href="/contact" className="link-with-icon">
              Contact us
              <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
            </Link>{" "}
            to learn how we can help with your next landscaping or irrigation project in the Dallas-Fort Worth area.
          </p>
        </div>
      </article>
    </>
  );
}
