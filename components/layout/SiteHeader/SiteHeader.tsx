"use client";

import "./site-header.css";

import { useLocale } from "@/context/LocaleContext";

export const SiteHeader = () => {
  const { dictionary } = useLocale();
  const { header } = dictionary;

  return (
    <header id="siteHeader">
      <div className="nav-inner">
        <a href="#" className="brand-mark" aria-label={header.brand}>
          <span className="sw serif">{header.brand}</span>
          <span className="sub">{header.tagline}</span>
        </a>
        <nav className="primary" aria-label="Primary navigation">
          <a href="#catalogue">{header.nav.elektronik}</a>
          <a href="#catalogue">{header.nav.saxar}</a>
          <a href="#catalogue">{header.nav.salong}</a>
          <a href="#catalogue">{header.nav.produkter}</a>
          <a href="#brands">{header.nav.brands}</a>
          <a href="#deals">{header.nav.deals}</a>
        </nav>
        <div className="nav-right">
          <a className="btn-line" href="#trade">
            {header.tradePortal}
          </a>
        </div>
      </div>
    </header>
  );
};
