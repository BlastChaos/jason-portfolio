import { Header } from "@/components/ui/header";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";
type Props = {
  lang: Locale;
};
export const AboutMe: React.FC<Props> = async (props: Props) => {
  const { aboutMe } = await getDictionary(props.lang);

  return (
    <div className="flex flex-col gap-16 py-8">
      <div className="flex justify-center">
        <Header sectionName={aboutMe.sectionName} quote={aboutMe.quote} />
      </div>
      <div className="flex flex-row items-center">
        <Icons iconType={"meThinking"} size={"5xl"} className="rounded-full " />
        <div className="flex flex-col">
          <div className="flex flex-row gap-1">
            <Icons iconType={"document"} size={"md"} />
            <Typography type={"h3"} text={aboutMe.bio} />
          </div>
        </div>
      </div>
    </div>
  );
};
