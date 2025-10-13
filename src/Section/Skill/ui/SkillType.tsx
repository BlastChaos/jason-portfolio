import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { cn } from "@/utilities/utils";

type Props = {
  lang: Locale;
};
export const SkillType: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);
  const type = {
    proficient: {
      name: skill.proficient,
      color: "proficient",
    },
    intermediate: {
      name: skill.intermediate,
      color: "intermediate",
    },
    familiar: {
      name: skill.familiar,
      color: "familiar",
    },
    learning: {
      name: skill.learning,
      color: "learning",
    },
  };
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {Object.entries(type).map(([key, value]) => (
        <div key={key} className="flex flex-row gap-1 items-center">
          <div className={cn(`rounded-full w-5 h-5 bg-${value.color}`)} />
          <Typography type={"md"} text={value.name} />
        </div>
      ))}
    </div>
  );
};
