import { Locale } from "@/dictionaries/dictionaries";
import { Tag } from "@/Section/shared/utilities/tags";

type WorkInfo = {
  companyName: string;
  from: Date;
  to?: Date;
  techStack: Tag[];
  langInfo: Record<
    Locale,
    {
      tittleName: string;
      tasks: string[];
      location: string;
    }
  >;

  tittleName: string;
  location: string;
  tasks: string;
};
export const workInfo: WorkInfo[] = [];
