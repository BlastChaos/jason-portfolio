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
  // {
  //   companyName: "Civalgo 2",
  //   website: "https://www.civalgo.com/",
  //   logo: "/civalgo/logo.png",
  //   from: new Date("2023-05-01"),
  //   to: new Date("2023-12-31"),
  //   techStack: [
  //     "graphql",
  //     "nextjs",
  //     "nodejs",
  //     "postgres",
  //     "typescript",
  //     "tailwind",
  //     "supabase",
  //     "reactNative",
  //     "react",
  //   ],
  //   langInfo: {
  //     en: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Contributed to the development of cloud and mobile applications for construction project management.",
  //       tasks: [
  //         "Assisted in developing features for the web application using React and Next.js",
  //         "Participated in code reviews and learned best practices for scalable application architecture",
  //         "Fixed bugs and improved application performance under the guidance of senior developers",
  //         "Gained experience with GraphQL, PostgreSQL, and modern frontend development practices",
  //       ],
  //       tittleName: "Intern - Full Stack Developer",
  //     },
  //     fr: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Contribué au développement d'applications cloud et mobiles pour la gestion de projets de construction.",
  //       tasks: [
  //         "Assisté au développement de fonctionnalités pour l'application web utilisant React et Next.js",
  //         "Participé aux revues de code et appris les meilleures pratiques pour l'architecture d'application évolutive",
  //         "Corrigé des bugs et amélioré les performances de l'application sous la supervision de développeurs seniors",
  //         "Acquis de l'expérience avec GraphQL, PostgreSQL et les pratiques modernes de développement frontend",
  //       ],
  //       tittleName: "Stagiaire - Développeur Full Stack",
  //     },
  //   },
  // },
  // {
  //   companyName: "Nomadis",
  //   website: "https://www.nomadis.com/",
  //   logo: "/civalgo/logo.png",
  //   from: new Date("2022-08-01"),
  //   to: new Date("2023-05-01"),
  //   techStack: [
  //     "graphql",
  //     "nextjs",
  //     "nodejs",
  //     "postgres",
  //     "typescript",
  //     "tailwind",
  //     "supabase",
  //     "reactNative",
  //     "react",
  //   ],
  //   langInfo: {
  //     en: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Developed web and mobile applications using modern technologies to deliver scalable solutions.",
  //       tasks: [
  //         "Built responsive web applications using React, Next.js, and TypeScript",
  //         "Developed RESTful and GraphQL APIs using Node.js and PostgreSQL",
  //         "Implemented responsive UI components using Tailwind CSS and modern design patterns",
  //         "Collaborated with team members to deliver features and improve code quality",
  //       ],
  //       tittleName: "Full Stack Developer",
  //     },
  //     fr: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Développé des applications web et mobiles utilisant des technologies modernes pour livrer des solutions évolutives.",
  //       tasks: [
  //         "Construit des applications web responsives utilisant React, Next.js et TypeScript",
  //         "Développé des APIs RESTful et GraphQL utilisant Node.js et PostgreSQL",
  //         "Implémenté des composants UI responsives utilisant Tailwind CSS et des modèles de conception modernes",
  //         "Collaboré avec les membres de l'équipe pour livrer des fonctionnalités et améliorer la qualité du code",
  //       ],
  //       tittleName: "Développeur Full Stack",
  //     },
  //   },
  // },
  // {
  //   companyName: "Nomadis 2",
  //   website: "https://www.nomadis.com/",
  //   logo: "/civalgo/logo.png",
  //   from: new Date("2022-01-01"),
  //   to: new Date("2022-08-01"),
  //   techStack: [
  //     "graphql",
  //     "nextjs",
  //     "nodejs",
  //     "postgres",
  //     "typescript",
  //     "tailwind",
  //     "supabase",
  //     "reactNative",
  //     "react",
  //   ],
  //   langInfo: {
  //     en: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Learned full-stack development practices while contributing to real-world projects.",
  //       tasks: [
  //         "Assisted in frontend development using React and TypeScript",
  //         "Learned backend development with Node.js and database management with PostgreSQL",
  //         "Participated in agile development processes and team meetings",
  //         "Fixed minor bugs and implemented small features under supervision",
  //         "Assisted in frontend development using React and TypeScript",
  //         "Learned backend development with Node.js and database management with PostgreSQL",
  //         "Participated in agile development processes and team meetings",
  //         "Fixed minor bugs and implemented small features under supervision",
  //       ],
  //       tittleName: "Intern - Full Stack Developer",
  //     },
  //     fr: {
  //       location: "Montreal, QC",
  //       shortDescription:
  //         "Appris les pratiques de développement full stack tout en contribuant à des projets réels.",
  //       tasks: [
  //         "Assisté au développement frontend utilisant React et TypeScript",
  //         "Appris le développement backend avec Node.js et la gestion de base de données avec PostgreSQL",
  //         "Participé aux processus de développement agile et aux réunions d'équipe",
  //         "Corrigé des bugs mineurs et implémenté de petites fonctionnalités sous supervision",
  //       ],
  //       tittleName: "Stagiaire - Développeur Full Stack",
  //     },
  //   },
  // },
];
