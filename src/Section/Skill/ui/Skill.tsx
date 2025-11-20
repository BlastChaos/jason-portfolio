import { SkillType } from "./SkillType";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";

import { skillsInfo } from "../utilities/skillsInfo";
import { SkillBlock } from "./SkillBlock";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";

type Props = {
  lang: Locale;
};

export const Skill: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <SkillType lang={props.lang} />
      </div>
      <div className="py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <CustomAnimation type="slideUpFadeIn" delay={0.1} duration={0.7}>
            <SkillBlock
              title={skill.softSkill.frontend}
              skills={skillsInfo.frontend}
              icon={"computer"}
              lang={props.lang}
            />
          </CustomAnimation>

          <CustomAnimation type="slideUpFadeIn" delay={0.2} duration={0.7}>
            <SkillBlock
              title={skill.softSkill.backendAndData}
              skills={skillsInfo.backendAndData}
              icon={"database"}
              lang={props.lang}
            />
          </CustomAnimation>

          <CustomAnimation type="slideUpFadeIn" delay={0.3} duration={0.7}>
            <SkillBlock
              title={skill.softSkill.devOpsAndTools}
              skills={skillsInfo.devOpsAndTools}
              icon={"gear"}
              lang={props.lang}
            />
          </CustomAnimation>

          <CustomAnimation type="slideUpFadeIn" delay={0.4} duration={0.7}>
            <SkillBlock
              title={skill.softSkill.softSkills}
              skills={skillsInfo.softSkills}
              icon={"idea"}
              lang={props.lang}
            />
          </CustomAnimation>
        </div>
      </div>
    </div>
  );
};
