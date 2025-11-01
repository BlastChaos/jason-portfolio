import { Locale } from "@/dictionaries/dictionaries";
import { Tag } from "@/Section/shared/utilities/tags";

type WorkInfo = {
  companyName: string;
  logo: string;
  from: Date;
  to?: Date;
  techStack: Tag[];
  website: string;
  langInfo: Record<
    Locale,
    {
      shortDescription: string;
      tittleName: string;
      tasks: string[];
      location: string;
    }
  >;
};
export const workInfo: WorkInfo[] = [
  {
    companyName: "Civalgo",
    website: "https://www.civalgo.com/",
    logo: "/civalgo/logo.png",
    from: new Date("2025-01-01"),
    techStack: [
      "graphql",
      "nextjs",
      "nodejs",
      "postgres",
      "typescript",
      "tailwind",
      "supabase",
      "reactNative",
      "react",
      "openai",
      "docker",
    ],

    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Maintain and develop the application cloud and mobile to help the clients manage their planning and projects",

        tasks: [
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
        ],
        tittleName: "Full stack developper",
      },
      fr: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        tasks: [
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        ],
        tittleName: "Full stack developper",
      },
    },
  },
  {
    companyName: "Civalgo",
    website: "https://www.civalgo.com/",
    logo: "/civalgo/logo.png",
    from: new Date("2023-05-01"),
    to: new Date("2023-12-01"),
    techStack: [
      "graphql",
      "nextjs",
      "nodejs",
      "postgres",
      "typescript",
      "tailwind",
      "supabase",
      "reactNative",
      "react",
      "openai",
      "docker",
    ],

    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Maintain and develop the application cloud and mobile to help the clients manage their planning and projects",

        tasks: [
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
        ],
        tittleName: "Intern - Full Stack Developper",
      },
      fr: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        tasks: [
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        ],
        tittleName: "Stagiaire - Full Stack Developper",
      },
    },
  },
  {
    companyName: "Nomadis",
    website: "https://www.civalgo.com/",
    logo: "/civalgo/logo.svg",
    from: new Date("2022-08-01"),
    to: new Date("2023-05-01"),
    techStack: [
      "graphql",
      "nextjs",
      "nodejs",
      "postgres",
      "typescript",
      "tailwind",
      "supabase",
      "reactNative",
      "react",
    ],

    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",

        tasks: [
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
        ],
        tittleName: "Full stack developper",
      },
      fr: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        tasks: [
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        ],
        tittleName: "Full stack developper",
      },
    },
  },
  {
    companyName: "Nomadis",
    website: "https://www.civalgo.com/",
    logo: "/civalgo/logo.svg",
    from: new Date("2022-01-01"),
    to: new Date("2022-08-01"),
    techStack: [
      "graphql",
      "nextjs",
      "nodejs",
      "postgres",
      "typescript",
      "tailwind",
      "supabase",
      "reactNative",
      "react",
    ],

    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",

        tasks: [
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
          "Developed the Quest Developer Portal from scratch (ASP.NET + React), enabling seamless API onboarding for clients like JPMorgan and Coles.",
        ],
        tittleName: "Intern - Full Stack Developper",
      },
      fr: {
        location: "Montreal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        tasks: [
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        ],
        tittleName: "Stagiaire - Full Stack Developper",
      },
    },
  },
];
