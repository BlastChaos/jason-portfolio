import { Card } from "@/components/ui/card";
import { Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { Skill } from "../utilities/skillsInfo";
import { proficency } from "../utilities/proficency";
import { Icons } from "@/components/ui/icons";

type Props = {
  skill: Skill;
  lang: Locale;
};

export const SkillCard: React.FC<Props> = (props: Props) => {
  const color = proficency[props.skill.proficiency].color;

  return (
    <Card
      animationType="scale"
      className="flex flex-row items-center gap-3 p-3.5 border border-border/50 hover:shadow-md transition-all duration-300 bg-card"
    >
      <div
        className="p-2 rounded-md shrink-0 flex items-center justify-center"
        style={{
          backgroundColor: `color-mix(in oklab, ${color} 15%, transparent)`,
          color: color,
        }}
      >
        <Icons iconType={"code"} size={"sm"} />
      </div>
      <div className="flex flex-col min-w-0">
        <Typography
          type={"md"}
          text={props.skill.name[props.lang]}
          className="font-semibold truncate leading-tight"
        />
      </div>
    </Card>
  );
};
