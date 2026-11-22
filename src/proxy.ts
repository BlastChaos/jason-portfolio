import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Locale, LOCALES } from "./dictionaries/dictionaries";

const DEFAULT_LOCALE: Locale = "en";

function getLocale(request: NextRequest): Locale {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, LOCALES, DEFAULT_LOCALE) as Locale;
  } catch {
    // match() throws on malformed language tags (e.g. "*")
    return DEFAULT_LOCALE;
  }
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api/|_next/|.*\\..*).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
