"use client";

import "./section-bestsellers.css";

import { useLocale } from "@/context/LocaleContext";

const cardIcons = [
  <svg key="0" viewBox="0 0 44 44" fill="none" stroke="#8A6D3B" strokeWidth="1" aria-hidden="true">
    <rect x="8" y="6" width="28" height="32" rx="1" />
    <line x1="8" y1="16" x2="36" y2="16" />
    <line x1="14" y1="10" x2="14" y2="14" />
  </svg>,
  <svg key="1" viewBox="0 0 44 44" fill="none" stroke="#8A6D3B" strokeWidth="1" aria-hidden="true">
    <circle cx="14" cy="32" r="6" />
    <circle cx="32" cy="32" r="6" />
    <path d="M14 27 L34 8 M32 27 L12 8" />
  </svg>,
  <svg key="2" viewBox="0 0 44 44" fill="none" stroke="#8A6D3B" strokeWidth="1" aria-hidden="true">
    <rect x="10" y="10" width="24" height="24" rx="12" />
    <path d="M17 22h10M22 17v10" />
  </svg>,
  <svg key="3" viewBox="0 0 44 44" fill="none" stroke="#8A6D3B" strokeWidth="1" aria-hidden="true">
    <path d="M8 34 L22 10 L36 34 Z" />
    <line x1="8" y1="34" x2="36" y2="34" />
  </svg>,
  <svg key="4" viewBox="0 0 44 44" fill="none" stroke="#8A6D3B" strokeWidth="1" aria-hidden="true">
    <rect x="12" y="8" width="20" height="28" rx="3" />
    <line x1="12" y1="16" x2="32" y2="16" />
  </svg>,
];

export const SectionBestsellers = () => {
  const { dictionary } = useLocale();
  const { bestsellers } = dictionary;

  return (
    <section className="section section--tight" aria-labelledby="bestsellers-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">{bestsellers.eyebrow}</div>
            <h2 id="bestsellers-heading" className="serif reveal">
              {bestsellers.title}
            </h2>
          </div>
          <p className="desc reveal">{bestsellers.desc}</p>
        </div>
      </div>
      <div className="wrap">
        <div className="dept-scroller reveal" role="list">
          {bestsellers.cards.map((card, index) => (
            <article key={card.sku} className="dept-card" role="listitem">
              <span className="icon">{cardIcons[index]}</span>
              <span className="tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="foot">
                <span>{card.brand}</span>
                <span>{card.sku}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
