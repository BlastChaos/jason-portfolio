import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { InfoTooltip } from "./InfoTooltip";
import { proficency, Proficency } from "../utilities/proficency";

type Props = {
  lang: Locale;
};
export const SkillType: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);
  const proficencyInfo: Record<
    Proficency,
    { name: string; description: string; color: string }
  > = {
    proficient: {
      name: skill.proficient,
      description: skill.proficientDescription,
      color: proficency.proficient.color,
    },
    intermediate: {
      name: skill.intermediate,
      description: skill.intermediateDescription,
      color: proficency.intermediate.color,
    },
    familiar: {
      name: skill.familiar,
      description: skill.familiarDescription,
      color: proficency.familiar.color,
    },
    learning: {
      name: skill.learning,
      description: skill.learningDescription,
      color: proficency.learning.color,
    },
  };

  return (
    <div className="relative flex md:flex-row flex-col gap-4">
      <div className="md:hidden flex justify-center">
        <InfoTooltip info={Object.values(proficencyInfo)} />
      </div>
      {Object.entries(proficencyInfo).map(([key, value]) => (
        <div key={key} className="flex flex-row gap-1 items-center">
          <div
            className={`rounded-full w-5 h-5`}
            style={{
              backgroundColor: value.color,
            }}
          />
          <Typography type={"md"} text={value.name} />
        </div>
      ))}
      <div className="md:flex hidden items-center">
        <InfoTooltip info={Object.values(proficencyInfo)} />
      </div>
    </div>
  );
};
