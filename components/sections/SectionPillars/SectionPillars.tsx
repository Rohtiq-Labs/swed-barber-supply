"use client";

import "./section-pillars.css";

import { useLocale } from "@/context/LocaleContext";

const pillarIcons = [
  <svg key="0" viewBox="0 0 34 34" fill="none" stroke="#17181A" strokeWidth="1" aria-hidden="true">
    <rect x="5" y="5" width="24" height="24" rx="2" />
    <path d="M11 17l4 4 8-9" />
  </svg>,
  <svg key="1" viewBox="0 0 34 34" fill="none" stroke="#17181A" strokeWidth="1" aria-hidden="true">
    <path d="M4 24h20V10H4z" />
    <path d="M24 14h4l2 4v6h-6" />
    <circle cx="10" cy="27" r="2.5" />
    <circle cx="24" cy="27" r="2.5" />
  </svg>,
  <svg key="2" viewBox="0 0 34 34" fill="none" stroke="#17181A" strokeWidth="1" aria-hidden="true">
    <circle cx="17" cy="12" r="6" />
    <path d="M6 29c0-6 5-10 11-10s11 4 11 10" />
  </svg>,
];

export const SectionPillars = () => {
  const { dictionary } = useLocale();
  const { pillars } = dictionary;

  return (
    <section className="section section--tight" aria-labelledby="pillars-heading">
      <div className="wrap">
        <h2 id="pillars-heading" className="sr-only">
          Service pillars
        </h2>
        <div className="pillars reveal">
          {pillars.items.map((pillar, index) => (
            <article key={pillar.num} className="pillar">
              <span className="num mono">{pillar.num}</span>
              {pillarIcons[index]}
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
