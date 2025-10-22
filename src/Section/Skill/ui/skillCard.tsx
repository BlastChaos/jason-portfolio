import { Card } from "@/components/ui/card";
import { Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { proficency } from "../utilities/proficency";
import { Skill } from "../utilities/softSkillsInfo";
type Props = {
  skill: Skill;
  lang: Locale;
};

export const SkillCard: React.FC<Props> = (props: Props) => {
  return (
    <Card
      style={{
        backgroundColor: proficency[props.skill.proficiency].color,
      }}
      className="flex flex-row gap-2 items-center justify-center p-3"
    >
      <Typography type={"md"} text={props.skill.name[props.lang]} />
    </Card>
  );
};
