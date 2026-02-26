import Link from "next/link";
import { Phone, Mail, ExternalLink } from "lucide-react";

const PHONE = "469-835-4691";
const EMAIL = "isaiah@bdirrigation.com";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__container">
        <div className="footer__brand-block">
          <p className="footer__brand">BDI Landscape | Irrigation</p>
          <p className="footer__tagline">Serving the DFW area and surrounding communities.</p>
        </div>
        <div className="footer__contact">
          <p className="footer__contact-item">
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className="footer__link">
              <Phone size={16} aria-hidden />
              {PHONE}
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
          <Link href="/" className="footer__link">Home</Link>
          <Link href="/about" className="footer__link">About</Link>
          <Link href="/services" className="footer__link">Services</Link>
          <Link href="/contact" className="footer__link">Contact</Link>
        </nav>
        <div className="footer__copy-row">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} BDI Landscape | Irrigation. All rights reserved.
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
