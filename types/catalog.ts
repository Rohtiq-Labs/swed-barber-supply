export type CategorySlug =
  | "elektronik"
  | "saxar-rakning"
  | "salongtillbehor"
  | "produkter"
  | "hot-deals";

export type BrandSlug =
  | "jrl"
  | "wahl"
  | "andis"
  | "babyliss"
  | "mrd"
  | "redone"
  | "wella"
  | "haircompany"
  | "swed-hair"
  | "panorama"
  | "the-shaving-factory";

export type Subcategory = {
  slug: string;
  name: string;
  nameEn: string;
};

export type Category = {
  slug: CategorySlug;
  num: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  subcategories: Subcategory[];
};

export type Brand = {
  slug: BrandSlug;
  name: string;
  description: string;
  descriptionEn: string;
  featured: boolean;
};

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  nameEn: string;
  brand: BrandSlug;
  category: CategorySlug;
  subcategory: string;
  price: number;
  compareAtPrice?: number;
  shortDesc: string;
  shortDescEn: string;
  description: string;
  descriptionEn: string;
  inStock: boolean;
  featured?: boolean;
  hotDeal?: boolean;
  bestseller?: boolean;
};
