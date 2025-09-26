import { IconsType } from "@/components/ui/icons";

export type SectionsType = "home" | "about" | "projects" | "work" | "contact";

export const headerSections: Record<SectionsType, IconsType> = {
  projects: "folder",
  work: "suitcase",
  contact: "mail",
  about: "avatar",
  home: "home",
};
