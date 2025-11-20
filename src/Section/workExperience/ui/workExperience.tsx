import { Locale } from "@/dictionaries/dictionaries";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { workInfo } from "../utilities/workInfo";
import { WorkCard } from "./workCard";

type Props = {
  lang: Locale;
};
export const WorkExperience: React.FC<Props> = async (props: Props) => {
  return (
    <div className="gap-8 flex flex-col py-6">
      {workInfo
        .sort((a, b) => b.from.getTime() - a.from.getTime())
        .map((work) => (
          <CustomAnimation
            type="slideUpFadeIn"
            delay={0.2}
            duration={1}
            key={work.companyName}
          >
            <WorkCard workInfo={work} lang={props.lang} />
          </CustomAnimation>
        ))}
    </div>
  );
};
