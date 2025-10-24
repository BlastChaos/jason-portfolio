import { cn } from "@/utilities/utils";

import { headerSections, SectionsType } from "../utilities/headerSection";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";

type Props = {
  name: string;
  section: SectionsType;
  inSection: boolean;
};

export const MenuSection: React.FC<Props> = (props: Props) => {
  return (
    <div className="group relative flex flex-row gap-2">
      <Icons iconType={headerSections[props.section]} size="md" />
      <Typography text={props.name} type="md" />
      <span
        className={cn(
          "absolute left-0 bottom-0 w-full h-0.5 bg-primary",
          "transform scale-x-0 origin-left",
          "transition-transform duration-700",
          "group-hover:scale-x-100"
        )}
      />
    </div>
  );
};
