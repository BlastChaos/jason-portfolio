import { Card } from "@/components/ui/card";
import { Icons, IconsType } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import React from "react";

type Props = {
  icon: IconsType;
  title: string;
  description: string;
};
export const InfoCard: React.FC<Props> = (props: Props) => {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex flex-row  items-center gap-1">
        <Icons iconType={props.icon} size={"lg"} />
        <Typography type={"h4"} text={props.title} />
      </div>
      <Typography type={"sm"} text={props.description} />{" "}
    </Card>
  );
};
