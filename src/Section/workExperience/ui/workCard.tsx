import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { WorkInfo } from "../utilities/workInfo";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { TagBadge } from "@/Section/shared/ui/tagBadge";
import Link from "next/link";
import Image from "next/image";

type Props = {
  workInfo: WorkInfo;
  lang: Locale;
};

export const WorkCard: React.FC<Props> = async (props: Props) => {
  const { workExperience } = await getDictionary(props.lang);

  const getDate = (date?: Date) => {
    if (!date) {
      return workExperience.present;
    }

    return new Intl.DateTimeFormat(props.lang, {
      month: "short",
      year: "numeric",
    }).format(date);
  };
  return (
    <Card
      animationType="top"
      key={props.workInfo.companyName}
      className="border-l-4 border-l-primary p-6 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-muted rounded-xl p-3 flex items-center justify-center shadow-sm border border-border/50">
            <Image
              alt={`${props.workInfo.companyName} company logo`}
              src={props.workInfo.logo}
              width={60}
              height={60}
              className="object-contain h-12 w-12"
            />
          </div>

          <div className="flex flex-col">
            <Typography
              type={"h3"}
              text={props.workInfo.langInfo[props.lang].tittleName}
              className="font-bold leading-tight"
            />
            <Link
              href={props.workInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Typography
                type={"h4"}
                className={"text-primary hover:underline font-medium"}
                text={props.workInfo.companyName}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground mt-2 md:mt-0">
          <div className="flex flex-row gap-2 items-center bg-secondary-background px-3 py-1 rounded-full border border-border/50">
            <Icons iconType={"calendar"} size={"sm"} className="text-primary" />
            <Typography
              type={"sm"}
              className="font-medium"
              text={`${getDate(props.workInfo.from)} - ${getDate(
                props.workInfo.to
              )}`}
            />
          </div>
          <div className="flex flex-row gap-1 items-center px-1">
            <Icons iconType={"location"} size={"sm"} />
            <Typography
              type={"sm"}
              text={props.workInfo.langInfo[props.lang].location}
            />
          </div>
        </div>
      </div>

      <div className="my-2 border-b border-border/50" />

      <div className="flex flex-col gap-4">
        <Typography
          type={"md"}
          className="italic text-muted-foreground"
          text={props.workInfo.langInfo[props.lang].shortDescription}
        />

        <div className="gap-2 flex flex-col bg-secondary-background/30 p-5 rounded-lg border border-border/50">
          <div className="flex flex-row items-center gap-2 mb-1">
            <div className="h-5 w-1 bg-primary rounded-full"></div>
            <Typography
              type={"h5"}
              text={`${workExperience.keyAchievements}`}
            />
          </div>
          <ul className="gap-2 flex flex-col ml-1">
            {props.workInfo.langInfo[props.lang].tasks.map((info, index) => (
              <li
                key={`${props.workInfo.companyName}-task-${index}`}
                className="flex items-start  gap-2"
              >
                <Typography
                  type={"sm"}
                  text={"●"}
                  className="text-primary mt-0.5"
                />
                <Typography
                  type={"md"}
                  text={info}
                  className="flex-1 leading-relaxed"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-3 flex flex-col mt-2">
          <Typography
            type={"h5"}
            className="text-muted-foreground text-sm uppercase tracking-wide font-semibold"
            text={`${workExperience.techStack}`}
          />
          <div className="gap-2 flex flex-row flex-wrap">
            {props.workInfo.techStack.map((info) => (
              <TagBadge tag={info} key={`${props.workInfo.companyName}-tag-${info}`} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
