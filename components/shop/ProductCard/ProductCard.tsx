"use client";

import Link from "next/link";

import "./product-card.css";

import { ProductImage } from "@/components/shop/ProductImage";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/data/catalog";
import { pickName, pickShortDesc } from "@/lib/catalog-i18n";
import { getBrandBySlug } from "@/data/brands";
import type { Product } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { locale, dictionary } = useLocale();
  const brand = getBrandBySlug(product.brand);
  const badge = product.hotDeal
    ? dictionary.shop.hotDeals
    : product.bestseller
      ? dictionary.shop.bestsellers
      : null;

  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <ProductImage product={product} size="card" />
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__brand">{brand?.name ?? product.brand}</span>
          {badge ? <span className="product-card__badge">{badge}</span> : null}
        </div>
        <h3 className="product-card__title">{pickName(locale, product)}</h3>
        <p className="product-card__desc">{pickShortDesc(locale, product)}</p>
        <div className="product-card__foot">
          <span className="product-card__price">
            {formatPrice(product.price, locale)}
            {product.compareAtPrice ? (
              <span className="product-card__compare">
                {formatPrice(product.compareAtPrice, locale)}
              </span>
            ) : null}
          </span>
          <span className="product-card__sku">{product.sku}</span>
        </div>
      </div>
    </Link>
  );
};
