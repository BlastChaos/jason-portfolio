"use client";
import { SectionType } from "@/app/[lang]/page";
import { MenuSection } from "./MenuSection";
import { useMemo } from "react";
import { Tabs } from "@/components/ui/tabs";
import useGetActiveSession from "../hook/useGetActiveSession";

type Props = {
  sections: SectionType[];
};
export const MenuSections: React.FC<Props> = (props: Props) => {
  const sectionIds = useMemo(() => props.sections.map((section) => section.id), [props.sections]);
  const activeSection = useGetActiveSession(sectionIds);
  return (
    <div>
      <Tabs
        tabs={props.sections.map((section) => ({
          id: section.id,
          label: (
            <MenuSection
              key={section.id}
              id={section.id}
              name={section.menuName}
              icon={section.icon}
              isActiveSession={activeSection === section.id}
            />
          ),
        }))}
        currentTab={activeSection}
      />
    </div>
  );
};
