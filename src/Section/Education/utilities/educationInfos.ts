import { Locale } from "@/dictionaries/dictionaries";

type EducationInfo = {
  logo: string;
  schoolName: string;
  website: string;
  from: Date;
  to?: Date;
  gpa?: {
    maxNumber: number;
    currentNumber: number;
  };
  langInfo: Record<
    Locale,
    {
      shortDescription: string;
      tittleName: string;
      keyCourses: string[];
      location: string;
    }
  >;
};

export const educationInfos: EducationInfo[] = [
  {
    website: "https://www.etsmtl.ca/",
    logo: "/ets/logo.svg",
    schoolName: "École de technologie supérieure",
    from: new Date("2020-01-01"),
    to: new Date("2024-01-01"),
    gpa: {
      currentNumber: 3.79,
      maxNumber: 4.3,
    },
    langInfo: {
      en: {
        tittleName: "Bachelor of Software Engineering",
        location: "Montreal, QC",
        shortDescription:
          "Bachelor's degree focused on the complete software development lifecycle, from requirements analysis to system architecture and quality assurance. Emphasizes practical, hands-on experience with modern engineering tools and methodologies.",
        keyCourses: [
          "Machine Learning",
          "Computer Networks",
          "Software Engineering",
          "Artificial Intelligence",
        ],
      },
      fr: {
        tittleName: "Baccalauréat en génie logiciel",
        location: "Montréal, QC",
        shortDescription:
          "Baccalauréat axé sur le cycle de vie complet du développement logiciel, de l'analyse des exigences à l'architecture système et l'assurance qualité. Met l'accent sur l'expérience pratique avec des outils et méthodologies d'ingénierie modernes.",
        keyCourses: [
          "Apprentissage automatique",
          "Réseaux informatiques",
          "Génie logiciel",
          "Intelligence artificielle",
        ],
      },
    },
  },
  {
    website: "https://www.cmaisonneuve.qc.ca/",
    logo: "/maisonneuve/logo.svg",
    schoolName: "Collège de Maisonneuve",
    from: new Date("2018-01-01"),
    to: new Date("2019-11-20"),
    langInfo: {
      en: {
        tittleName: "DEC – Computer Science and Mathematics",
        location: "Montreal, QC",
        shortDescription:
          "Comprehensive program covering the fundamentals of computer science, including programming, database management, and web development. Provided a strong technical foundation for further engineering studies.",
        keyCourses: [
          "Data Structures and Algorithms",
          "Database Management Systems",
          "Web Technologies",
        ],
      },
      fr: {
        tittleName: "DEC – Sciences informatiques et mathématiques",
        location: "Montréal, QC",
        shortDescription:
          "Programme complet couvrant les fondamentaux de l'informatique, incluant la programmation, la gestion de bases de données et le développement web. A fourni une base technique solide pour la poursuite d'études en ingénierie.",
        keyCourses: [
          "Structures de données et algorithmes",
          "Systèmes de gestion de bases de données",
          "Technologies Web",
        ],
      },
    },
  },
];
