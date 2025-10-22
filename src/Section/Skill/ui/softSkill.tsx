import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { DictionnaryProps, Locale } from "@/dictionaries/dictionaries";
import { softSkillsInfo } from "../utilities/softSkillsInfo";

import { SkillCard } from "./skillCard";
type Props = {
  lang: Locale;
  softSkillDictionary: DictionnaryProps["skill"]["softSkill"];
};
export const SoftSkill: React.FC<Props> = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-12">
      <Card>
        <div className="flex flex-row gap-2 items-center">
          <Icons iconType={"computer"} size={"lg"} />
          <Typography
            type={"h3"}
            text={props.softSkillDictionary.frontendDevelopment}
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {softSkillsInfo.frontendDevelopment.map((skill, index) => (
            <SkillCard
              key={`frontendDevelopment-${index}`}
              skill={skill}
              lang={props.lang}
            />
          ))}
        </div>
      </Card>
      <Card>
        <div className="flex flex-row gap-2 items-center">
          <Icons iconType={"database"} size={"lg"} />
          <Typography
            type={"h3"}
            text={props.softSkillDictionary.backendDevelopment}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {softSkillsInfo.backendDevelopment.map((skill, index) => (
            <SkillCard
              key={`backendDevelopment-${index}`}
              skill={skill}
              lang={props.lang}
            />
          ))}
        </div>
      </Card>
      <Card>
        <div className="flex flex-row gap-2 items-center">
          <Icons iconType={"cloud"} size={"lg"} />
          <Typography
            type={"h3"}
            text={props.softSkillDictionary.cloudDevelopment}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {softSkillsInfo.cloudDevelopment.map((skill, index) => (
            <SkillCard
              key={`cloudDevelopment-${index}`}
              skill={skill}
              lang={props.lang}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
