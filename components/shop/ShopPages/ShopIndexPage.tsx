"use client";

import { ProductGrid } from "@/components/shop/ProductGrid";
import { DepartmentTiles, ShopShell } from "@/components/shop/ShopShell";
import { useLocale } from "@/context/LocaleContext";
import { getBestsellers, getHotDeals, products } from "@/data/catalog";

export const ShopIndexPage = () => {
  const { dictionary } = useLocale();
  const bestsellers = getBestsellers().slice(0, 6);
  const deals = getHotDeals().slice(0, 3);

  return (
    <ShopShell
      title={`${dictionary.shop.title} ${dictionary.shop.titleBreak}`}
      description={dictionary.shop.desc}
    >
      <DepartmentTiles />

      <p className="shop-count mono">
        {products.length} {dictionary.shop.articles}
      </p>

      <div className="shop-hero" style={{ marginBottom: 28 }}>
        <div className="eyebrow">{dictionary.shop.bestsellers}</div>
      </div>
      <ProductGrid products={bestsellers} />

      {deals.length > 0 ? (
        <>
          <div className="shop-hero" style={{ marginTop: 70, marginBottom: 28 }}>
            <div className="eyebrow">{dictionary.shop.hotDeals}</div>
          </div>
          <ProductGrid products={deals} />
        </>
      ) : null}
    </ShopShell>
  );
};
