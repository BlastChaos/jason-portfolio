import { Card } from "@/components/ui/card";
import { Tag, tagsInfo } from "../utilities/tags";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";

type Props = {
  tag: Tag;
};
export const TagBadge: React.FC<Props> = (props: Props) => {
  const info = tagsInfo[props.tag];

  return (
    <Card animationType="scale" className="flex flex-row items-center gap-2 w-fit p-2">
      <Icons iconType={info.icon} size={"sm"} />
      <Typography type={"sm"} text={info.name} />
    </Card>
  );
};
