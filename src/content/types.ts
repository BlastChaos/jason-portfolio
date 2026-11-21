import type { Locale } from "@/dictionaries/dictionaries";
import type { Tag } from "@/Section/shared/utilities/tags";

export type Role =
  "fullstack" | "frontend" | "backend" | "mobile" | "devops" | "ai";

export type ProjectType = "school" | "work" | "personal";

type ProjectBase = {
  slug: string;
  tags: Tag[];
  icons: string[];
  githubLink?: string;
  projectLink?: string;
  bgColor: string;
  from: Date;
  to?: Date;
  /** Roles this project is relevant to, used to rank it in tailored views. */
  roles: Role[];
  content: Record<
    Locale,
    {
      title: string;
      shortDescription: string;
    }
  >;
};

export type ProjectInfo = ProjectBase &
  ({ type: "work"; companyName: string } | { type: "personal" });

export type EmploymentType = "internship" | "partTime" | "fullTime";

export type WorkPeriod = {
  type: EmploymentType;
  from: Date;
  // Inclusive month, as on a CV: "Jan – Apr" includes April.
  to?: Date;
};

export type WorkInfo = {
  slug: string;
  companyName: string;
  logo: string;
  website: string;
  /** Chronological and non-overlapping. */
  periods: WorkPeriod[];
  techStack: Tag[];
  /** Roles this experience is relevant to, used to rank it in tailored views. */
  roles: Role[];
  content: Record<
    Locale,
    {
      title: string;
      shortDescription: string;
      location: string;
      tasks: string[];
    }
  >;
};
