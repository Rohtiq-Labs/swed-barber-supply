import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandPageView } from "@/components/shop/ShopPages";
import { brands, getBrandBySlug } from "@/data/brands";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  brands.map((brand) => ({ slug: brand.slug }));

export const generateMetadata = async ({
  params,
}: BrandPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return { title: "Brand — Swed BarberSupply" };
  }

  return {
    title: `${brand.name} — Swed BarberSupply`,
    description: brand.descriptionEn,
  };
};

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return <BrandPageView brand={brand} />;
}
