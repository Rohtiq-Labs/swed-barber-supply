"use client";

import "./section-brands.css";

import { useLocale } from "@/context/LocaleContext";

export const SectionBrands = () => {
  const { dictionary } = useLocale();
  const { brands } = dictionary;

  return (
    <section className="section" id="brands" aria-labelledby="brands-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">{brands.eyebrow}</div>
            <h2 id="brands-heading" className="serif reveal">
              {brands.title}
            </h2>
          </div>
          <p className="desc reveal">{brands.desc}</p>
        </div>
      </div>
      <div className="brand-wall reveal" role="list">
        {brands.names.map((name) => (
          <div key={name} className="brand-cell" role="listitem">
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
