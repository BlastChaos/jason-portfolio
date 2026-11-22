import type { ProjectInfo } from "../types";

export default {
  slug: "threepiece",
  type: "personal",
  bgColor: "#65cafd",
  tags: ["react", "typescript", "vite", "tailwind", "metamask"],
  icons: ["/threepiece/icon.png"],
  githubLink: "https://github.com/tmdeim-git/hackathon-chainlink-game",
  projectLink: "https://devpost.com/software/project-serioso",
  from: new Date("2024-04-29"),
  to: new Date("2024-06-02"),
  roles: ["frontend"],
  content: {
    en: {
      title: "Three Piece - On-Chain Exploration & Trading",
      shortDescription:
        "A blockchain game combining exploration, crafting, and trading, with all assets fully owned on-chain.",
    },
    fr: {
      title: "Three Piece - Exploration et Commerce On-Chain",
      shortDescription:
        "Un jeu blockchain mêlant exploration, artisanat et échanges, avec une propriété d'actifs sécurisée on-chain.",
    },
  },
} satisfies ProjectInfo;
