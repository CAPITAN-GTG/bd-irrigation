"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

function navLinkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = useCallback(() => {
    menuToggleRef.current?.focus();
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__bar">
        <div className="site-header__top">
          <div className="site-header__cluster">
            <div className="site-header__top-inner">
              <div className="site-header__ctas">
                <Link
                  href="/contact"
                  className="site-header__pill site-header__pill--dotted site-header__pill--compact"
                  onClick={closeDrawer}
                >
                  Free estimate
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="site-header__pill site-header__pill--call site-header__pill--compact">
                  <Phone size={14} aria-hidden />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-header__divider" aria-hidden />

        <div className="site-header__bottom">
          <div className="site-header__cluster">
            <div className="site-header__bottom-inner">
              <Link
                href="/"
                className="site-header__logo-cell site-logo"
                onClick={closeDrawer}
                aria-label="Big Dawg Irrigation – Home"
              >
                <span className="site-logo__frame">
                  <Image
                    src="/BDI Full logo.svg"
                    alt=""
                    fill
                    className="site-logo__img"
                    sizes="(max-width: 767px) 60vw, min(380px, 28vw)"
                    priority
                  />
                </span>
              </Link>

              <nav className="site-header__nav-main site-nav site-nav--desktop" aria-label="Main navigation">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`site-nav__link${navLinkIsActive(pathname, href) ? " is-active" : ""}`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="site-header__toggle-wrap">
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
          </div>
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
          <button type="button" className="site-nav__close" onClick={closeDrawer} aria-label="Close menu">
            <X size={24} aria-hidden />
          </button>
        </div>
        <div className="site-nav__drawer-pills">
          <Link
            href="/contact"
            className="site-header__pill site-header__pill--dotted site-header__pill--compact"
            onClick={closeDrawer}
          >
            Free estimate
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="site-header__pill site-header__pill--call site-header__pill--compact"
            onClick={closeDrawer}
          >
            <Phone size={14} aria-hidden />
            Call now
          </a>
        </div>
        <div className="site-nav__drawer-rule-dot" aria-hidden />
        <ul className="site-nav__drawer-list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`site-nav__drawer-link${navLinkIsActive(pathname, href) ? " is-active" : ""}`}
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
