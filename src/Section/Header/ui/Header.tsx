import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Section } from "./Section";

type Props = {
  lang: Locale;
};
export const Header: React.FC<Props> = async (props: Props) => {
  const { header } = await getDictionary(props.lang);
  return (
    <div>
      <Card className="hidden sticky top-0 md:flex flex-row h-14 items-center p-4 ">
        <h4>{"＜JasonBrutus /＞"}</h4>
        <Section name={header.about} section={"about"} inSection={false} />
        <Section
          name={header.projects}
          section={"projects"}
          inSection={false}
        />
        <Section name={header.work} section={"work"} inSection={false} />
        <Section name={header.contact} section={"contact"} inSection={false} />
      </Card>
    </div>
  );
};
