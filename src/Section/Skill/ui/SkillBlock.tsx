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
    <Card animationType="none">
      <div className="flex flex-row gap-2 items-center">
        <Icons iconType={"computer"} size={"lg"} />
        <Typography type={"h3"} text={props.title} />
      </div>
      <div className="grid grid-cols-2 gap-8">
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
