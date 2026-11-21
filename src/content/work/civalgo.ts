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
      from: new Date("2023-08-01"),
      to: new Date("2024-01-01"),
    },
    {
      type: "partTime",
      from: new Date("2024-01-01"),
      to: new Date("2024-07-01"),
    },
    { type: "fullTime", from: new Date("2024-07-01") },
  ],
  roles: ["fullstack", "frontend", "backend", "mobile"],
  content: {
    en: {
      title: "Full Stack Developer",
      location: "Montreal, QC",
      shortDescription:
        "Develop and maintain cloud and mobile applications to help clients manage their planning and construction projects efficiently",
      tasks: [
        "Led the replacement of the synchronization system between the mobile app and client platform over 3 months, reducing support tickets by 20% and improving user experience",
        "Quickly learned React and React Native on the job to maintain and improve the web platform and mobile app, reducing average load and action execution time from 5 minutes to 3 seconds",
        "Consolidated two PostgreSQL databases into a single instance (schema unification + data migration), simplifying maintenance, improving data consistency, and cutting developer onboarding time by 50% (2 → 1 days)",
        "Analyzed user behavior through PostHog to uncover inefficiencies in data management, driving the development of a bulk-update feature that eliminated repetitive manual tasks",
        "Adopted TDD practices and contributed to the team's automated backend testing suite in the CI/CD pipeline (Jest), helping maintain 78% code coverage",
        "Worked closely with the Customer Experience team through HubSpot integration to systematically identify and resolve multiple bugs per week, directly enhancing product reliability and customer satisfaction",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription:
        "Développer et maintenir des applications cloud et mobiles pour aider les clients à gérer efficacement leur planification et leurs projets de construction",
      tasks: [
        "Dirigé le remplacement du système de synchronisation entre l'application mobile et la plateforme client sur 3 mois, réduisant les tickets de support de 20% et améliorant l'expérience utilisateur",
        "Appris rapidement React et React Native sur le terrain pour maintenir et améliorer la plateforme web et l'application mobile, réduisant le temps de chargement moyen et d'exécution des actions de 5 minutes à 3 secondes",
        "Consolidé deux bases de données PostgreSQL en une seule instance (unification de schéma + migration de données), simplifiant la maintenance, améliorant la cohérence des données et réduisant le temps d'intégration des développeurs de 50 % (2 → 1 jours)",
        "Analysé le comportement des utilisateurs via PostHog pour identifier les inefficacités dans la gestion des données, menant au développement d'une fonctionnalité de mise à jour en masse éliminant les tâches manuelles répétitives",
        "Adopté les pratiques TDD et contribué à la suite de tests backend automatisés de l'équipe dans le pipeline CI/CD (Jest), aidant à maintenir une couverture de code de 78 %",
        "Travaillé en étroite collaboration avec l'équipe d'expérience client via l'intégration HubSpot pour identifier et résoudre systématiquement plusieurs bugs par semaine, améliorant directement la fiabilité du produit et la satisfaction client",
      ],
    },
  },
} satisfies WorkInfo;
