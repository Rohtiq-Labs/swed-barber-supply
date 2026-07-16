"use client";

import Link from "next/link";

import "./shop-shell.css";

import { useLocale } from "@/context/LocaleContext";
import { categories } from "@/data/categories";
import { pickDescription, pickName } from "@/lib/catalog-i18n";
import type { CategorySlug } from "@/types/catalog";

type ShopShellProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  activeCategory?: CategorySlug;
  eyebrow?: string;
};

export const ShopShell = ({
  children,
  title,
  description,
  activeCategory,
  eyebrow,
}: ShopShellProps) => {
  const { locale, dictionary } = useLocale();

  return (
    <div className="shop-page">
      <div className="wrap">
        <div className="shop-hero">
          <div className="eyebrow">{eyebrow ?? dictionary.shop.eyebrow}</div>
          <h1 className="serif">{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>

        <div className="shop-layout">
          <aside className="shop-sidebar" aria-label={dictionary.shop.filterBy}>
            <div className="shop-sidebar__label">{dictionary.shop.departments}</div>
            <nav>
              <Link href="/shop" className={!activeCategory ? "active" : ""}>
                {dictionary.shop.allProducts}
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/shop/${category.slug}`}
                  className={activeCategory === category.slug ? "active" : ""}
                >
                  {pickName(locale, category)}
                </Link>
              ))}
              <Link href="/brands">{dictionary.shop.brands}</Link>
            </nav>
          </aside>

          <div className="shop-main">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const ShopSubnav = ({
  categorySlug,
  activeSub,
  items,
}: {
  categorySlug: string;
  activeSub?: string;
  items: { slug: string; name: string; nameEn: string }[];
}) => {
  const { locale, dictionary } = useLocale();

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="shop-subnav" aria-label={dictionary.shop.subcategory}>
      <Link
        href={`/shop/${categorySlug}`}
        className={!activeSub ? "active" : ""}
      >
        {dictionary.shop.allInCategory}
      </Link>
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/shop/${categorySlug}/${item.slug}`}
          className={activeSub === item.slug ? "active" : ""}
        >
          {pickName(locale, item)}
        </Link>
      ))}
    </nav>
  );
};

export const ShopBreadcrumbs = ({
  items,
}: {
  items: { label: string; href?: string }[];
}) => (
  <nav className="shop-breadcrumbs" aria-label="Breadcrumb">
    {items.map((item, index) => (
      <span key={`${item.label}-${index}`} style={{ display: "contents" }}>
        {index > 0 ? <span className="sep">/</span> : null}
        {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
      </span>
    ))}
  </nav>
);

export const DepartmentTiles = () => {
  const { locale, dictionary } = useLocale();

  return (
    <div className="dept-tiles">
      {categories.map((category) => (
        <Link key={category.slug} href={`/shop/${category.slug}`} className="dept-tile">
          <span className="dept-tile__num mono">{category.num}</span>
          <div>
            <h2>{pickName(locale, category)}</h2>
            <p>{pickDescription(locale, category)}</p>
          </div>
        </Link>
      ))}
      <Link href="/brands" className="dept-tile">
        <span className="dept-tile__num mono">BR</span>
        <div>
          <h2>{dictionary.shop.brands}</h2>
          <p>{dictionary.shop.brandIndexDesc}</p>
        </div>
      </Link>
    </div>
  );
};
