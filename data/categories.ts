import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    slug: "elektronik",
    num: "01",
    name: "Elektronik",
    nameEn: "Electronics",
    description:
      "Klippmaskiner, trimmers, shavers, combos, blad och belysning — verktygen som driver stolen.",
    descriptionEn:
      "Clippers, trimmers, shavers, combos, blades and lighting — the tools that run the chair.",
    subcategories: [
      { slug: "klipper", name: "Klipper", nameEn: "Clippers" },
      { slug: "trimmer", name: "Trimmer", nameEn: "Trimmers" },
      { slug: "shaver", name: "Shaver", nameEn: "Shavers" },
      { slug: "combo", name: "Combo", nameEn: "Combo Kits" },
      { slug: "bladhead", name: "Blad / Head", nameEn: "Blade Heads" },
      { slug: "fon", name: "Fön / Plattänger", nameEn: "Dryers & Irons" },
      { slug: "belysning", name: "Belysning", nameEn: "Lighting" },
      { slug: "diversa", name: "Diversa", nameEn: "Misc Electronics" },
    ],
  },
  {
    slug: "saxar-rakning",
    num: "02",
    name: "Saxar & Rakning",
    nameEn: "Shears & Shaving",
    description:
      "Höger- och vänsterhänta saxar, set, shavetter, rakknivar och verktyg för precisionsarbete.",
    descriptionEn:
      "Right- and left-handed shears, sets, shavettes, razors and tools for precision work.",
    subcategories: [
      { slug: "hogerhant", name: "Högerhänt", nameEn: "Right-handed" },
      { slug: "vansterhant", name: "Vänsterhänt", nameEn: "Left-handed" },
      { slug: "saxset", name: "Saxset", nameEn: "Shear Sets" },
      { slug: "shavetter", name: "Shavetter", nameEn: "Shavettes" },
      { slug: "razer", name: "Rakknivar", nameEn: "Razors" },
      { slug: "verktyg", name: "Verktyg", nameEn: "Tools" },
    ],
  },
  {
    slug: "salongtillbehor",
    num: "03",
    name: "Salongtillbehör",
    nameEn: "Salon Accessories",
    description:
      "Borstar, kammar, olja & rengöring, arbetskläder, kapor, speglar och allt som håller golvet igång.",
    descriptionEn:
      "Brushes, combs, oils & cleaning, workwear, capes, mirrors — everything that keeps the floor running.",
    subcategories: [
      { slug: "borstar", name: "Borstar", nameEn: "Brushes" },
      { slug: "kammar", name: "Kammar", nameEn: "Combs" },
      { slug: "olja-rengoring", name: "Olje & Rengöring", nameEn: "Oils & Cleaning" },
      { slug: "arbetsklader", name: "Arbetskläder", nameEn: "Workwear" },
      { slug: "pins-clips", name: "Pins & Clips", nameEn: "Pins & Clips" },
      { slug: "sprayflaskor", name: "Sprayflaskor", nameEn: "Spray Bottles" },
      { slug: "nackpapper-kapper", name: "Nackpapper & Kapor", nameEn: "Neck Paper & Capes" },
      { slug: "speglar", name: "Speglar", nameEn: "Mirrors" },
      { slug: "mattor", name: "Anti-Slipp Matta", nameEn: "Anti-Slip Mats" },
    ],
  },
  {
    slug: "produkter",
    num: "04",
    name: "Produkter",
    nameEn: "Hair Products",
    description:
      "Vax, clay, gel, sprays, schampo, skäggvård och finishing — det kunden tar med hem.",
    descriptionEn:
      "Wax, clay, gel, sprays, shampoo, beard care and finishing — what the client takes home.",
    subcategories: [
      { slug: "harwax", name: "Hårvax", nameEn: "Hair Wax" },
      { slug: "texture-clay", name: "Texture Clay", nameEn: "Texture Clay" },
      { slug: "gel", name: "Gel", nameEn: "Gel" },
      { slug: "har-spray", name: "Hårspray", nameEn: "Hair Spray" },
      { slug: "shining-spray", name: "Shining Spray", nameEn: "Shine Spray" },
      { slug: "sea-salt", name: "Sea Salt Spray", nameEn: "Sea Salt Spray" },
      { slug: "mousse", name: "Mousse", nameEn: "Mousse" },
      { slug: "curl-cream", name: "Curl Cream", nameEn: "Curl Cream" },
      { slug: "schampo", name: "Schampo", nameEn: "Shampoo" },
      { slug: "konditioner", name: "Konditioner", nameEn: "Conditioner" },
      { slug: "mask", name: "Mask", nameEn: "Masks" },
      { slug: "aftershave", name: "Aftershave", nameEn: "Aftershave" },
      { slug: "beard", name: "Skäggprodukter", nameEn: "Beard Products" },
      { slug: "enhancement", name: "Enhancement", nameEn: "Enhancement" },
    ],
  },
  {
    slug: "hot-deals",
    num: "05",
    name: "Hot Deals",
    nameEn: "Hot Deals",
    description:
      "Roterande outlet-priser på utvalda märken — medan lagret räcker.",
    descriptionEn:
      "Rotating outlet pricing on select brands — while stock lasts.",
    subcategories: [],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((category) => category.slug === slug);

export const getSubcategory = (
  categorySlug: string,
  subSlug: string,
): { category: Category; subcategory: Category["subcategories"][number] } | undefined => {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return undefined;
  }

  const subcategory = category.subcategories.find((item) => item.slug === subSlug);

  if (!subcategory) {
    return undefined;
  }

  return { category, subcategory };
};
