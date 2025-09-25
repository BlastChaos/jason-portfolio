import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jason Brutus | Portfolio",
  description:
    "Welcome to my portfolio — showcasing my work as a developer. Feel free to reach out for collaboration or opportunities.",
  applicationName: "My portfolio",
  generator: "Next.js",

  authors: [
    {
      name: "Jason Brutus",
      url: "https://www.linkedin.com/in/jasonbrutus/",
    },
  ],
  robots: { index: true, follow: true },
  creator: "Jason Brutus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description ?? undefined} />
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
