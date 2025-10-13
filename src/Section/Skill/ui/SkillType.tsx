import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { InfoTooltip } from "./InfoTooltip";

type Props = {
  lang: Locale;
};
export const SkillType: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);
  const type = {
    proficient: {
      name: skill.proficient,
      color: "var(--skill-proficient)",
      description: skill.proficientDescription,
    },
    intermediate: {
      name: skill.intermediate,
      color: "var(--skill-intermediate)",
      description: skill.intermediateDescription,
    },
    familiar: {
      name: skill.familiar,
      color: "var(--skill-familiar)",
      description: skill.familiarDescription,
    },
    learning: {
      name: skill.learning,
      color: "var(--skill-learning)",
      description: skill.learningDescription,
    },
  };
  return (
    <div className="relative flex md:flex-row flex-col gap-4">
      <div className="md:hidden flex justify-center">
        <InfoTooltip info={Object.values(type)} />
      </div>
      {Object.entries(type).map(([key, value]) => (
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
        <InfoTooltip info={Object.values(type)} />
      </div>
    </div>
  );
};
