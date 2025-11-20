import { Icons } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import Image from "next/image";
import { EducationInfo } from "../utilities/educationInfos";

type Props = {
  educationInfo: EducationInfo;
  lang: Locale;
};

export const EducationCard: React.FC<Props> = async (props: Props) => {
  const { education } = await getDictionary(props.lang);
  const getDate = (date?: Date) => {
    if (!date) {
      return education.present;
    }

    return new Intl.DateTimeFormat(props.lang, {
      month: "short",
      year: "numeric",
    }).format(date);
  };
  return (
    <Card
      animationType="top"
      className="h-full border-l-4 border-l-primary p-6 flex flex-col gap-6"
    >
      <div className="flex flex-row items-center gap-4">
        <div className="bg-muted rounded-xl p-3 flex items-center justify-center shadow-sm border border-border/50 h-20 w-20 shrink-0">
          <Image
            alt={`${props.educationInfo.schoolName} school logo`}
            src={props.educationInfo.logo}
            className="object-contain w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Typography
            type={"h4"}
            text={props.educationInfo.langInfo[props.lang].tittleName}
            className="font-bold leading-tight"
          />
          <a
            href={props.educationInfo.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography
              type={"md"}
              className={"text-primary hover:underline font-medium"}
              text={props.educationInfo.schoolName}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-muted-foreground border-y border-border/50 py-3">
        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
          <div className="flex flex-row gap-2 items-center bg-secondary-background px-3 py-1 rounded-full border border-border/50">
            <Icons iconType={"calendar"} size={"sm"} className="text-primary" />
            <Typography
              type={"sm"}
              className="font-medium"
              text={`${getDate(props.educationInfo.from)} - ${getDate(
                props.educationInfo.to
              )}`}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Icons iconType={"location"} size={"sm"} />
            <Typography
              type={"sm"}
              text={props.educationInfo.langInfo[props.lang].location}
            />
          </div>
        </div>
        {props.educationInfo.gpa && (
          <div className="flex flex-row gap-2 items-center px-1">
            <Icons iconType={"graduationHat"} size={"sm"} />
            <Typography
              type={"sm"}
              text={`GPA: ${props.educationInfo.gpa.currentNumber} / ${props.educationInfo.gpa.maxNumber}`}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <Typography
          type={"md"}
          className="italic text-muted-foreground"
          text={props.educationInfo.langInfo[props.lang].shortDescription}
        />

        <div className="mt-auto pt-4">
          <div className="gap-3 flex flex-col bg-secondary-background/30 p-4 rounded-lg border border-border/50 h-full">
            <div className="flex flex-row items-center gap-2 mb-1">
              <div className="h-4 w-1 bg-primary rounded-full"></div>
              <Typography
                type={"h5"}
                text={`${education.keyCourses}`}
                className="text-sm uppercase tracking-wide"
              />
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {props.educationInfo.langInfo[props.lang].keyCourses.map(
                (info, index) => (
                  <div
                    key={`${props.educationInfo.schoolName}-task-${index}`}
                    className="bg-background px-2.5 py-1 rounded-md border border-border/50 shadow-sm"
                  >
                    <Typography
                      type={"sm"}
                      text={`${info}`}
                      className="text-xs font-medium"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
