import { Header } from "@/components/ui/header";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import React from "react";
type Props = {
  lang: Locale;
};
export const AboutMe: React.FC<Props> = async (props: Props) => {
  const { aboutMe } = await getDictionary(props.lang);

  return (
    <div className="flex flex-row bg-se">
      <div className="flex justify-center">
        <Header sectionName={aboutMe.sectionName} quote={aboutMe.quote} />
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};
