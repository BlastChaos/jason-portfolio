import { Locale } from "@/dictionaries/dictionaries";
import { Header } from "@/Section/Header/ui/Header";
import { Hero } from "@/Section/Hero/ui/Hero";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <div className="relative">
      <Header lang={lang} />
      <Hero lang={lang} />
    </div>
  );
}
