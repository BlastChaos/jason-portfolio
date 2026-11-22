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
  periods: [
    {
      type: "internship",
      from: new Date("2022-01-01"),
      to: new Date("2022-04-01"),
    },
    {
      type: "internship",
      from: new Date("2022-05-01"),
      to: new Date("2022-08-01"),
    },
    {
      type: "partTime",
      from: new Date("2022-09-01"),
      to: new Date("2023-05-01"),
    },
  ],
  roles: ["fullstack", "backend", "devops"],
  content: {
    en: {
      title: "Full Stack Developer",
      location: "Montreal, QC",
      shortDescription:
        "Workforce and travel logistics platform. Two internships, then part-time during my studies, focused on identity, single sign-on and cloud microservices.",
      tasks: [
        "Integrated OpenID Connect single sign-on into the Ionic/Angular mobile app and built the ASP.NET REST APIs behind the secure token exchange",
        "Implemented SCIM provisioning so user accounts flow automatically from Okta and Azure AD into the workforce platform",
        "Unified web and mobile authentication by replacing the internal system with IdentityServer4 synchronized with Okta",
        "Built and deployed workforce-management microservices in .NET and Angular on Google Cloud Platform with Docker and PostgreSQL",
        "Maintained the legacy .NET Framework platform during its cloud migration, resolving 3+ bugs or feature requests a week across both stacks",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription:
        "Plateforme de gestion de main-d’œuvre et de logistique de voyage. Deux stages, puis temps partiel pendant mes études, centrés sur l’identité, l’authentification unique et les microservices infonuagiques.",
      tasks: [
        "Intégré l’authentification unique OpenID Connect à l’application mobile Ionic/Angular et développé les API REST ASP.NET assurant l’échange sécurisé de jetons",
        "Implémenté le provisionnement SCIM pour que les comptes utilisateurs passent automatiquement d’Okta et d’Azure AD à la plateforme",
        "Unifié l’authentification web et mobile en remplaçant le système interne par IdentityServer4 synchronisé avec Okta",
        "Développé et déployé des microservices de gestion de main-d’œuvre en .NET et Angular sur Google Cloud Platform avec Docker et PostgreSQL",
        "Maintenu la plateforme .NET Framework existante pendant sa migration vers l’infonuagique, en résolvant plus de 3 bogues ou demandes par semaine sur les deux plateformes",
      ],
    },
  },
} satisfies WorkInfo;
