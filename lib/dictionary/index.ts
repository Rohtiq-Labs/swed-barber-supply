import { en, type Dictionary } from "./en";
import { ur } from "./ur";

export type Locale = "en" | "ur";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ur,
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
