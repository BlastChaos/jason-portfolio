import { Locale } from "@/dictionaries/dictionaries";
import { Tag } from "../../shared/utilities/tags";

export type ProjectType = "school" | "work" | "personal";

type ProjectTypeWork = {
  type: "work";
  companyName: string;
};

export type ProjectTypePersonal = {
  type: "personal";
};

export type ProjectInfo = {
  tags: Tag[];
  icons: string[];
  githubLink?: string;
  bgColor: string;
  projectLink?: string;
  slug: string;
  from: Date;
  to?: Date;
  localizationInfo: Record<
    Locale,
    {
      tittle: string;
      shortDescription: string;
    }
  >;
} & (ProjectTypeWork | ProjectTypePersonal);

export const projectsInfo: ProjectInfo[] = [
  {
    bgColor: "#4387F6",
    type: "personal",
    from: new Date("2025-09-26"),
    to: new Date("2025-11-20"),
    slug: "portfolio",
    tags: ["nextjs", "react", "typescript", "tailwind", "figma", "notion"],
    icons: ["/portfolio/snapshot.png"],
    projectLink: "https://www.jasonbrutus.ca",
    githubLink: "https://github.com/BlastChaos/jason-portfolio",
    localizationInfo: {
      en: {
        shortDescription:
          "A modern, responsive portfolio website showcasing my work with smooth animations and multi-language support.",
        tittle: "My Portfolio Website",
      },
      fr: {
        shortDescription:
          "Un portfolio moderne et réactif présentant mon travail, avec animations fluides et support multilingue.",
        tittle: "Mon Portfolio",
      },
    },
  },
  {
    from: new Date("2025-01-05"),
    to: new Date("2025-05-05"),
    icons: ["/planifiscale/client-list.png"],
    type: "work",
    projectLink: "https://www.planifiscale.com",
    slug: "planifiscale",
    companyName: "Planifiscale",
    bgColor: "#f9f0d0",
    tags: ["electron", "mongodb", "tailwind", "typescript", "react", "nodejs"],
    localizationInfo: {
      fr: {
        tittle: "Planifiscale - Gestion des documents fiscaux",

        shortDescription:
          "Une application desktop qui a pour but de faciliter la gestion des documents fiscaux pour les entreprises.",
        // description: "",
      },
      en: {
        tittle: "Planifiscale - Tax income management",
        shortDescription:
          "A desktop application that helps companies prepare income tax documents for their clients in Canada.",
      },
    },
  },
  {
    bgColor: "#FF9300",
    slug: "logbook",
    from: new Date("2025-01-05"),
    icons: [
      "/civalgo/home.png",
      "/civalgo/employees.png",
      "/civalgo/map.png",
      "/civalgo/task.png",
    ],
    tags: [
      "reactNative",
      "expo",
      "tailwind",
      "sqlite",
      "supabase",
      "graphql",
      "postgres",
      "react",
      "typescript",
      "nodejs",
    ],
    projectLink: "https://www.civalgo.com/en/logbook-by-civalgo",
    type: "work",
    companyName: "Civalgo",
    localizationInfo: {
      fr: {
        tittle: "Logbook - Application mobile Punch hors ligne",
        shortDescription:
          "Une application mobile qui a pour but d'aider les teams leaders a tracker le temps de leur employés dans les chantiers de construction.",
      },
      en: {
        tittle: "Logbook - Offline Punch Mobile App",
        shortDescription:
          "A mobile application whose purpose is to help team leaders track the time of their employees on construction sites.",
      },
    },
  },

  {
    bgColor: "#87b04e",
    slug: "chessAi",
    from: new Date("2025-08-30"),
    to: new Date("2025-08-30"),
    icons: ["/chess/icon.png"],
    tags: ["supabase", "typescript", "react", "vite", "tailwind", "openai"],
    type: "personal",
    githubLink: "https://github.com/BlastChaos/chess-ai-extension-hack",
    projectLink: "https://devpost.com/software/chess-ai-6ljxqi",
    localizationInfo: {
      en: {
        tittle: "Chess AI - AI Chess Assistant",
        shortDescription:
          "A chrome extension that analyzes, plays and describes moves made in chess.com with the help of AI.",
      },
      fr: {
        tittle: "Chess AI - Assistant d'échecs avec IA",
        shortDescription:
          "Une extension chrome qui analyse, joue et décrit les coups joués sur chess.com avec l'aide d'IA.",
      },
    },
  },
  {
    type: "personal",
    bgColor: "#65cafd",
    from: new Date("2024-04-29"),
    to: new Date("2024-06-02"),
    slug: "threepiece",
    tags: ["react", "typescript", "vite", "tailwind", "metamask"],
    icons: ["/threepiece/icon.png"],
    githubLink: "https://github.com/tmdeim-git/hackathon-chainlink-game",
    projectLink: "https://devpost.com/software/project-serioso",
    localizationInfo: {
      en: {
        tittle: "Three Piece - On-Chain Exploration & Trading",
        shortDescription:
          "A blockchain game combining exploration, crafting, and trading, with all assets fully owned on-chain.",
      },
      fr: {
        tittle: "Three Piece - Exploration et Commerce On-Chain",
        shortDescription:
          "Un jeu blockchain mêlant exploration, artisanat et échanges, avec une propriété d'actifs sécurisée on-chain.",
      },
    },
  },
];
