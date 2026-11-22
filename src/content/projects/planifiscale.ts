import type { ProjectInfo } from "../types";

export default {
  slug: "planifiscale",
  icons: ["/planifiscale/client-list.png"],
  type: "work",
  projectLink: "https://www.planifiscale.com",
  companyName: "Planifiscale",
  bgColor: "#f9f0d0",
  tags: ["electron", "mongodb", "tailwind", "typescript", "react", "nodejs"],
  from: new Date("2025-01-05"),
  to: new Date("2025-05-05"),
  roles: ["fullstack", "frontend"],
  content: {
    fr: {
      title: "Planifiscale - Gestion des documents fiscaux",
      shortDescription:
        "Une application desktop qui a pour but de faciliter la gestion des documents fiscaux pour les entreprises.",
    },
    en: {
      title: "Planifiscale - Tax income management",
      shortDescription:
        "A desktop application that helps companies prepare income tax documents for their clients in Canada.",
    },
  },
} satisfies ProjectInfo;
