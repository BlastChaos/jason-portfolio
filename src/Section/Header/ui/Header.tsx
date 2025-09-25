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
    <div className="hidden sticky md:flex top-0 z-10">
      <Card className="flex flex-row h-14 gap-4 w-full">
        <div className="container mx-auto px-8 lg:px-12 flex flex-row items-center">
          <Typography text="＜JasonBrutus /＞" type="h3" />
          <div className="ml-auto flex  flex-row items-center gap-5  p-4">
            <Section name={header.home} section={"home"} inSection={false} />
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
            <TextIconButton
              text="Resume"
              variant={"secondary"}
              icon="download"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
