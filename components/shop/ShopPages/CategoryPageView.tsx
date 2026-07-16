"use client";

import { ProductGrid } from "@/components/shop/ProductGrid";
import {
  ShopBreadcrumbs,
  ShopShell,
  ShopSubnav,
} from "@/components/shop/ShopShell";
import { useLocale } from "@/context/LocaleContext";
import {
  getHotDeals,
  getProductsByCategory,
  getProductsBySubcategory,
} from "@/data/catalog";
import { pickDescription, pickName } from "@/lib/catalog-i18n";
import type { Category } from "@/types/catalog";

type CategoryPageViewProps = {
  category: Category;
  subcategorySlug?: string;
};

export const CategoryPageView = ({
  category,
  subcategorySlug,
}: CategoryPageViewProps) => {
  const { locale, dictionary } = useLocale();

  const items = subcategorySlug
    ? getProductsBySubcategory(category.slug, subcategorySlug)
    : category.slug === "hot-deals"
      ? getHotDeals()
      : getProductsByCategory(category.slug);

  const activeSub = category.subcategories.find(
    (item) => item.slug === subcategorySlug,
  );

  return (
    <ShopShell
      title={
        activeSub
          ? pickName(locale, activeSub)
          : pickName(locale, category)
      }
      description={
        activeSub
          ? pickDescription(locale, category)
          : pickDescription(locale, category)
      }
      activeCategory={category.slug}
      eyebrow={category.num}
    >
      <ShopBreadcrumbs
        items={[
          { label: dictionary.shop.allProducts, href: "/shop" },
          {
            label: pickName(locale, category),
            href: subcategorySlug ? `/shop/${category.slug}` : undefined,
          },
          ...(activeSub ? [{ label: pickName(locale, activeSub) }] : []),
        ]}
      />

      <ShopSubnav
        categorySlug={category.slug}
        activeSub={subcategorySlug}
        items={category.subcategories}
      />

      <p className="shop-count mono">
        {items.length} {dictionary.shop.articles}
      </p>

      <ProductGrid products={items} />
    </ShopShell>
  );
};
