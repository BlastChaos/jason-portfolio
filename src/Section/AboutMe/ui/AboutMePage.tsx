import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";
import { AboutMe } from "./AboutMe";
type Props = {
  lang: Locale;
};

export const AboutMePage: React.FC<Props> = async (props: Props) => {
  const { aboutMe } = await getDictionary(props.lang);
  return (
    <AboutMe
      lang={props.lang}
      bio={aboutMe.bio}
      bioDescription1={aboutMe.bioDescription1}
      bioDescription2={aboutMe.bioDescription2}
      bioDescription3={aboutMe.bioDescription3}
      hobby3Tittle={aboutMe.hobby3Tittle}
      hobby3Description={aboutMe.hobby3Description}
      hobby1Tittle={aboutMe.hobby1Tittle}
      hobby1Description={aboutMe.hobby1Description}
      hobby2Tittle={aboutMe.hobby2Tittle}
      hobby2Description={aboutMe.hobby2Description}
    />
  );
};
