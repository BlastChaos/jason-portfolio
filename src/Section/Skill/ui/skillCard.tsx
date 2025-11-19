import { Card } from "@/components/ui/card";
import { Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { Skill } from "../utilities/softSkillsInfo";
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
      className="flex flex-row items-center gap-2 p-3 border-2 rounded-lg"
      style={{
        borderColor: `color-mix(in oklab, ${color} 75%, transparent)`,
        backgroundColor: `color-mix(in oklab, ${color} 8%, transparent)`,
        color,
      }}
    >
      <Icons iconType={"code"} size={"md"} />
      <Typography
        type={"md"}
        text={props.skill.name[props.lang]}
        className="font-semibold"
      />
    </Card>
  );
};
