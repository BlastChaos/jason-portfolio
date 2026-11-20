import type { WorkInfo } from "../types";

export default {
  slug: "nomadis",
  companyName: "Nomadis",
  website: "https://www.nomadis.com/",
  logo: "/nomadis/logo.png",
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
  from: new Date("2022-01-01"),
  to: new Date("2023-05-01"),
  roles: ["fullstack", "backend", "devops"],
  content: {
    en: {
      title: "Full Stack Developer",
      location: "Montreal, QC",
      shortDescription: "Developed web and mobile applications using modern technologies to deliver scalable solutions",
      tasks: [
        "Designed and deployed new microservices on Google Cloud Platform (GCP) to extend application features and modernize architecture",
        "Unified Web and Mobile authentication by replacing the internal system with IdentityServer4 synchronized with Okta to centralize access management across all platforms",
        "Implemented OpenID Connect (SSO) across Web (.NET) and Mobile platforms, including configuration, multi-environment testing (Android Studio, Xcode), and documentation",
        "Rapidly mastered C# and Angular on the job to autonomously manage the backlog, resolving 3+ bugs or features requests per week and ensuring platform stability",
        "Authored technical documentation on Confluence and modeled processes on Lucidchart to improve code maintainability and developer onboarding",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription: "Développé et modernisé les systèmes d'authentification et les applications mobiles pour une plateforme d'entreprise",
      tasks: [
        "Conception et déploiement de nouveaux microservices sur Google Cloud Platform (GCP) pour étendre les fonctionnalités de l'application et moderniser l'architecture",
        "Unifié l'authentification Web et Mobile en remplaçant le système interne par IdentityServer4 synchronisé avec Okta pour centraliser la gestion des accès sur toutes les plateformes",
        "Implémentation complète du protocole OpenID Connect (SSO) sur les plateformes Web (.NET) et Mobiles, incluant la configuration, les tests multi-environnements (Android Studio, Xcode) et la documentation",
        "Maîtrise rapide de C# et Angular permettant une gestion autonome du backlog, avec la résolution de plus de 2 tickets critiques par semaine et le maintien de la stabilité de la plateforme",
        "Rédaction de documentation technique sur Confluence et modélisation des processus sur Lucidchart pour améliorer la maintenabilité du code et l'intégration des nouveaux développeurs",
      ],
    },
  },
} satisfies WorkInfo;
