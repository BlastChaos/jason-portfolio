import { Icons, IconsType } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  icon: IconsType;
};

export const MenuSection: React.FC<Props> = (props: Props) => {
  return (
    <Link href={`/#${props.id}`} key={props.id}>
      <div className="group relative flex flex-row gap-2 items-center">
        <Icons iconType={props.icon} size="sm" />
        <Typography text={props.name} type="sm" />
      </div>
    </Link>
  );
};
