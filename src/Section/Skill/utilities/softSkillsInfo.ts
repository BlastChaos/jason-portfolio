import { Locale } from "@/dictionaries/dictionaries";
import { Proficency } from "./proficency";

export type Skill = {
  name: Record<Locale, string>;
  proficiency: Proficency;
  image: string;
};
type SoftSkillInfo = {
  frontend: Skill[];
  backendAndData: Skill[];
  devOpsAndTools: Skill[];
  softSkills: Skill[];
};

export const softSkillsInfo: SoftSkillInfo = {
  frontend: [
    {
      name: { en: "React", fr: "React" },
      proficiency: "proficient",
      image: "react",
    },
    {
      name: { en: "Next.js", fr: "Next.js" },
      proficiency: "proficient",
      image: "nextjs",
    },
    {
      name: { en: "TypeScript", fr: "TypeScript" },
      proficiency: "proficient",
      image: "typescript",
    },
    {
      name: { en: "React Native", fr: "React Native" },
      proficiency: "proficient",
      image: "reactNative",
    },
    {
      name: { en: "Expo", fr: "Expo" },
      proficiency: "intermediate",
      image: "expo",
    },
    {
      name: { en: "Tailwind CSS", fr: "Tailwind CSS" },
      proficiency: "proficient",
      image: "tailwind",
    },
    {
      name: { en: "Vite", fr: "Vite" },
      proficiency: "intermediate",
      image: "vite",
    },
    {
      name: { en: "Electron", fr: "Electron" },
      proficiency: "intermediate",
      image: "electron",
    },
    {
      name: {
        en: "MetaMask & Web3 integration",
        fr: "Intégration MetaMask & Web3",
      },
      proficiency: "familiar",
      image: "metamask",
    },
  ],
  backendAndData: [
    {
      name: { en: "Node.js", fr: "Node.js" },
      proficiency: "proficient",
      image: "nodejs",
    },
    {
      name: {
        en: "REST APIs (Express / Next.js)",
        fr: "APIs REST (Express / Next.js)",
      },
      proficiency: "proficient",
      image: "nodejs",
    },
    {
      name: { en: "GraphQL", fr: "GraphQL" },
      proficiency: "proficient",
      image: "graphql",
    },
    {
      name: { en: "Supabase", fr: "Supabase" },
      proficiency: "proficient",
      image: "supabase",
    },
    {
      name: { en: "PostgreSQL", fr: "PostgreSQL" },
      proficiency: "proficient",
      image: "postgres",
    },
    {
      name: { en: "MongoDB", fr: "MongoDB" },
      proficiency: "intermediate",
      image: "mongodb",
    },
    {
      name: { en: "SQLite", fr: "SQLite" },
      proficiency: "intermediate",
      image: "sqlite",
    },
    {
      name: {
        en: "Database design & optimization",
        fr: "Conception et optimisation de bases de données",
      },
      proficiency: "intermediate",
      image: "database",
    },
  ],
  devOpsAndTools: [
    {
      name: {
        en: "Docker & containerization",
        fr: "Docker & conteneurisation",
      },
      proficiency: "intermediate",
      image: "docker",
    },
    {
      name: { en: "CI/CD (GitHub Actions)", fr: "CI/CD (GitHub Actions)" },
      proficiency: "intermediate",
      image: "gear",
    },
    {
      name: { en: "Git & Version Control", fr: "Git & Contrôle de version" },
      proficiency: "proficient",
      image: "github",
    },
    {
      name: { en: "OpenAI & AI integrations", fr: "OpenAI & intégrations IA" },
      proficiency: "intermediate",
      image: "openai",
    },
  ],
  softSkills: [
    {
      name: {
        en: "Bilingual (English/French)",
        fr: "Bilingue (Anglais/Français)",
      },
      proficiency: "proficient",
      image: "globe",
    },
    {
      name: {
        en: "Agile & Scrum Methodologies",
        fr: "Méthodes Agiles & Scrum",
      },
      proficiency: "proficient",
      image: "calendar",
    },
    {
      name: { en: "Problem Solving", fr: "Résolution de problèmes" },
      proficiency: "proficient",
      image: "idea",
    },
    {
      name: { en: "Team Leadership", fr: "Leadership d'équipe" },
      proficiency: "intermediate",
      image: "suitcase",
    },
  ],
};
