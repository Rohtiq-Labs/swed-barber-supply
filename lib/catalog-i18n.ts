import type { Locale } from "@/lib/dictionary";

type LocalizedFields = {
  name: string;
  nameEn: string;
  description?: string;
  descriptionEn?: string;
  shortDesc?: string;
  shortDescEn?: string;
};

export const pickName = (locale: Locale, item: LocalizedFields): string =>
  locale === "en" ? item.nameEn : item.name;

export const pickDescription = (
  locale: Locale,
  item: LocalizedFields,
): string => {
  if (locale === "en") {
    return item.descriptionEn ?? item.description ?? item.shortDescEn ?? item.shortDesc ?? "";
  }

  return item.description ?? item.descriptionEn ?? item.shortDesc ?? item.shortDescEn ?? "";
};

export const pickShortDesc = (locale: Locale, item: LocalizedFields): string =>
  locale === "en"
    ? (item.shortDescEn ?? item.shortDesc ?? "")
    : (item.shortDesc ?? item.shortDescEn ?? "");
