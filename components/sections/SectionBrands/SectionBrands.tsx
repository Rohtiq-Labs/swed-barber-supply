"use client";

import Link from "next/link";

import "./section-brands.css";

import { useLocale } from "@/context/LocaleContext";
import { featuredBrands } from "@/data/brands";

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
        {featuredBrands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="brand-cell"
            role="listitem"
          >
            <span>{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
