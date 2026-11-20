import type { ProjectInfo } from "../types";

export default {
  slug: "chessAi",
  bgColor: "#87b04e",
  icons: ["/chess/icon.png"],
  tags: ["supabase", "typescript", "react", "vite", "tailwind", "openai"],
  type: "personal",
  githubLink: "https://github.com/BlastChaos/chess-ai-extension-hack",
  projectLink: "https://devpost.com/software/chess-ai-6ljxqi",
  from: new Date("2025-08-30"),
  to: new Date("2025-08-30"),
  roles: ["ai", "frontend"],
  content: {
    en: {
      title: "Chess AI - AI Chess Assistant",
      shortDescription: "A chrome extension that analyzes, plays and describes moves made in chess.com with the help of AI.",
    },
    fr: {
      title: "Chess AI - Assistant d'échecs avec IA",
      shortDescription: "Une extension chrome qui analyse, joue et décrit les coups joués sur chess.com avec l'aide d'IA.",
    },
  },
} satisfies ProjectInfo;
