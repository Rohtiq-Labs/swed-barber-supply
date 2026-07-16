import type { Brand } from "@/types/catalog";

export const brands: Brand[] = [
  {
    slug: "jrl",
    name: "JRL",
    description:
      "Professionella klippmaskiner, trimmers och shavers — Ghost, Onyx och FreshFade.",
    descriptionEn:
      "Professional clippers, trimmers and shavers — Ghost, Onyx and FreshFade.",
    featured: true,
  },
  {
    slug: "wahl",
    name: "Wahl",
    description: "Amerikansk barberklassiker — Senior, Magic Clip och pro-linjer.",
    descriptionEn: "American barber classic — Senior, Magic Clip and pro lines.",
    featured: true,
  },
  {
    slug: "andis",
    name: "Andis",
    description: "Blade heads, outliners och clippers för shopgolvet.",
    descriptionEn: "Blade heads, outliners and clippers built for the floor.",
    featured: true,
  },
  {
    slug: "babyliss",
    name: "BaByliss",
    description: "FX-serien — clippers, trimmers och shavers för barbers.",
    descriptionEn: "FX series — clippers, trimmers and shavers for barbers.",
    featured: true,
  },
  {
    slug: "mrd",
    name: "MRD",
    description: "Japanskt stål och professionella saxar för precis skärning.",
    descriptionEn: "Japanese steel and professional shears for precise cutting.",
    featured: true,
  },
  {
    slug: "redone",
    name: "RedOne",
    description: "Stylingprodukter och tillbehör med stark efterfrågan i trade.",
    descriptionEn: "Styling products and accessories with strong trade demand.",
    featured: true,
  },
  {
    slug: "wella",
    name: "Wella",
    description: "Professionell hårvård — schampo, vård och finishing.",
    descriptionEn: "Professional haircare — shampoo, treatment and finishing.",
    featured: true,
  },
  {
    slug: "haircompany",
    name: "HairCompany",
    description: "Salongsprodukter och styling för daglig användning.",
    descriptionEn: "Salon products and styling for everyday chair work.",
    featured: true,
  },
  {
    slug: "swed-hair",
    name: "Swed Hair",
    description: "Vårt eget sortiment — clay, vax och vård för nordiska salonger.",
    descriptionEn: "Our house range — clay, wax and care for Nordic salons.",
    featured: false,
  },
  {
    slug: "panorama",
    name: "Panorama",
    description: "Sea salt sprays och texture-produkter.",
    descriptionEn: "Sea salt sprays and texture products.",
    featured: false,
  },
  {
    slug: "the-shaving-factory",
    name: "TheShavingFactory",
    description: "Rakning, aftershave och finishing för klassiskt barberarbete.",
    descriptionEn: "Shaving, aftershave and finishing for classic barber work.",
    featured: false,
  },
];

export const featuredBrands = brands.filter((brand) => brand.featured);

export const getBrandBySlug = (slug: string): Brand | undefined =>
  brands.find((brand) => brand.slug === slug);
