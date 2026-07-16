import type { Product } from "@/types/catalog";

export type ProductImageKey =
  | "clipper"
  | "trimmer"
  | "shaver"
  | "combo"
  | "blade"
  | "dryer"
  | "shear"
  | "shear-set"
  | "shavette"
  | "comb"
  | "brush"
  | "oil"
  | "cape"
  | "spray-bottle"
  | "mat"
  | "clay"
  | "wax"
  | "gel"
  | "hairspray"
  | "salt-spray"
  | "shampoo"
  | "aftershave"
  | "beard"
  | "generic";

const subcategoryMap: Record<string, ProductImageKey> = {
  klipper: "clipper",
  trimmer: "trimmer",
  trimmers: "trimmer",
  shaver: "shaver",
  combo: "combo",
  bladhead: "blade",
  fon: "dryer",
  belysning: "generic",
  diversa: "generic",
  hogerhant: "shear",
  vansterhant: "shear",
  saxset: "shear-set",
  shavetter: "shavette",
  razer: "shavette",
  verktyg: "generic",
  borstar: "brush",
  kammar: "comb",
  "olja-rengoring": "oil",
  arbetsklader: "cape",
  "pins-clips": "generic",
  sprayflaskor: "spray-bottle",
  "nackpapper-kapper": "cape",
  speglar: "generic",
  mattor: "mat",
  harwax: "wax",
  "texture-clay": "clay",
  gel: "gel",
  "har-spray": "hairspray",
  "shining-spray": "hairspray",
  "sea-salt": "salt-spray",
  mousse: "hairspray",
  "curl-cream": "clay",
  schampo: "shampoo",
  konditioner: "shampoo",
  mask: "clay",
  aftershave: "aftershave",
  beard: "beard",
  enhancement: "generic",
};

const productOverrides: Record<string, ProductImageKey> = {
  "jrl-freshfade-2020c-onyx-black": "clipper",
  "jrl-freshfade-2020t-onyx-black": "trimmer",
  "jrl-ghost-collection-1": "combo",
  "jrl-onyx-collection-1": "combo",
  "jrl-ghost-onyx-sf-pro-shaver-black": "shaver",
  "jrl-clipper-blade-2020c": "blade",
  "jrl-trimmer-blade-2020t": "blade",
  "jrl-5-in-1-cool-blade-spray": "oil",
  "jrl-barber-blending-comb-96-red": "comb",
  "andis-t-outliner-blade-head": "blade",
  "wahl-cordless-senior-clipper": "clipper",
  "babyliss-pro-fx3-shave": "shaver",
  "mrd-kamisori-60-offset-shear": "shear",
  "mrd-60-left-handed-shear": "shear",
  "mrd-cutting-thinning-set": "shear-set",
  "theshavingfactory-shavette-black": "shavette",
  "carbon-barber-cape-charcoal": "cape",
  "barber-spray-bottle-500ml-black": "spray-bottle",
  "swedhair-matte-clay-100ml": "clay",
  "swedhair-fiber-wax-100ml": "wax",
  "wella-invigo-nutri-enrich-shampoo": "shampoo",
  "panorama-sea-salt-spray": "salt-spray",
  "redone-ultra-hold-gel": "gel",
  "haircompany-finish-spray": "hairspray",
  "theshavingfactory-aftershave-balm": "aftershave",
  "swedhair-beard-oil": "beard",
  "wahl-magic-clip-cordless": "clipper",
  "jrl-blade-oil-120ml": "oil",
  "barber-anti-slip-mat": "mat",
  "jrl-diamante-clipper-trimmer-black": "combo",
};

export const getProductImageKey = (product: Product): ProductImageKey => {
  if (productOverrides[product.slug]) {
    return productOverrides[product.slug];
  }

  return subcategoryMap[product.subcategory] ?? "generic";
};

export const getProductImageSrc = (product: Product): string =>
  `/products/${getProductImageKey(product)}.svg`;
