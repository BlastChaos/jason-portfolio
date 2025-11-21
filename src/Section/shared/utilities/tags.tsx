import { IconsType } from "@/components/ui/icons";

type TagInfo = {
  name: string;
  icon: IconsType;
};

export const tagsInfo = {
  typescript: {
    name: "TypeScript",
    icon: "typescript",
  },
  react: {
    name: "React",
    icon: "react",
  },
  python: {
    name: "Python",
    icon: "python",
  },
  Csharp: {
    name: ".NET",
    icon: "Csharp",
  },
  postgres: {
    name: "PostgreSQL",
    icon: "postgres",
  },
  reactNative: {
    name: "React Native",
    icon: "react",
  },
  mongodb: {
    name: "MongoDB",
    icon: "mongodb",
  },
  // auth0: {
  //   name: "Auth0",
  //   icon: "auth0",
  // },
  // vite: {
  //   name: "Vite",
  //   icon: "vite",
  // },
  nextjs: {
    name: "Next.js",
    icon: "nextjs",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  sqlite: {
    name: "SQLite",
    icon: "sqlite",
  },
  // angular: {
  //   name: "Angular",
  //   icon: "angular",
  // },
  // nginx: {
  //   name: "NGINX",
  //   icon: "nginx",
  // },
  supabase: {
    name: "Supabase",
    icon: "supabase",
  },
  // prisma: {
  //   name: "Prisma",
  //   icon: "prisma",
  // },
  // java: {
  //   name: "Java",
  //   icon: "java",
  // },
  nodejs: {
    name: "Node.js",
    icon: "nodejs",
  },
  // restApi: {
  //   name: "REST API",
  //   icon: "rest",
  // },
  graphql: {
    name: "GraphQL",
    icon: "graphql",
  },
  expo: {
    name: "Expo",
    icon: "expo",
  },
  electron: {
    name: "Electron",
    icon: "electron",
  },
  machineLearning: {
    name: "Machine Learning",
    icon: "machineLearning",
  },
  docker: {
    name: "Docker",
    icon: "docker",
  },
  vite: {
    name: "Vite",
    icon: "vite",
  },
  openai: {
    name: "OpenAI",
    icon: "openai",
  },
  metamask: {
    name: "MetaMask",
    icon: "metamask",
  },
  gitlab: {
    name: "GitLab",
    icon: "gitlab",
  },
  jest: {
    name: "Jest",
    icon: "jest",
  },
  auth0: {
    name: "Auth0",
    icon: "auth0",
  },
  lucidchart: {
    name: "Lucidchart",
    icon: "lucidchart",
  },
  confluance: {
    name: "Confluence",
    icon: "confluance",
  },
  angular: {
    name: "Angular",
    icon: "angular",
  },
  googleCloudPlatform: {
    name: "Google Cloud Platform (GCP)",
    icon: "googleCloudPlatform",
  },
  efcore: {
    name: "EF Core",
    icon: "database",
  },
  notion: {
    name: "Notion",
    icon: "notion",
  },
} satisfies Record<string, TagInfo>;

export type Tag = keyof typeof tagsInfo;
