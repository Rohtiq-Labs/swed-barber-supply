"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

import "./site-header.css";

import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { href: "/shop/elektronik", key: "elektronik" as const },
  { href: "/shop/saxar-rakning", key: "saxar" as const },
  { href: "/shop/salongtillbehor", key: "salong" as const },
  { href: "/shop/produkter", key: "produkter" as const },
  { href: "/brands", key: "brands" as const },
  { href: "/shop/hot-deals", key: "deals" as const },
];

export const SiteHeader = () => {
  const { dictionary } = useLocale();
  const { header } = dictionary;
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header id="siteHeader" className={menuOpen ? "menu-open" : ""}>
        <div className="nav-inner">
          <Link href="/" className="brand-mark" aria-label={header.brand}>
            <span className="sw serif">{header.brand}</span>
            <span className="sub">{header.tagline}</span>
          </Link>

          <nav className="primary nav-desktop" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {header.nav[link.key]}
              </Link>
            ))}
          </nav>

          <div className="nav-right nav-desktop">
            <Link className="btn-line" href="/shop">
              {header.nav.shop}
            </Link>
            <Link className="btn-line" href="/#trade">
              {header.tradePortal}
            </Link>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? header.menuClose : header.menuOpen}
            onClick={toggleMenu}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </header>

      <div
        id={menuId}
        className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label={header.menuClose}
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div
          className="mobile-nav__panel"
          role={menuOpen ? "dialog" : undefined}
          aria-modal={menuOpen ? true : undefined}
          aria-label="Mobile navigation"
        >
          <nav className="mobile-nav__links" aria-label="Mobile primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {header.nav[link.key]}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav__cta">
            <Link
              className="btn-solid"
              href="/shop"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {header.nav.shop}
            </Link>
            <Link
              className="btn-line"
              href="/#trade"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {header.tradePortal}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
