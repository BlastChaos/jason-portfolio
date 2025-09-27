import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Menu } from "@/Section/Menu/ui/Menu";
import { Hero } from "@/Section/Hero/ui/Hero";
import { AboutMe } from "@/Section/AboutMe/ui/AboutMe";
import { Section } from "@/Section/shared/ui/Section";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { headers } = await getDictionary(lang);
  return (
    <div className="relative">
      <Menu lang={lang} />
      <div>
        <Section>
          <Hero lang={lang} />
        </Section>
        <Section
          useSecondaryBgColor
          header={{
            titleName: headers.aboutMe,
            quote: headers.aboutMeQuote,
          }}
        >
          <AboutMe lang={lang} />
        </Section>
      </div>
    </div>
  );
}
