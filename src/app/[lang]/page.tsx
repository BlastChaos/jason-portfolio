import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Menu } from "@/Section/Menu/ui/Menu";
import { Hero } from "@/Section/Hero/ui/Hero";
import { Section } from "@/Section/shared/ui/Section";
import { Projects } from "@/Section/Project/ui/projects";
import { Education } from "@/Section/Education/ui/Education";
import { SkillPage } from "@/Section/Skill/ui/skillPage";
import { IconsType } from "@/components/ui/icons";
import { ContactMe } from "@/Section/ContactMe/ui/ContactMe";
import { Footer } from "@/Section/Footer/ui/Footer";

import { AboutMe } from "@/Section/AboutMe/ui/AboutMe";
import { WorkExperience } from "@/Section/workExperience/ui/workExperience";
export type SectionType = {
  id: string;
  header?: {
    titleName: string;
    quote: string;
  };
  icon: IconsType;
  menuName: string;
  children: React.ReactNode;
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { headers, menu } = await getDictionary(lang);
  const sections: SectionType[] = [
    {
      id: "home",
      icon: "home",
      menuName: menu.home,
      children: <Hero lang={lang} />,
    },
    {
      id: "about",
      icon: "avatar",
      header: {
        titleName: headers.aboutMe,
        quote: headers.aboutMeQuote,
      },
      menuName: menu.about,
      children: <AboutMe lang={lang} />,
    },
    {
      id: "projects",
      header: {
        titleName: headers.project,
        quote: headers.projectQuote,
      },
      icon: "folder",
      menuName: headers.project,
      children: <Projects lang={lang} />,
    },
    {
      id: "work",
      header: {
        titleName: headers.workExperience,
        quote: headers.workExperienceQuote,
      },
      icon: "suitcase",
      menuName: menu.work,
      children: <WorkExperience lang={lang} />,
    },
    {
      id: "education",
      header: {
        titleName: headers.Education,
        quote: headers.educationQuote,
      },
      icon: "graduationHat",
      menuName: menu.education,
      children: <Education lang={lang} />,
    },
    {
      id: "skill",
      header: {
        titleName: headers.skill,
        quote: headers.skillQuote,
      },
      icon: "gear",
      menuName: menu.skill,
      children: <SkillPage lang={lang} />,
    },
    {
      id: "contact",
      header: {
        titleName: headers.contact,
        quote: headers.contactQuote,
      },
      icon: "alternateEmail",
      menuName: menu.contact,
      children: <ContactMe lang={lang} />,
    },
  ];
  return (
    <div className="relative">
      <Menu lang={lang} sections={sections} />
      <div>
        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            header={section.header}
            useSecondaryBgColor={index % 2 === 0}
          >
            {section.children}
          </Section>
        ))}
      </div>
      <Footer lang={lang} />
    </div>
  );
}
