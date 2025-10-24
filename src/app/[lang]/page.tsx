import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Menu } from "@/Section/Menu/ui/Menu";
import { Hero } from "@/Section/Hero/ui/Hero";
import { AboutMe } from "@/Section/AboutMe/ui/AboutMe";
import { Section } from "@/Section/shared/ui/Section";
import { Projects } from "@/Section/Project/ui/projects";
import { WorkExperience } from "@/Section/workExperience/ui/WorkExperience";
import { Education } from "@/Section/Education/ui/Education";
import { SkillPage } from "@/Section/Skill/ui/skillPage";

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
        <Section
          header={{
            titleName: headers.project,
            quote: headers.projectQuote,
          }}
        >
          <Projects lang={lang} />
        </Section>
        <Section
          useSecondaryBgColor
          header={{
            titleName: headers.workExperience,
            quote: headers.workExperienceQuote,
          }}
        >
          <WorkExperience lang={lang} />
        </Section>
        <Section
          header={{
            titleName: headers.Education,
            quote: headers.educationQuote,
          }}
        >
          <Education lang={lang} />
        </Section>
        <Section
          useSecondaryBgColor
          header={{
            titleName: headers.skill,
            quote: headers.skillQuote,
          }}
        >
          <SkillPage lang={lang} />
        </Section>
      </div>
    </div>
  );
}
