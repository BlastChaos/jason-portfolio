import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import { TagBadge } from "@/Section/shared/ui/tagBadge";
import { workInfo } from "../utilities/workInfo";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import Link from "next/link";

type Props = {
  lang: Locale;
};
export const WorkExperience: React.FC<Props> = async (props: Props) => {
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
    <div className="gap-4 flex flex-col py-6">
      {workInfo
        .sort((a, b) => b.from.getTime() - a.from.getTime())
        .map((work) => (
          <CustomAnimation
            type="slideUpFadeIn"
            delay={0.2}
            duration={1}
            key={work.companyName}
          >
            <Card animationType="top" key={work.companyName}>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    alt={`${work.companyName} company logo`}
                    src={work.logo}
                    width={70}
                    height={70}
                    className="object-contain p-4"
                  />

                  <div className="flex flex-1 flex-col">
                    <Typography
                      type={"h3"}
                      text={work.langInfo[props.lang].tittleName}
                    />
                    <Link
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography
                        type={"h4"}
                        className={"text-primary hover:underline font-medium"}
                        text={work.companyName}
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <Icons iconType={"calendar"} size={"sm"} />
                  <Typography
                    type={"sm"}
                    text={`${getDate(work.from)} - ${getDate(work.to)}`}
                  />
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <Icons iconType={"location"} size={"sm"} />
                  <Typography
                    type={"sm"}
                    text={work.langInfo[props.lang].location}
                  />
                </div>
              </div>

              <Typography
                type={"md"}
                text={work.langInfo[props.lang].shortDescription}
              />
              <div className="gap-2 flex flex-col">
                <div className="flex flex-row items-center gap-1">
                  <Typography
                    type={"h5"}
                    text={`${workExperience.keyAchievements}`}
                  />
                </div>
                <div className="gap-3 flex flex-col">
                  {work.langInfo[props.lang].tasks.map((info, index) => (
                    <Typography
                      key={`${work.companyName}-task-${index}`}
                      type={"md"}
                      text={`● ${info}`}
                    />
                  ))}
                </div>
              </div>
              <div className="gap-2 flex flex-col">
                <div className="flex flex-row items-center gap-1">
                  <Typography
                    type={"h5"}
                    text={`${workExperience.techStack}`}
                  />
                </div>
                <div className="gap-2 flex flex-row flex-wrap">
                  {work.techStack.map((info) => (
                    <TagBadge
                      tag={info}
                      key={`${work.companyName}-tag-${info}`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </CustomAnimation>
        ))}
    </div>
  );
};
