import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";
import { InfoCard } from "./InfoCard";
type Props = {
  lang: Locale;
};
export const AboutMe: React.FC<Props> = async (props: Props) => {
  const { aboutMe } = await getDictionary(props.lang);

  return (
    <div className="flex flex-col">
      <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-2">
        <Icons
          iconType={"meThinking"}
          size={"5xl"}
          className="rounded-full transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col gap-2 col-span-2">
          <div className="flex flex-row gap-1">
            <Icons iconType={"document"} size={"md"} />
            <Typography type={"h3"} text={aboutMe.bio} />
          </div>
          <Typography type={"lg"} text={aboutMe.bioDescription1} />
          <Typography type={"lg"} text={aboutMe.bioDescription2} />
          <Typography type={"lg"} text={aboutMe.bioDescription3} />
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4 pt-2">
            <InfoCard
              icon={"idea"}
              title={aboutMe.hobby3Tittle}
              description={aboutMe.hobby3Description}
            />
            <InfoCard
              icon={"controller"}
              title={aboutMe.hobby1Tittle}
              description={aboutMe.hobby1Description}
            />
            <InfoCard
              icon={"music"}
              title={aboutMe.hobby2Tittle}
              description={aboutMe.hobby2Description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
