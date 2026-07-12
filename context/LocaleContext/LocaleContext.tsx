"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getDictionary, type Dictionary, type Locale } from "@/lib/dictionary";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = "en",
}: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const handleSetLocale = useCallback((nextLocale: Locale) => {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale === "ur" ? "ur" : "en";
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dictionary,
      setLocale: handleSetLocale,
    }),
    [locale, dictionary, handleSetLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
};
