import { Locale, getDictionary } from "@/dictionaries/dictionaries";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { LINKEDIN_URL } from "@/Section/ContactMe/utilities/contactInfo";
import { Providers } from "@/components/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const { metadata } = await getDictionary(lang as Locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.jasonbrutus.ca";

  return {
    title: metadata.title,
    description: metadata.description,
    applicationName: metadata.applicationName,
    generator: "Next.js",
    authors: [
      {
        name: "Jason Brutus",
        url: LINKEDIN_URL,
      },
    ],
    robots: { index: true, follow: true },
    creator: "Jason Brutus",
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: baseUrl,
      siteName: metadata.openGraph.siteName,
      locale: lang === "en" ? "en_US" : "fr_CA",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.twitter.title,
      description: metadata.twitter.description,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
      },
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
