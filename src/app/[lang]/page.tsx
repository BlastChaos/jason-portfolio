import { Locale } from "@/dictionaries/dictionaries";
import { Menu } from "@/Section/Menu/ui/Menu";
import { Hero } from "@/Section/Hero/ui/Hero";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <div className="relative">
      <Menu lang={lang} />
      <div className="container mx-auto px-8 lg:px-12">
        <Hero lang={lang} />
      </div>
    </div>
  );
}
