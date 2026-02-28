import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, TreePine, Building2, ArrowRight, Lamp, Sparkles } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { ChristmasLightFlyer } from "@/components/ChristmasLightFlyer";

const PHONE = "469-835-4691";

export const metadata = createPageMetadata({
  title: "Custom Landscaping & Irrigation Services in DFW",
  description:
    "BDI Landscape | Irrigation offers custom landscaping, efficient irrigation systems, and year-round maintenance across the Dallas-Fort Worth area. Licensed. Free estimates. Call today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/pic-1.jpg"
          alt=""
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <div className="hero__inner">
            <h1 className="hero__title">Custom Landscaping & Irrigation in DFW</h1>
            <p className="hero__tagline">
              Licensed irrigation and year-round maintenance for residential and commercial properties. Free estimates.
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
        <div className="container">
          <h2 className="visually-hidden">About BDI Landscape | Irrigation</h2>
          <p>
            BDI Landscape | Irrigation serves the Dallas-Fort Worth metroplex and surrounding areas with custom landscaping, efficient irrigation systems, and year-round maintenance for residential and commercial properties. We are a licensed irrigation company with over 10 years of experience, rooted in faith and committed to excellence.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container container--wide">
          <div className="layout-grid">
            <div className="layout-grid__content">
              <h2>What We Offer</h2>
              <ul className="list-with-icons">
                <li><Leaf size={18} className="list-with-icons__icon" aria-hidden /><span>Custom landscaping design and installation</span></li>
                <li><Droplets size={18} className="list-with-icons__icon" aria-hidden /><span>Efficient irrigation systems and repairs</span></li>
                <li><TreePine size={18} className="list-with-icons__icon" aria-hidden /><span>Year-round lawn and landscape maintenance</span></li>
                <li><Building2 size={18} className="list-with-icons__icon" aria-hidden /><span>Residential and commercial services</span></li>
                <li><Lamp size={18} className="list-with-icons__icon" aria-hidden /><span>Landscape lighting for flowerbeds and walkways</span></li>
                <li><Sparkles size={18} className="list-with-icons__icon" aria-hidden /><span>Christmas light installation on houses</span></li>
              </ul>
            </div>
            <div className="layout-grid__media">
              <Image
                src="/pic-2.jpg"
                alt="Landscaping and irrigation work in DFW"
                width={600}
                height={450}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container container--wide">
          <div className="layout-grid layout-grid--reverse">
            <div className="layout-grid__content">
              <h2>Trusted in the Dallas–Fort Worth Area</h2>
              <p>
                From new installations to ongoing maintenance, we help homeowners and businesses across DFW and surrounding communities keep their properties looking their best.
              </p>
            </div>
            <div className="layout-grid__media">
              <Image
                src="/pic-3.jpg"
                alt="Professional landscaping service in Dallas-Fort Worth"
                width={600}
                height={450}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container container--wide">
          <div className="layout-grid">
            <div className="layout-grid__content">
              <h2>Landscape Lighting</h2>
              <p>
                We do landscape lighting for flowerbeds and walkways. Illuminate your paths, highlight plantings, and add ambiance and safety to your outdoor spaces. Serving the DFW area with professional design and installation.
              </p>
            </div>
            <div className="layout-grid__media">
              <Image
                src="/pic-2.jpg"
                alt="Landscape lighting for flowerbeds and walkways in DFW"
                width={600}
                height={450}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container container--wide">
          <h2>Christmas Light Installation</h2>
          <p>
            We offer Christmas light installation on houses throughout the Dallas–Fort Worth area. From rooflines to trees and displays, we handle design, installation, and takedown so you can enjoy the season without the hassle.
          </p>
          <ChristmasLightFlyer />
        </div>
      </section>

      <section className="page-section cta-block">
        <div className="container container--wide">
          <h2>Get a Free Estimate</h2>
          <p>
            Serving the DFW area and surrounding communities. Contact us for a free estimate on your next landscaping or irrigation project.
          </p>
          <p className="cta-phone">
            <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
          </p>
          <p>
            <Link href="/contact" className="link-with-icon">
              Contact us
              <ArrowRight size={16} className="link-with-icon__arrow" aria-hidden />
            </Link>
            {" "}for more information or to request service.
          </p>
          <div className="layout-images" style={{ marginTop: "var(--section)" }}>
            <Image
              src="/pic-4.jpg"
              alt=""
              width={400}
              height={300}
              sizes="50vw"
            />
            <Image
              src="/pic-1.jpg"
              alt=""
              width={400}
              height={300}
              sizes="50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
