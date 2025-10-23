import { Locale } from "@/dictionaries/dictionaries";
import { Proficency } from "./proficency";

export type Skill = {
  name: Record<Locale, string>;
  proficiency: Proficency;
  image: string;
};
type SoftSkillInfo = {
  frontendDevelopment: Skill[];
  backendDevelopment: Skill[];
  databaseDevelopment: Skill[];
  cloudDevelopment: Skill[];
};
export const softSkillsInfo: SoftSkillInfo = {
  frontendDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "familiar",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
  ],
  backendDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },

    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
  ],
  databaseDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
  ],
  cloudDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },

    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "familiar",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
      image: "/calendar.svg",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
      image: "/calendar.svg",
    },
  ],
};
