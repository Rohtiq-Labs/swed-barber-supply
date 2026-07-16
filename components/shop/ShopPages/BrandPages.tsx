"use client";

import Link from "next/link";

import { ProductGrid } from "@/components/shop/ProductGrid";
import { ShopBreadcrumbs, ShopShell } from "@/components/shop/ShopShell";
import { useLocale } from "@/context/LocaleContext";
import { brands, getProductsByBrand } from "@/data/catalog";
import { pickDescription } from "@/lib/catalog-i18n";
import type { Brand } from "@/types/catalog";

export const BrandsIndexPage = () => {
  const { dictionary } = useLocale();

  return (
    <ShopShell
      title={dictionary.shop.brandIndex}
      description={dictionary.shop.brandIndexDesc}
      eyebrow={dictionary.shop.brands}
    >
      <div className="brand-index">
        {brands.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`}>
            <span>{brand.name}</span>
          </Link>
        ))}
      </div>
    </ShopShell>
  );
};

type BrandPageViewProps = {
  brand: Brand;
};

export const BrandPageView = ({ brand }: BrandPageViewProps) => {
  const { locale, dictionary } = useLocale();
  const items = getProductsByBrand(brand.slug);

  return (
    <ShopShell
      title={brand.name}
      description={pickDescription(locale, {
        name: brand.name,
        nameEn: brand.name,
        description: brand.description,
        descriptionEn: brand.descriptionEn,
      })}
      eyebrow={dictionary.shop.brands}
    >
      <ShopBreadcrumbs
        items={[
          { label: dictionary.shop.allProducts, href: "/shop" },
          { label: dictionary.shop.brands, href: "/brands" },
          { label: brand.name },
        ]}
      />

      <p className="shop-count mono">
        {items.length} {dictionary.shop.articles}
      </p>

      <ProductGrid products={items} />
    </ShopShell>
  );
};
