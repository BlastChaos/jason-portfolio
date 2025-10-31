import { Card } from "@/components/ui/card";
import { Icons, IconsType } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import React from "react";

import { cn } from "@/utilities/utils";

type Props = {
  icon: IconsType;
  title: string;
  description: string;
  className?: string;
};
export const InfoCard: React.FC<Props> = (props: Props) => {
  return (
    <Card className={cn("flex flex-col gap-2 h-full", props.className)}>
      <div className="flex flex-row  items-center gap-1">
        <Icons iconType={props.icon} size={"lg"} />
        <Typography type={"h4"} text={props.title} />
      </div>
      <Typography type={"sm"} text={props.description} />
    </Card>
  );
};
