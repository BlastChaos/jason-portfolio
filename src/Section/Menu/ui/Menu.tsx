import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { MenuSection } from "./MenuSection";
import { Typography } from "@/components/ui/typography";
import { DownloadResume } from "./DownloadResume";

type Props = {
  lang: Locale;
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
            <MenuSection name={menu.home} section={"home"} inSection={false} />
            <MenuSection
              name={menu.about}
              section={"about"}
              inSection={false}
            />
            <MenuSection
              name={menu.projects}
              section={"projects"}
              inSection={false}
            />
            <MenuSection name={menu.work} section={"work"} inSection={false} />
            <MenuSection
              name={menu.contact}
              section={"contact"}
              inSection={false}
            />
            <DownloadResume lang={props.lang} resumeText={menu.resume} />
          </div>
        </div>
      </Card>
    </div>
  );
};
