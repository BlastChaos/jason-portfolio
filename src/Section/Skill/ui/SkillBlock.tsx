import { Card } from "@/components/ui/card";
import { IconsType, Icons } from "@/components/ui/icons";
import { Skill } from "../utilities/skillsInfo";
import { Typography } from "@/components/ui/typography";
import { SkillCard } from "./skillCard";
import { Locale } from "@/dictionaries/dictionaries";
import { Proficency } from "../utilities/proficency";

type Props = {
  title: string;
  skills: Skill[];
  icon: IconsType;
  lang: Locale;
};

export const SkillBlock: React.FC<Props> = (props: Props) => {
  const proficencyOrder: Record<Proficency, number> = {
    proficient: 0,
    intermediate: 1,
    familiar: 2,
    learning: 3,
  };
  const skills = props.skills.sort((a, b) => {
    const proficencyA = proficencyOrder[a.proficiency];
    const proficencyB = proficencyOrder[b.proficiency];
    if (proficencyA === proficencyB) {
      return a.name[props.lang].localeCompare(b.name[props.lang]);
    }
    return proficencyA - proficencyB;
  });
  return (
    <Card
      animationType="top"
      className="h-full space-y-6 border-l-4 border-l-primary p-6"
    >
      <div className="flex flex-row gap-4 items-center pb-4 border-b border-border/50 mb-2">
        <div className="rounded-xl bg-primary/10 p-3 flex items-center justify-center shadow-sm">
          <Icons iconType={props.icon} size={"lg"} className="text-primary" />
        </div>
        <Typography
          type={"h3"}
          text={props.title}
          className="font-bold text-2xl"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {skills.map((skill, index) => (
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
