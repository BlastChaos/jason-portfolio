import { Locale } from "@/dictionaries/dictionaries";
import { Tag } from "@/Section/shared/utilities/tags";

export type WorkInfo = {
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
    from: new Date("2023-05-01"),
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
    ],
    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Develop and maintain cloud and mobile applications to help clients manage their planning and construction projects efficiently.",
        tasks: [
          "Led the replacement of the synchronization system between the mobile app and client platform over 3 months, reducing support tickets by 20% and improving user experience",
          "Quickly learned React and React Native on the job to maintain and improve the web platform and mobile app, reducing average load and action execution time from 5 minutes to 3 seconds.",
          "Consolidated two PostgreSQL databases into a single instance (schema unification + data migration), simplifying maintenance, improving data consistency, and cutting developer onboarding time by 50% (2 → 1 days).",
          "Analyzed user behavior through PostHog to uncover inefficiencies in data management, driving the development of a bulk-update feature that eliminated repetitive manual tasks.",
          "Adopted TDD practices and contributed to the team's automated backend testing suite in the CI/CD pipeline (Jest), helping maintain 78% code coverage.",
          "Worked closely with the Customer Experience team through HubSpot integration to systematically identify and resolve multiple bugs per week, directly enhancing product reliability and customer satisfaction",
        ],
        tittleName: "Full Stack Developer",
      },
      fr: {
        location: "Montréal, QC",
        shortDescription:
          "Développer et maintenir des applications cloud et mobiles pour aider les clients à gérer efficacement leur planification et leurs projets de construction.",
        tasks: [
          "Dirigé le remplacement du système de synchronisation entre l'application mobile et la plateforme client sur 3 mois, réduisant les tickets de support de 20% et améliorant l'expérience utilisateur",
          "Appris rapidement React et React Native sur le terrain pour maintenir et améliorer la plateforme web et l'application mobile, réduisant le temps de chargement moyen et d'exécution des actions de 5 minutes à 3 secondes",
          "Consolidé deux bases de données PostgreSQL en une seule instance (unification de schéma + migration de données), simplifiant la maintenance, améliorant la cohérence des données et réduisant le temps d'intégration des développeurs de 50 % (2 → 1 jours)",
          "Analysé le comportement des utilisateurs via PostHog pour identifier les inefficacités dans la gestion des données, menant au développement d'une fonctionnalité de mise à jour en masse éliminant les tâches manuelles répétitives",
          "Adopté les pratiques TDD et contribué à la suite de tests backend automatisés de l'équipe dans le pipeline CI/CD (Jest), aidant à maintenir une couverture de code de 78 %",
          "Travaillé en étroite collaboration avec l'équipe d'expérience client via l'intégration HubSpot pour identifier et résoudre systématiquement plusieurs bugs par semaine, améliorant directement la fiabilité du produit et la satisfaction client",
        ],
        tittleName: "Développeur Full Stack",
      },
    },
  },

  {
    companyName: "Nomadis",
    website: "https://www.nomadis.com/",
    logo: "/nomadis/logo.png",
    from: new Date("2022-01-01"),
    to: new Date("2023-05-01"),
    techStack: [
      "Csharp",
      "typescript",
      "lucidchart",
      "postgres",
      "docker",
      "confluance",
      "angular",
      "auth0",
      "googleCloudPlatform",
      "efcore",
      "capacitor",
    ],
    langInfo: {
      en: {
        location: "Montreal, QC",
        shortDescription:
          "Developed web and mobile applications using modern technologies to deliver scalable solutions.",
        tasks: [
          "Designed and deployed new microservices on Google Cloud Platform (GCP) to extend application features and modernize architecture.",
          "Unified Web and Mobile authentication by replacing the internal system with IdentityServer4 synchronized with Okta to centralize access management across all platforms.",
          "Implemented OpenID Connect (SSO) across Web (.NET) and Mobile platforms, including configuration, multi-environment testing (Android Studio, Xcode), and documentation.",
          "Rapidly mastered C# and Angular on the job to autonomously manage the backlog, resolving 2+ critical bugs or features per week and ensuring platform stability.",
          "Authored technical documentation on Confluence and modeled processes on Lucidchart to improve code maintainability and developer onboarding.",
        ],
        tittleName: "Full Stack Developer",
      },
      fr: {
        location: "Montréal, QC",
        shortDescription:
          "Développé et modernisé les systèmes d'authentification et les applications mobiles pour une plateforme d'entreprise.",
        tasks: [
          "Conception et déploiement de nouveaux microservices sur Google Cloud Platform (GCP) pour étendre les fonctionnalités de l'application et moderniser l'architecture.",
          "Unifié l'authentification Web et Mobile en remplaçant le système interne par IdentityServer4 synchronisé avec Okta pour centraliser la gestion des accès sur toutes les plateformes.",
          "Implémentation complète du protocole OpenID Connect (SSO) sur les plateformes Web (.NET) et Mobiles, incluant la configuration, les tests multi-environnements (Android Studio, Xcode) et la documentation.",
          "Maîtrise rapide de C# et Angular permettant une gestion autonome du backlog, avec la résolution de plus de 2 tickets critiques par semaine et le maintien de la stabilité de la plateforme.",
          "Rédaction de documentation technique sur Confluence et modélisation des processus sur Lucidchart pour améliorer la maintenabilité du code et l'intégration des nouveaux développeurs.",
        ],
        tittleName: "Développeur Full Stack",
      },
    },
  },
];
