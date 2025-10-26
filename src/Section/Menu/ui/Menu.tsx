import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { DownloadResume } from "./DownloadResume";
import { SectionType } from "@/app/[lang]/page";
import { MenuSections } from "./MenuSections";

type Props = {
  lang: Locale;
  sections: SectionType[];
};
export const Menu: React.FC<Props> = async (props: Props) => {
  const { menu } = await getDictionary(props.lang);

  return (
    <div className="hidden sticky md:flex top-0 z-10">
      <Card className="flex flex-row h-14 gap-4 w-full">
        <div className="container mx-auto px-8 lg:px-12 flex flex-row items-center">
          <Typography
            text="＜JasonBrutus /＞"
            type="h3"
            className={"cursor-default"}
          />
          <div className="ml-auto flex  flex-row items-center gap-5 p-4">
            <MenuSections sections={props.sections} />

            <DownloadResume lang={props.lang} resumeText={menu.resume} />
          </div>
        </div>
      </Card>
    </div>
  );
};
