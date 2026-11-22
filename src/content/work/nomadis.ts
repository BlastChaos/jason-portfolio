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
        "Let employees sign in to the mobile app with their company account (single sign-on with OpenID Connect), and built the ASP.NET APIs behind it",
        "Automated creating and removing user accounts from customers’ Okta and Azure AD directories (SCIM), instead of admins managing them by hand",
        "Gave the web and mobile apps one shared login system by replacing the internal one with IdentityServer4, synchronized with Okta",
        "Built and deployed workforce-management services in .NET and Angular on Google Cloud, with Docker and PostgreSQL",
        "Maintained the legacy .NET Framework platform during its cloud migration, resolving 3+ bugs or feature requests a week across both stacks",
      ],
    },
    fr: {
      title: "Développeur Full Stack",
      location: "Montréal, QC",
      shortDescription:
        "Plateforme de gestion de main-d’œuvre et de logistique de voyage. Deux stages, puis temps partiel pendant mes études, centrés sur l’identité, l’authentification unique et les microservices infonuagiques.",
      tasks: [
        "Permis aux employés de se connecter à l’application mobile avec leur compte d’entreprise (authentification unique OpenID Connect), et développé les API ASP.NET qui la soutiennent",
        "Automatisé la création et la suppression des comptes utilisateurs à partir des annuaires Okta et Azure AD des clients (SCIM), au lieu d’une gestion manuelle par les administrateurs",
        "Donné aux applications web et mobile un seul système de connexion en remplaçant le système interne par IdentityServer4, synchronisé avec Okta",
        "Développé et déployé des services de gestion de main-d’œuvre en .NET et Angular sur Google Cloud, avec Docker et PostgreSQL",
        "Maintenu la plateforme .NET Framework existante pendant sa migration vers l’infonuagique, en résolvant plus de 3 bogues ou demandes par semaine sur les deux plateformes",
      ],
    },
  },
} satisfies WorkInfo;
