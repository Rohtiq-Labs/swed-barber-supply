import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailView } from "@/components/shop/ProductDetail";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  products.map((product) => ({ slug: product.slug }));

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product — Swed BarberSupply" };
  }

  return {
    title: `${product.nameEn} — Swed BarberSupply`,
    description: product.shortDescEn,
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
