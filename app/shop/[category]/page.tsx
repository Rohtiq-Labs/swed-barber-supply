import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryPageView } from "@/components/shop/ShopPages";
import { categories, getCategoryBySlug } from "@/data/categories";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export const generateStaticParams = () =>
  categories.map((category) => ({ category: category.slug }));

export const generateMetadata = async ({
  params,
}: CategoryPageProps): Promise<Metadata> => {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category — Swed BarberSupply" };
  }

  return {
    title: `${category.nameEn} — Swed BarberSupply`,
    description: category.descriptionEn,
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryPageView category={category} />;
}
