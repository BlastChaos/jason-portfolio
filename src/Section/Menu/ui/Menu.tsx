import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Section } from "./Section";
import { Typography } from "@/components/ui/typography";
import { TextIconButton } from "@/components/ui/button";

type Props = {
  lang: Locale;
};
export const Menu: React.FC<Props> = async (props: Props) => {
  const { menu } = await getDictionary(props.lang);
  return (
    <div className="hidden sticky md:flex top-0 z-10">
      <Card className="flex flex-row h-14 gap-4 w-full">
        <div className="container mx-auto px-8 lg:px-12 flex flex-row items-center">
          <Typography text="＜JasonBrutus /＞" type="h3" />
          <div className="ml-auto flex  flex-row items-center gap-5 p-4">
            <Section name={menu.home} section={"home"} inSection={false} />
            <Section name={menu.about} section={"about"} inSection={false} />
            <Section
              name={menu.projects}
              section={"projects"}
              inSection={false}
            />
            <Section name={menu.work} section={"work"} inSection={false} />
            <Section
              name={menu.contact}
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
