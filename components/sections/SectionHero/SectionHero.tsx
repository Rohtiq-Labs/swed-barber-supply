"use client";

import Link from "next/link";

import "./section-hero.css";

import { useLocale } from "@/context/LocaleContext";

const HeroBlueprint = () => (
  <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g stroke="#17181A" strokeWidth="1.1">
      <circle className="reveal-line" style={{ "--len": 170 } as React.CSSProperties} cx="95" cy="330" r="27" />
      <circle className="reveal-line" style={{ "--len": 170 } as React.CSSProperties} cx="205" cy="330" r="27" />
      <path className="reveal-line" style={{ "--len": 520 } as React.CSSProperties} d="M95 303 L215 40" />
      <path className="reveal-line" style={{ "--len": 520 } as React.CSSProperties} d="M205 303 L85 40" />
      <path className="reveal-line" style={{ "--len": 60 } as React.CSSProperties} d="M150 168 L150 178" strokeWidth="2" />
      <circle className="reveal-line" style={{ "--len": 40 } as React.CSSProperties} cx="150" cy="172" r="6" />
    </g>
    <g stroke="#8A6D3B" strokeWidth="1" strokeDasharray="2 4" opacity="0.6">
      <line x1="20" y1="330" x2="70" y2="330" />
      <line x1="230" y1="330" x2="280" y2="330" />
    </g>
    <text x="20" y="360" fontFamily="IBM Plex Mono" fontSize="9" fill="#8A6D3B">
      FIG. 01 — SHEAR, 6.0&quot;
    </text>
  </svg>
);

export const SectionHero = () => {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-stage">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow reveal">{hero.eyebrow}</div>
            <h1 id="hero-heading" className="serif reveal">
              {hero.title} <em>{hero.titleEmphasis}</em> {hero.titleEnd}
            </h1>
            <p className="hero-sub reveal">{hero.subtitle}</p>
            <div className="hero-cta reveal">
              <Link href="/shop" className="btn-solid">
                {hero.ctaCatalogue}
              </Link>
              <Link href="#trade" className="btn-line">
                {hero.ctaTrade}
              </Link>
            </div>
          </div>
          <div className="hero-figure reveal" aria-hidden="true">
            <HeroBlueprint />
          </div>
        </div>
      </div>
    </section>
  );
};
