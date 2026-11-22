import type { ProjectInfo } from "../types";

export default {
  slug: "logbook",
  bgColor: "#FF9300",
  icons: ["/civalgo/home.png", "/civalgo/employees.png", "/civalgo/map.png", "/civalgo/task.png"],
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
  from: new Date("2025-01-05"),
  roles: ["fullstack", "mobile", "frontend"],
  content: {
    fr: {
      title: "Logbook - Application mobile Punch hors ligne",
      shortDescription:
        "Une application mobile qui a pour but d'aider les teams leaders a tracker le temps de leur employés dans les chantiers de construction.",
    },
    en: {
      title: "Logbook - Offline Punch Mobile App",
      shortDescription:
        "A mobile application whose purpose is to help team leaders track the time of their employees on construction sites.",
    },
  },
} satisfies ProjectInfo;
