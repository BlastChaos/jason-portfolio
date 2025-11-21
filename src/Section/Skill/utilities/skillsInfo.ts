import { Locale } from "@/dictionaries/dictionaries";
import { Proficency } from "./proficency";

export type Skill = {
  name: Record<Locale, string>;
  proficiency: Proficency;
};
type SkillsInfo = {
  frontend: Skill[];
  backendAndData: Skill[];
  devOpsAndTools: Skill[];
  softSkills: Skill[];
};

export const skillsInfo: SkillsInfo = {
  frontend: [
    {
      name: { en: "React", fr: "React" },
      proficiency: "proficient",
    },
    {
      name: { en: "Vue.js", fr: "Vue.js" },
      proficiency: "learning",
    },
    {
      name: { en: "Angular", fr: "Angular" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Next.js", fr: "Next.js" },
      proficiency: "proficient",
    },
    {
      name: { en: "TypeScript", fr: "TypeScript" },
      proficiency: "proficient",
    },
    {
      name: { en: "React Native", fr: "React Native" },
      proficiency: "proficient",
    },
    {
      name: { en: "Tailwind CSS", fr: "Tailwind CSS" },
      proficiency: "proficient",
    },
    {
      name: { en: "Vite", fr: "Vite" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Electron", fr: "Electron" },
      proficiency: "intermediate",
    },
    {
      name: {
        en: "MetaMask & Web3",
        fr: "MetaMask & Web3",
      },
      proficiency: "familiar",
    },
  ],
  backendAndData: [
    {
      name: { en: "Node.js", fr: "Node.js" },
      proficiency: "proficient",
    },
    {
      name: { en: "Python", fr: "Python" },
      proficiency: "familiar",
    },
    {
      name: { en: "GraphQL", fr: "GraphQL" },
      proficiency: "intermediate",
    },
    {
      name: { en: ".NET", fr: ".NET" },
      proficiency: "intermediate",
    },
    {
      name: { en: "PostgreSQL", fr: "PostgreSQL" },
      proficiency: "proficient",
    },
    {
      name: { en: "MongoDB", fr: "MongoDB" },
      proficiency: "intermediate",
    },
    {
      name: { en: "SQLite", fr: "SQLite" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Prisma", fr: "Prisma" },
      proficiency: "familiar",
    },
    {
      name: { en: "Testing (Vitest, Jest)", fr: "Tests (Vitest, Jest)" },
      proficiency: "proficient",
    },
    {
      name: { en: "Spring Boot", fr: "Spring Boot" },
      proficiency: "familiar",
    },
    {
      name: {
        en: "DB Design",
        fr: "Conception DB",
      },
      proficiency: "intermediate",
    },
    {
      name: {
        en: "REST APIs",
        fr: "APIs REST",
      },
      proficiency: "proficient",
    },
  ],
  devOpsAndTools: [
    {
      name: {
        en: "Docker",
        fr: "Docker",
      },
      proficiency: "intermediate",
    },
    {
      name: { en: "CI/CD Pipelines", fr: "CI/CD Pipelines" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Git", fr: "Git" },
      proficiency: "proficient",
    },
    {
      name: { en: "Vercel", fr: "Vercel" },
      proficiency: "proficient",
    },
    {
      name: { en: "Amazon S3", fr: "Amazon S3" },
      proficiency: "familiar",
    },
    {
      name: { en: "Google Cloud", fr: "Google Cloud" },
      proficiency: "familiar",
    },
    {
      name: { en: "OpenAI & AI", fr: "OpenAI & IA" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Kubernetes", fr: "Kubernetes" },
      proficiency: "familiar",
    },
  ],
  softSkills: [
    {
      name: {
        en: "Bilingual EN/FR",
        fr: "Bilingue EN/FR",
      },
      proficiency: "proficient",
    },
    {
      name: {
        en: "Agile & Scrum",
        fr: "Agile & Scrum",
      },
      proficiency: "proficient",
    },
    {
      name: { en: "Problem Solving", fr: "Résolution Pb." },
      proficiency: "proficient",
    },
    {
      name: { en: "Team Leadership", fr: "Leadership" },
      proficiency: "intermediate",
    },
    {
      name: { en: "Adaptability", fr: "Adaptabilité" },
      proficiency: "proficient",
    },
    {
      name: { en: "Autonomy", fr: "Autonomie" },
      proficiency: "proficient",
    },
    {
      name: { en: "Teamwork", fr: "Collaboration" },
      proficiency: "proficient",
    },
    {
      name: { en: "Critical Thinking", fr: "Esprit critique" },
      proficiency: "proficient",
    },
  ],
};
