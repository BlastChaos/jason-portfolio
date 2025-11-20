import { Locale } from "@/dictionaries/dictionaries";
import { educationInfos } from "../utilities/educationInfos";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { EducationCard } from "./educationCard";

type Props = {
  lang: Locale;
};

export const Education: React.FC<Props> = async (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {educationInfos
        .sort((a, b) => b.from.getTime() - a.from.getTime())
        .map((educationInfo) => (
          <CustomAnimation
            type="slideUpFadeIn"
            delay={0.2}
            duration={1}
            key={educationInfo.schoolName}
          >
            <EducationCard educationInfo={educationInfo} lang={props.lang} />
          </CustomAnimation>
        ))}
    </div>
  );
};
