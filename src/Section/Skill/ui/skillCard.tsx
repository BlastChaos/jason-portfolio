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
  return (
    <Card
      className="flex flex-row gap-2 items-center  p-3 bg-proficient/10 border-2 border-proficient/80"
      style={{
        borderColor: `color-mix(in oklab, ${
          proficency[props.skill.proficiency].color
        } 80%, transparent)`,
        backgroundColor: `color-mix(in oklab, ${
          proficency[props.skill.proficiency].color
        } 10%, transparent)`,
        color: proficency[props.skill.proficiency].color,
      }}
    >
      <Icons iconType={"code"} size={"md"} />
      <Typography
        type={"md"}
        text={props.skill.name[props.lang]}
        className={`font-black`}
      />
    </Card>
  );
};
