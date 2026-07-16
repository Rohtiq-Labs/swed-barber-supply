"use client";

import "./product-grid.css";

import { ProductCard } from "@/components/shop/ProductCard";
import { useLocale } from "@/context/LocaleContext";
import type { Product } from "@/types/catalog";

type ProductGridProps = {
  products: Product[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { dictionary } = useLocale();

  if (products.length === 0) {
    return <p className="product-grid--empty">{dictionary.shop.noProducts}</p>;
  }

  return (
    <div className="product-grid" role="list">
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
