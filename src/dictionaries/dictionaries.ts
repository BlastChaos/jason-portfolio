import "server-only";
import { getYearsOfExperience } from "@/content/experience";

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
};

export type DictionnaryProps = Awaited<ReturnType<typeof dictionaries.en>>;

const getPlaceholders = (): Record<string, string> => ({
  years: String(getYearsOfExperience()),
});

function interpolate<T>(value: T, placeholders: Record<string, string>): T {
  if (typeof value === "string") {
    return value.replace(/\{(\w+)\}/g, (match, key: string) =>
      key in placeholders ? placeholders[key] : match
    ) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => interpolate(item, placeholders)) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        interpolate(item, placeholders),
      ])
    ) as T;
  }
  return value;
}

export const getDictionary = async (locale: Locale) =>
  interpolate(await dictionaries[locale](), getPlaceholders());
