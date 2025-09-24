import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Section } from "./Section";
import { Typography } from "@/components/ui/typography";
import { TextIconButton } from "@/components/ui/button";

type Props = {
  lang: Locale;
};
export const Header: React.FC<Props> = async (props: Props) => {
  const { header } = await getDictionary(props.lang);
  return (
    <div>
      <Card className="hidden sticky top-0 md:flex flex-row h-14 gap-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-row items-center">
          <Typography text="＜JasonBrutus /＞" type="h3" />
          <div className="ml-auto flex  flex-row items-center gap-5  p-4">
            <Section name={header.about} section={"about"} inSection={false} />
            <Section
              name={header.projects}
              section={"projects"}
              inSection={false}
            />
            <Section name={header.work} section={"work"} inSection={false} />
            <Section
              name={header.contact}
              section={"contact"}
              inSection={false}
            />
            <TextIconButton text="Resume" variant={"secondary"} icon="avatar" />
          </div>
        </div>
      </Card>
    </div>
  );
};
