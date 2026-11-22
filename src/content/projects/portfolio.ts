import type { ProjectInfo } from "../types";

export default {
  slug: "portfolio",
  bgColor: "#4387F6",
  type: "personal",
  tags: ["nextjs", "react", "typescript", "tailwind", "figma", "notion"],
  icons: ["/portfolio/snapshot.png"],
  projectLink: "https://www.jasonbrutus.ca",
  githubLink: "https://github.com/BlastChaos/jason-portfolio",
  from: new Date("2025-09-26"),
  to: new Date("2025-11-20"),
  roles: ["frontend"],
  content: {
    en: {
      title: "My Portfolio Website",
      shortDescription:
        "A modern, responsive portfolio website showcasing my work with smooth animations and multi-language support.",
    },
    fr: {
      title: "Mon Portfolio",
      shortDescription:
        "Un portfolio moderne et réactif présentant mon travail, avec animations fluides et support multilingue.",
    },
  },
} satisfies ProjectInfo;
