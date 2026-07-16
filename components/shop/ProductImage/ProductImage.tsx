"use client";

import Image from "next/image";

import "./product-image.css";

import { getProductImageSrc } from "@/lib/product-images";
import { pickName } from "@/lib/catalog-i18n";
import { useLocale } from "@/context/LocaleContext";
import type { Product } from "@/types/catalog";

type ProductImageProps = {
  product: Product;
  size?: "card" | "detail" | "thumb";
  priority?: boolean;
};

export const ProductImage = ({
  product,
  size = "card",
  priority = false,
}: ProductImageProps) => {
  const { locale } = useLocale();
  const src = getProductImageSrc(product);
  const alt = pickName(locale, product);

  return (
    <div className={`product-image product-image--${size}`}>
      <Image
        src={src}
        alt={alt}
        width={640}
        height={640}
        priority={priority}
        className="product-image__img"
      />
    </div>
  );
};
