import { Locale } from "@/dictionaries/dictionaries";
import { Proficency } from "./proficency";

export type Skill = {
  name: Record<Locale, string>;
  proficiency: Proficency;
};
type SoftSkillInfo = {
  frontendDevelopment: Skill[];
  backendDevelopment: Skill[];
  cloudDevelopment: Skill[];
};
export const softSkillsInfo: SoftSkillInfo = {
  frontendDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "familiar",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
  ],
  backendDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },

    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
  ],
  cloudDevelopment: [
    {
      name: { en: "Communication", fr: "Communication" },
      proficiency: "proficient",
    },

    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "familiar",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "proficient",
    },
    {
      name: { en: "HTML", fr: "HTML" },
      proficiency: "intermediate",
    },
  ],
};
