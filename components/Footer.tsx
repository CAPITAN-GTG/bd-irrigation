import Link from "next/link";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer texture-overlay">
      <div className="footer__top-accent" aria-hidden />
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <p className="footer__brand">Big Dawg Irrigation</p>
            <p className="footer__tagline">
              Licensed irrigation, landscaping, and dependable outdoor care for homes and
              businesses across Dallas–Fort Worth.
            </p>
            <div className="footer__cta">
              <Link href="/contact" className="footer__cta-pill">
                Request a free estimate
              </Link>
            </div>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Navigate</p>
            <nav className="footer__nav-stack" aria-label="Footer navigation">
              {FOOTER_LINKS.map(({ href, label }) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <ul className="footer__contact-list">
              <li>
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone size={18} className="footer__contact-icon" aria-hidden />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <Mail size={18} className="footer__contact-icon" aria-hidden />
                  <span>{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Big Dawg Irrigation. All rights reserved.
          </p>
          <a
            href="https://grimo-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__powered"
          >
            powered by GrimoDev
            <ExternalLink size={12} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
