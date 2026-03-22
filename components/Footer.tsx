import Link from "next/link";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__container">
        <div className="footer__brand-block">
          <p className="footer__brand">Big Dawg Irrigation</p>
          <p className="footer__tagline">
            Serving the DFW area and surrounding communities with licensed irrigation,
            landscaping, and dependable outdoor care.
          </p>
        </div>
        <div className="footer__contact">
          <p className="footer__contact-item">
            <a href={`tel:${PHONE_TEL}`} className="footer__link">
              <Phone size={16} aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="footer__contact-item">
            <a href={`mailto:${EMAIL}`} className="footer__link">
              <Mail size={16} aria-hidden />
              {EMAIL}
            </a>
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link href="/" className="footer__link">
            Home
          </Link>
          <Link href="/about" className="footer__link">
            About
          </Link>
          <Link href="/services" className="footer__link">
            Services
          </Link>
          <Link href="/contact" className="footer__link">
            Contact
          </Link>
        </nav>
        <div className="footer__copy-row">
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
