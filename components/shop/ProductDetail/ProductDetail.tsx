"use client";

import Link from "next/link";

import "./product-detail.css";

import { ProductGrid } from "@/components/shop/ProductGrid";
import { ProductImage } from "@/components/shop/ProductImage";
import { ShopBreadcrumbs } from "@/components/shop/ShopShell";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice, getProductsByBrand } from "@/data/catalog";
import { getBrandBySlug } from "@/data/brands";
import { getCategoryBySlug } from "@/data/categories";
import { pickDescription, pickName } from "@/lib/catalog-i18n";
import type { Product } from "@/types/catalog";

type ProductDetailViewProps = {
  product: Product;
};

export const ProductDetailView = ({ product }: ProductDetailViewProps) => {
  const { locale, dictionary } = useLocale();
  const brand = getBrandBySlug(product.brand);
  const category = getCategoryBySlug(product.category);
  const related = getProductsByBrand(product.brand)
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-detail">
      <div className="wrap">
        <ShopBreadcrumbs
          items={[
            { label: dictionary.shop.allProducts, href: "/shop" },
            ...(category
              ? [
                  {
                    label: pickName(locale, category),
                    href: `/shop/${category.slug}`,
                  },
                ]
              : []),
            { label: pickName(locale, product) },
          ]}
        />

        <div className="product-detail__grid">
          <div className="product-detail__visual">
            <ProductImage product={product} size="detail" priority />
          </div>

          <div>
            {brand ? (
              <Link href={`/brands/${brand.slug}`} className="product-detail__brand">
                {brand.name}
              </Link>
            ) : null}
            <h1 className="serif">{pickName(locale, product)}</h1>
            <p className="product-detail__desc">{pickDescription(locale, product)}</p>

            <div className="product-detail__meta">
              <div>
                <b>
                  {formatPrice(product.price, locale)}
                  {product.compareAtPrice ? (
                    <span className="product-detail__compare">
                      {formatPrice(product.compareAtPrice, locale)}
                    </span>
                  ) : null}
                </b>
                <span>{dictionary.shop.from} trade</span>
              </div>
              <div>
                <b className="mono" style={{ fontSize: 16, fontFamily: "var(--font-mono)" }}>
                  {product.sku}
                </b>
                <span>{dictionary.shop.sku}</span>
              </div>
              <div>
                <b style={{ fontSize: 18 }}>
                  {product.inStock ? dictionary.shop.inStock : dictionary.shop.outOfStock}
                </b>
                <span>{dictionary.shop.alsoIn} {category ? pickName(locale, category) : ""}</span>
              </div>
            </div>

            <div className="product-detail__actions">
              <Link href="/#trade" className="btn-solid">
                {dictionary.shop.addToEnquiry}
              </Link>
              <Link href="/shop" className="btn-line">
                {dictionary.shop.backToShop}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="product-detail__related">
            <h2 className="serif">{dictionary.shop.related}</h2>
            <ProductGrid products={related} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
