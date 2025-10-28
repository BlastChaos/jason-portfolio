import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { DownloadResume } from "./DownloadResume";
import { SectionType } from "@/app/[lang]/page";
import { MenuSections } from "./MenuSections";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdownMenu";
import { DropdownMenuTrigger } from "@/components/ui/dropdownMenu";
import { IconButton } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

type Props = {
  lang: Locale;
  sections: SectionType[];
};
export const Menu: React.FC<Props> = async (props: Props) => {
  const { menu } = await getDictionary(props.lang);

  return (
    <div className="sticky md:flex top-0 z-10">
      <Card className="flex flex-row h-14 gap-4 w-full">
        <div className="container mx-auto md:px-8 px-2 lg:px-12 flex flex-row items-center">
          <Typography
            text="＜JasonBrutus /＞"
            type="h3"
            className={"cursor-default whitespace-nowrap"}
          />
          <div className="ml-auto   flex-row items-center gap-5 p-4 hidden lg:flex">
            <MenuSections sections={props.sections} />

            <DownloadResume lang={props.lang} resumeText={menu.resume} />
          </div>
          <div className="flex lg:hidden ml-auto ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton icon={"hamburger"} variant={"ghost"} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-dvh ">
                {props.sections.map((section) => (
                  <DropdownMenuItem key={section.id} asChild>
                    <Link
                      href={`/#${section.id}`}
                      key={section.id}
                      className="flex-1"
                    >
                      <div className="group relative flex flex-row gap-2 items-center">
                        <Icons iconType={section.icon} size="md" />
                        <Typography text={section.menuName} type="md" />
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <DownloadResume lang={props.lang} resumeText={menu.resume} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>
    </div>
  );
};
