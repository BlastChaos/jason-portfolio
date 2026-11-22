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
        "Cut mobile cold start from 5 minutes to 3 seconds by replacing an eager full sync with on-demand reads and React Query caching",
        "Brought the mobile sync error rate from 1.36% to 0.21% while mutation volume quadrupled, by removing a defect behind more than 80% of failed daily-log updates",
        "Took the company's AI assistant (voice and text) from a hackathon idea to production, and shipped Civalgo's first MCP server so tools like Claude Code and Cursor can use it",
        "Cut the AI agent's prompt from 30k to under 10k tokens per request with tool namespacing, and its latency on long conversations from 6 seconds to 1",
        "Mitigated a SEV1 outage in 29 minutes with an over-the-air hotfix, and took the 27-second query behind a SEV2 database incident to under one second the same day",
        "Shortened the release cycle from 5 to 2 business days by attaching an over-the-air preview build to every merge request",
        "Wrote the setup script that cut new-developer onboarding from 4 days to 30 minutes; mentor interns and sit on intern hiring interviews",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription:
        "Plateforme de suivi des coûts en temps réel pour les entrepreneurs en génie civil. Je développe la plateforme web React, l’application terrain React Native et l’agent IA qui les relie.",
      tasks: [
        "Réduit le démarrage de l’application mobile de 5 minutes à 3 secondes en remplaçant une synchronisation complète par des lectures à la demande avec mise en cache React Query",
        "Fait passer le taux d’erreurs de synchronisation mobile de 1,36 % à 0,21 % alors que le volume de mutations quadruplait, en éliminant un défaut responsable de plus de 80 % des échecs",
        "Mené l’assistant IA de l’entreprise (voix et texte) d’une idée de hackathon jusqu’en production, et livré le premier serveur MCP de Civalgo pour que des outils comme Claude Code et Cursor puissent l’utiliser",
        "Réduit le prompt de l’agent IA de 30 k à moins de 10 k jetons par requête grâce au regroupement des outils, et sa latence sur les longues conversations de 6 secondes à 1",
        "Atténué une panne SEV1 en 29 minutes avec un correctif déployé à distance, et ramené la requête de 27 secondes à l’origine d’un incident SEV2 sous la seconde le jour même",
        "Raccourci le cycle de publication de 5 à 2 jours ouvrables en joignant une version de prévisualisation à chaque merge request",
        "Écrit le script d’installation qui a réduit l’intégration des nouveaux développeurs de 4 jours à 30 minutes; j’encadre les stagiaires et participe à leurs entrevues d’embauche",
      ],
    },
  },
} satisfies WorkInfo;
