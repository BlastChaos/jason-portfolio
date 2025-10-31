import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";
import { InfoCard } from "./InfoCard";
import { cn } from "@/utilities/utils";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
type Props = {
  lang: Locale;
};

export const AboutMe: React.FC<Props> = async (props: Props) => {
  const { aboutMe } = await getDictionary(props.lang);

  return (
    <div className="flex flex-col">
      <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-4">
        <div className="flex relative w-full h-full justify-center items-center">
          <CustomAnimation type="slideLeftFadeIn" delay={0.8} duration={1}>
            <Icons
              iconType={"meThinking"}
              size={"full"}
              className={cn(
                "transition-transform duration-300 hover:scale-105 rounded-4xl border-primary border-8",
                "object-contain w-full max-w-xs",
                "rounded-4xl"
              )}
            />
          </CustomAnimation>
        </div>

        <div className="flex flex-col gap-2 col-span-2">
          <CustomAnimation
            type="slideUpFadeIn"
            delay={1}
            duration={1}
            className="flex flex-row gap-1"
          >
            <Icons iconType={"document"} size={"md"} />
            <Typography type={"h3"} text={aboutMe.bio} />
          </CustomAnimation>
          <CustomAnimation type={"slideUpFadeIn"} delay={1} duration={1}>
            <Typography type={"lg"} text={aboutMe.bioDescription1} />
          </CustomAnimation>
          <CustomAnimation type={"slideUpFadeIn"} delay={1} duration={1}>
            <Typography type={"lg"} text={aboutMe.bioDescription2} />
          </CustomAnimation>
          <CustomAnimation type={"slideUpFadeIn"} delay={1} duration={1}>
            <Typography type={"lg"} text={aboutMe.bioDescription3} />
          </CustomAnimation>
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4 pt-2">
            <CustomAnimation type={"slideRightFadeIn"} delay={1} duration={1}>
              <InfoCard
                icon={"idea"}
                title={aboutMe.hobby3Tittle}
                description={aboutMe.hobby3Description}
              />
            </CustomAnimation>
            <CustomAnimation type={"slideRightFadeIn"} delay={1.2} duration={1}>
              <InfoCard
                icon={"controller"}
                title={aboutMe.hobby1Tittle}
                description={aboutMe.hobby1Description}
              />
            </CustomAnimation>
            <CustomAnimation type={"slideRightFadeIn"} delay={1.4} duration={1}>
              <InfoCard
                icon={"music"}
                title={aboutMe.hobby2Tittle}
                description={aboutMe.hobby2Description}
              />
            </CustomAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
