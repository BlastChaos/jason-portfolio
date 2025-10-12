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
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
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
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        keyCourses: [
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        ],
      },
    },
  },
  {
    website: "https://www.etsmtl.ca/",

    logo: "/ets/logo.svg",
    schoolName: "École de technologie supérieure 2",
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
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        keyCourses: [
          "Data Structures and Algorithms",
          "Database Management Systems",
          "Web Technologies",
        ],
      },
      fr: {
        tittleName: "Baccalauréat en génie logiciel",
        location: "Montréal, QC",
        shortDescription:
          "Work on adding more text so it seems bigger than it seems in mobile and app using react ",
        keyCourses: [
          "Machine Learning",
          "Computer Networks",
          "Software Engineering",
          "Artificial Intelligence",
        ],
      },
    },
  },
];
