import { Icons } from "@/components/ui/icons";

export type Sections = "about" | "projects" | "work" | "contact";

export const headerSections: Record<Sections, Icons> = {
  projects: "folder",
  work: "suitcase",
  contact: "mail",
  about: "avatar",
};
