import { Card } from "@/components/ui/card";
import { IconsType, Icons } from "@/components/ui/icons";
import { Skill } from "../utilities/softSkillsInfo";
import { Typography } from "@/components/ui/typography";
import { SkillCard } from "./skillCard";
import { Locale } from "@/dictionaries/dictionaries";

type Props = {
  title: string;
  skills: Skill[];
  icon: IconsType;
  lang: Locale;
};

export const SkillBlock: React.FC<Props> = (props: Props) => {
  return (
    <Card animationType="top" className="h-full space-y-4">
      <div className="flex flex-row gap-3 items-center pb-1 border-b border-border/60 mb-2">
        <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
          <Icons iconType={props.icon} size={"lg"} />
        </div>
        <Typography type={"h3"} text={props.title} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {props.skills.map((skill, index) => (
          <SkillCard
            key={`${props.title}-${index}`}
            skill={skill}
            lang={props.lang}
          />
        ))}
      </div>
    </Card>
  );
};
