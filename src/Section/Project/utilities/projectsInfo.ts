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
          "My personal portfolio website created with Next.js, Tailwind CSS, and TypeScript.",
        tittle: "My Portfolio Website",
      },
      fr: {
        shortDescription:
          "Mon site web de portfolio personnel créé avec Next.js, Tailwind CSS, et TypeScript.",
        tittle: "Mon Site Web de Portfolio",
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

        // problem:
        //   "Before I worked on a desktop application for the company Planifiscale, they needed to use ___ to manage their clients and their documents for the taxes. " +
        //   "They didn't like their software since it was and old desktop application who couldn't suffice all their need." +
        //   "To fix theur issues, me and my collegues decided to create a desktop application who help them prepare income tax documents for their clients in Canada.",
        // solution:
        //   "With our application, the user is able to easily add the clients and their documents info, allowing them to easily ",
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

      // "graphql",
      // "postgres",
      // "react",

      // "typescript",
      // "nodejs",
      // "sentry",
      // "posthog",
    ],
    projectLink: "https://www.civalgo.com/en/logbook-by-civalgo",
    type: "work",
    companyName: "Civalgo",
    localizationInfo: {
      fr: {
        tittle: "Logbook - Application mobile Punch hors ligne",
        shortDescription:
          "Une application mobile qui a pour but d'aider les teams leaders a tracker le temps de leur employés dans les chantiers de construction.",

        // problem: `Dans le secteur de la construction, la gestion quotidienne des heures travaillées, des activités de chantier et des rapports repose encore trop souvent sur le papier, Excel ou des processus manuels. Ces méthodes entraînent une perte de temps considérable, augmentent les risques d’erreurs et provoquent fréquemment une perte ou une dispersion des données essentielles.`,
        // solution: `Concevoir une application mobile conçue pour la saisie des heures de travail et la production de rapports quotidiens, spécialement adaptée aux équipes de terrain dans le domaine de la construction. Elle élimine ainsi les risques d’erreurs et la perte de données.`,
        // myRole:
        //   "Mon role consistait a concevoir, developper et maintenir l'application mobile avec l'aide d'un collegue de travail",

        // features: [
        //   "Suivi des employés selon leur position géographique pour garantir l’exactitude et la transparence des heures travaillées.",
        //   "L’application fonctionne même sans connexion Internet et synchronise les données une fois la connexion rétablie.",
        //   "Les équipes de terrain peuvent soumettre des rapports d’activités journaliers, consultés en temps réel par les gestionnaires de projet.",
        //   "Possibilité de prendre des photos, de joindre des documents et de collecter des données terrain accessibles aux responsables de chantier.",
        //   "Les données recueillies via Logbook s’intègrent aux outils de gestion de projets et de planification des ressources de Civalgo.",
        // ],
        // challenges: [
        //   "La synchronization des donnes entre Civalgo et logbook n'etait pas facile. En effet, l'implementation de la synchronization a amener beaucoup de probleme de conflict relier a la synchronization. Afin de regler la situation, il a fallut changer notre methode de synchronization au complet",
        //   "C'etait la premiere fois que je travaille sur une application mobile. Du coup je devais apprendre comment m'en servir en regardant sur internet ainsi qu'on testant et brisant des choses",
        //   "La perfomance de l'application etait difficile a ",
        // ],
      },
      en: {
        tittle: "Logbook - Offline Punch Mobile App",
        shortDescription:
          "A mobile application whose purpose is to help team leaders track the time of their employees on construction sites.",
        // problem:
        //   "Before I worked on a desktop application for the company Planifiscale, they needed to use ___ to manage their clients and their documents for the taxes. " +
        //   "They didn't like their software since it was and old desktop application who couldn't suffice all their need." +
        //   "To fix theur issues, me and my collegues decided to create a desktop application who help them prepare income tax documents for their clients in Canada.",
        // solution:
        //   "With our application, the user is able to easily add the clients and their documents info, allowing them to easily ",
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
          "A blockchain-based game combining land exploration, crafting, and trading — where every action is secured and owned on-chain.",
      },
      fr: {
        tittle: "Three Piece - Exploration et Commerce On-Chain",
        shortDescription:
          "Un jeu basé sur la blockchain combinant exploration de terres, artisanat et échanges — où chaque action est sécurisée et détenue sur la chaîne.",
      },
    },
  },
];
