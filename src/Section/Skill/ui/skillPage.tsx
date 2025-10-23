import { Locale } from "@/dictionaries/dictionaries";
import { Skill } from "./Skill";

type Props = {
  lang: Locale;
};
export const SkillPage: React.FC<Props> = async (props: Props) => {
  return <Skill lang={props.lang} />;
};
