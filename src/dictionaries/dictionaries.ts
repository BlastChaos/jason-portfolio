import "server-only";

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
