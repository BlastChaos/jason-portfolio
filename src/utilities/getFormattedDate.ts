import type { Locale } from "@/dictionaries/dictionaries";

const INTL_LOCALES: Record<Locale, string> = {
  en: "en-CA",
  fr: "fr-CA",
};

export function getFormattedDate(date: Date, locale: Locale): string {
  const formatted = new Intl.DateTimeFormat(INTL_LOCALES[locale], {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
  return (
    formatted.charAt(0).toLocaleUpperCase(INTL_LOCALES[locale]) +
    formatted.slice(1)
  );
}
