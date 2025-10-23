import { SkillType } from "./SkillType";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";

import { softSkillsInfo } from "../utilities/softSkillsInfo";
import { SkillBlock } from "./SkillBlock";

type Props = {
  lang: Locale;
};

export const Skill: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <SkillType lang={props.lang} />
      </div>
      <div className="py-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-12 px-16">
          <SkillBlock
            title={skill.softSkill.frontendDevelopment}
            skills={softSkillsInfo.frontendDevelopment}
            icon={"computer"}
            lang={props.lang}
          />

          <SkillBlock
            title={skill.softSkill.backendDevelopment}
            skills={softSkillsInfo.backendDevelopment}
            icon={"database"}
            lang={props.lang}
          />

          <SkillBlock
            title={skill.softSkill.databaseDevelopment}
            skills={softSkillsInfo.databaseDevelopment}
            icon={"cloud"}
            lang={props.lang}
          />

          <SkillBlock
            title={skill.softSkill.cloudDevelopment}
            skills={softSkillsInfo.cloudDevelopment}
            icon={"cloud"}
            lang={props.lang}
          />
        </div>
      </div>
    </div>
  );
};
