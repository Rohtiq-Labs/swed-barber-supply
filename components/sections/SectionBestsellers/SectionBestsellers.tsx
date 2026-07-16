"use client";

import Link from "next/link";

import "./section-bestsellers.css";

import { ProductImage } from "@/components/shop/ProductImage";
import { useLocale } from "@/context/LocaleContext";
import { getBestsellers } from "@/data/catalog";
import { getBrandBySlug } from "@/data/brands";
import { pickName, pickShortDesc } from "@/lib/catalog-i18n";

export const SectionBestsellers = () => {
  const { locale, dictionary } = useLocale();
  const { bestsellers } = dictionary;
  const cards = getBestsellers().slice(0, 5);

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
          {cards.map((product) => {
            const brand = getBrandBySlug(product.brand);

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="dept-card"
                role="listitem"
              >
                <div className="dept-card__image">
                  <ProductImage product={product} size="card" />
                </div>
                <span className="tag">{brand?.name ?? product.brand}</span>
                <h3>{pickName(locale, product)}</h3>
                <p>{pickShortDesc(locale, product)}</p>
                <div className="foot">
                  <span>{brand?.name}</span>
                  <span>{product.sku}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
