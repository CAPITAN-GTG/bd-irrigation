"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => {
    menuToggleRef.current?.focus();
    setMenuOpen(false);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo" onClick={closeDrawer} aria-label="BDI Landscape | Irrigation – Home">
          <Image
            src="/BDI Full logo.svg"
            alt=""
            width={480}
            height={126}
            className="site-logo__img"
            priority
          />
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

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
      </nav>
    </header>
  );
}
