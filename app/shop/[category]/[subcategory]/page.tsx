import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryPageView } from "@/components/shop/ShopPages";
import { categories, getCategoryBySlug, getSubcategory } from "@/data/categories";

type SubcategoryPageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

export const generateStaticParams = () =>
  categories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    })),
  );

export const generateMetadata = async ({
  params,
}: SubcategoryPageProps): Promise<Metadata> => {
  const { category, subcategory } = await params;
  const result = getSubcategory(category, subcategory);

  if (!result) {
    return { title: "Category — Swed BarberSupply" };
  }

  return {
    title: `${result.subcategory.nameEn} · ${result.category.nameEn} — Swed BarberSupply`,
    description: result.category.descriptionEn,
  };
};

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category: categorySlug, subcategory } = await params;
  const category = getCategoryBySlug(categorySlug);
  const result = getSubcategory(categorySlug, subcategory);

  if (!category || !result) {
    notFound();
  }

  return (
    <CategoryPageView category={category} subcategorySlug={subcategory} />
  );
}
