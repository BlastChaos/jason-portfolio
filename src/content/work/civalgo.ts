import type { WorkInfo } from "../types";

export default {
  slug: "civalgo",
  companyName: "Civalgo",
  website: "https://www.civalgo.com/",
  logo: "/civalgo/logo.png",
  techStack: [
    "react",
    "nextjs",
    "typescript",
    "reactNative",
    "expo",
    "nodejs",
    "graphql",
    "supabase",
    "postgres",
    "notion",
    "sqlite",
    "tailwind",
    "docker",
    "gitlab",
    "openai",
    "auth0",
    "jest",
  ],
  periods: [
    {
      type: "internship",
      from: new Date("2023-09-01"),
      to: new Date("2023-12-01"),
    },
    {
      type: "partTime",
      from: new Date("2024-01-01"),
      to: new Date("2024-06-01"),
    },
    { type: "fullTime", from: new Date("2024-07-01") },
  ],
  roles: ["fullstack", "frontend", "backend", "mobile"],
  content: {
    en: {
      title: "Full Stack Developer",
      location: "Montreal, QC",
      shortDescription:
        "Real-time job costing platform for heavy civil contractors. I build the React web platform, the React Native field app and the AI agent behind them.",
      tasks: [
        "Made the mobile app open in 3 seconds instead of 5 minutes by loading only the data each screen needs, with React Query caching, instead of syncing everything at launch",
        "Made updates sent from the field app fail 6 times less often (1.36% → 0.21%) while their volume quadrupled, by fixing the defect behind more than 80% of failures",
        "Took the company's AI assistant, which fills in daily job reports by voice or text, from a hackathon idea to production, then opened it to tools like Claude Code and Cursor through Civalgo's first MCP server",
        "Cut what the AI assistant sends to the model on each request by two-thirds (30k → under 10k tokens) by giving it only the tools it needs, and made its replies in long conversations 6 times faster (6 s → 1 s)",
        "Brought the mobile app back for customers 29 minutes into a critical outage with a remote update that skipped app store review, and fixed the slow database query behind another outage (27 s → under 1 s) the same day",
        "Cut the time to release from 5 to 2 business days by giving reviewers a test build of every change that they could open on their own phone",
        "Wrote the setup script that gets a new developer working in 30 minutes instead of 4 days; I mentor interns and help interview new ones",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription:
        "Plateforme de suivi des coûts en temps réel pour les entrepreneurs en génie civil. Je développe la plateforme web React, l’application terrain React Native et l’agent IA qui les relie.",
      tasks: [
        "Fait passer l’ouverture de l’application mobile de 5 minutes à 3 secondes en chargeant seulement les données dont chaque écran a besoin, avec mise en cache React Query, au lieu de tout synchroniser au démarrage",
        "Rendu les mises à jour envoyées depuis l’application terrain 6 fois moins susceptibles d’échouer (1,36 % → 0,21 %) alors que leur volume quadruplait, en corrigeant le défaut responsable de plus de 80 % des échecs",
        "Mené l’assistant IA de l’entreprise, qui remplit les rapports de chantier quotidiens par la voix ou par texte, d’une idée de hackathon jusqu’en production, puis l’ai ouvert à des outils comme Claude Code et Cursor grâce au premier serveur MCP de Civalgo",
        "Réduit des deux tiers ce que l’assistant IA envoie au modèle à chaque requête (30 k → moins de 10 k jetons) en ne lui donnant que les outils nécessaires, et rendu ses réponses 6 fois plus rapides dans les longues conversations (6 s → 1 s)",
        "Rétabli l’application mobile pour les clients 29 minutes après le début d’une panne critique grâce à une mise à jour à distance, sans passer par les magasins d’applications, et corrigé la même journée la requête lente à l’origine d’une autre panne (27 s → moins d’une seconde)",
        "Réduit le délai de publication de 5 à 2 jours ouvrables en donnant aux réviseurs une version de test de chaque changement, à ouvrir directement sur leur téléphone",
        "Écrit le script d’installation qui permet à un nouveau développeur d’être opérationnel en 30 minutes au lieu de 4 jours; j’encadre les stagiaires et participe à leurs entrevues d’embauche",
      ],
    },
  },
} satisfies WorkInfo;
