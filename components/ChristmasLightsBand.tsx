import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const PDF_HREF = "/BDI%20Christmas%20Light%20Flyer%201.pdf";

const POINTS = [
  "Rooflines, gutters, and architectural accents",
  "Trees, walkways, and custom displays",
  "Professional install, maintenance visits, and takedown",
];

export function ChristmasLightsBand() {
  return (
    <div className="home-seasonal-band">
      <div className="home-seasonal-band__split">
        <div className="home-seasonal-band__copy-col">
          <div className="home-seasonal-band__copy-inner">
            <p className="home-seasonal-band__kicker">Seasonal · Holiday lighting</p>
            <h2 className="home-seasonal-band__title" id="seasonal-heading">
              Christmas light installation
            </h2>
            <p className="home-seasonal-band__intro">
              Book early for peak dates. We handle design, install, and removal across DFW—no ladders,
              no storage headaches.
            </p>
            <p className="home-seasonal-band__caption">Residential &amp; commercial installs</p>
          </div>
        </div>
        <div className="home-seasonal-band__image-col">
          <Image
            src="/pic-21.webp"
            alt="Holiday and outdoor lighting in the Dallas–Fort Worth area"
            fill
            className="home-seasonal-band__image-full object-cover"
            sizes="(max-width: 899px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="home-seasonal-board">
        <header className="home-seasonal-board__head">
          <p className="home-seasonal-board__eyebrow">Service scope</p>
          <h3 className="home-seasonal-board__title">What we handle for you</h3>
        </header>
        <ul className="home-seasonal-board__list">
          {POINTS.map((text) => (
            <li key={text}>
              <span className="home-seasonal-board__check" aria-hidden>
                <Check size={18} strokeWidth={2.5} />
              </span>
              {text}
            </li>
          ))}
        </ul>
        <div className="home-seasonal-board__actions">
          <Link href="/contact" className="home-seasonal-band__btn home-seasonal-band__btn--primary">
            Request holiday lighting
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="home-seasonal-band__btn home-seasonal-band__btn--call"
          >
            <Phone size={18} aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
        <p className="home-seasonal-board__pdf">
          <a href={PDF_HREF} target="_blank" rel="noopener noreferrer">
            Printable flyer (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}
