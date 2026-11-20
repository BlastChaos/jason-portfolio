import { Locale } from "@/dictionaries/dictionaries";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { work } from "@/content/work";
import { WorkCard } from "./workCard";

type Props = {
  lang: Locale;
};
export const WorkExperience: React.FC<Props> = async (props: Props) => {
  return (
    <div className="gap-8 flex flex-col py-6">
      {work.map((job) => (
        <CustomAnimation
          type="slideUpFadeIn"
          delay={0.2}
          duration={1}
          key={job.slug}
        >
          <WorkCard workInfo={job} lang={props.lang} />
        </CustomAnimation>
      ))}
    </div>
  );
};
