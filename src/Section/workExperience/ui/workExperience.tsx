import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { workInfo } from "../utilities/workInfo";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import { TagBadge } from "@/Section/shared/ui/tagBadge";

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
    <div className="relative mx-28 py-4">
      <div className="border-l-2  border-primary gap-4 flex flex-col py-6">
        {workInfo
          .sort((a, b) => b.from.getTime() - a.from.getTime())
          .map((work) => (
            <Card className="ml-8" key={work.companyName}>
              <div className="flex md:flex-row flex-col gap-4">
                <div>
                  <Image
                    alt={`${work.companyName} Logo`}
                    src={work.logo}
                    className="p-4 border-2 border-input"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <Typography
                    type={"h3"}
                    text={work.langInfo[props.lang].tittleName}
                  />
                  <a
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      type={"h4"}
                      className={"text-primary hover:underline font-medium"}
                      text={work.companyName}
                    />
                  </a>

                  <div className="flex flex-row gap-1 items-center">
                    <Icons iconType={"calendar"} size={"sm"} />
                    <Typography
                      type={"md"}
                      text={`${getDate(work.from)} - ${getDate(work.to)}`}
                    />
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <Icons iconType={"location"} size={"sm"} />
                    <Typography
                      type={"md"}
                      text={work.langInfo[props.lang].location}
                    />
                  </div>
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
                <div className="gap-4 flex flex-col">
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
          ))}
      </div>
    </div>
  );
};
