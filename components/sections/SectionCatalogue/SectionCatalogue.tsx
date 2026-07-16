"use client";

import Link from "next/link";

import "./section-catalogue.css";

import { useLocale } from "@/context/LocaleContext";
import { categories } from "@/data/categories";
import { getProductsByCategory, getHotDeals } from "@/data/catalog";
import { pickName } from "@/lib/catalog-i18n";

const LedgerArrow = () => (
  <svg
    className="ledger-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="M6 18L18 6M18 6H8M18 6V16" />
  </svg>
);

const categoryHrefs: Record<string, string> = {
  elektronik: "/shop/elektronik",
  "saxar-rakning": "/shop/saxar-rakning",
  salongtillbehor: "/shop/salongtillbehor",
  produkter: "/shop/produkter",
  "hot-deals": "/shop/hot-deals",
};

export const SectionCatalogue = () => {
  const { locale, dictionary } = useLocale();
  const { catalogue } = dictionary;

  return (
    <section className="section" id="catalogue" aria-labelledby="catalogue-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">{catalogue.eyebrow}</div>
            <h2 id="catalogue-heading" className="serif reveal">
              {catalogue.title} <br />
              {catalogue.titleBreak}
            </h2>
          </div>
          <p className="desc reveal">{catalogue.desc}</p>
        </div>

        <div className="ledger reveal">
          {categories.map((category) => {
            const count =
              category.slug === "hot-deals"
                ? getHotDeals().length
                : getProductsByCategory(category.slug).length;

            return (
              <Link
                key={category.slug}
                href={categoryHrefs[category.slug]}
                className="ledger-row"
                id={category.slug === "hot-deals" ? "deals" : undefined}
              >
                <span className="ledger-num mono">{category.num}</span>
                <span className="ledger-title serif">{pickName(locale, category)}</span>
                <span className="ledger-sub">
                  {category.subcategories.length > 0
                    ? category.subcategories
                        .slice(0, 5)
                        .map((sub) => pickName(locale, sub))
                        .join(" · ")
                    : dictionary.shop.hotDeals}
                </span>
                <span className="ledger-count mono">
                  {count} {dictionary.shop.articles.toUpperCase()}
                </span>
                <LedgerArrow />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
