
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Skill } from "./Skill";

type Props = {
  lang: Locale;
};
export const SkillPage: React.FC<Props> = async (props: Props) => {
  const { skill } = await getDictionary(props.lang);

  return <Skill skillDictionary={skill} lang={props.lang} />;
};
