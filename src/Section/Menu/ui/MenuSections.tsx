"use client";
import { SectionType } from "@/app/[lang]/page";
import { MenuSection } from "./MenuSection";
import { Tabs } from "@/components/ui/tabs";
import useGetActiveSession from "../hook/useGetActiveSession";

type Props = {
  sections: SectionType[];
};
export const MenuSections: React.FC<Props> = (props: Props) => {
  const activeSection = useGetActiveSession(
    props.sections.map((section) => section.id)
  );
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
            />
          ),
        }))}
        currentTab={activeSection}
      />
    </div>
  );
};
