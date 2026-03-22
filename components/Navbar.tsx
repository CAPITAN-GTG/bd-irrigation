"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = useCallback(() => {
    menuToggleRef.current?.focus();
    setMenuOpen(false);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container container--wide site-header__inner">
        <Link
          href="/"
          className="site-logo"
          onClick={closeDrawer}
          aria-label="Big Dawg Irrigation – Home"
        >
          <span className="site-logo__frame">
            <Image
              src="/BDI Full logo.svg"
              alt=""
              fill
              className="site-logo__img"
              sizes="(max-width: 767px) 70vw, min(512px, 35vw)"
              priority
            />
          </span>
        </Link>

        <div className="site-header__actions">
          <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <a href={`tel:${PHONE_TEL}`} className="btn btn--primary site-header__cta">
            <Phone size={18} aria-hidden />
            Call Now
          </a>

          <button
            ref={menuToggleRef}
            type="button"
            className="site-nav__toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} aria-hidden />
          </button>
        </div>
      </div>

      <div
        className={`site-nav__backdrop ${menuOpen ? "site-nav__backdrop--open" : ""}`}
        aria-hidden
        onClick={closeDrawer}
      />
      <nav
        className={`site-nav__drawer ${menuOpen ? "site-nav__drawer--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="site-nav__drawer-header">
          <span className="site-nav__drawer-title">Menu</span>
          <button
            type="button"
            className="site-nav__close"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <X size={24} aria-hidden />
          </button>
        </div>
        <ul className="site-nav__drawer-list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="site-nav__drawer-link"
                onClick={closeDrawer}
              >
                <span>{label}</span>
                <ChevronRight size={18} className="site-nav__drawer-icon" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <div className="site-nav__drawer-cta">
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn btn--primary"
            style={{ width: "100%" }}
            onClick={closeDrawer}
          >
            <Phone size={18} aria-hidden />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </nav>
    </header>
  );
}
