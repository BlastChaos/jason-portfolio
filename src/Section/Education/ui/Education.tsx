import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { educationInfos } from "../utilities/educationInfos";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";

type Props = {
  lang: Locale;
};

export const Education: React.FC<Props> = async (props: Props) => {
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
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {educationInfos
        .sort((a, b) => b.from.getTime() - a.from.getTime())
        .map((educationInfo) => (
          <CustomAnimation
            type="slideUpFadeIn"
            delay={0.2}
            duration={1}
            key={educationInfo.schoolName}
          >
            <Card animationType="top" className="h-full">
              <div className="flex md:flex-row flex-col gap-4 h-full">
                <div>
                  <Image
                    alt={`${educationInfo.schoolName} school logo`}
                    src={educationInfo.logo}
                    className="p-4 border-2 border-input"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-col">
                    <Typography
                      type={"h3"}
                      text={educationInfo.langInfo[props.lang].tittleName}
                    />
                    <a
                      href={educationInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography
                        type={"h4"}
                        className={"text-primary hover:underline font-medium"}
                        text={educationInfo.schoolName}
                      />
                    </a>

                    <div className="flex flex-row gap-1 items-center ">
                      <Icons iconType={"calendar"} size={"sm"} />
                      <Typography
                        type={"md"}
                        text={`${getDate(educationInfo.from)} - ${getDate(
                          educationInfo.to
                        )}`}
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                      <Icons iconType={"location"} size={"sm"} />
                      <Typography
                        type={"md"}
                        text={educationInfo.langInfo[props.lang].location}
                      />
                    </div>
                    {educationInfo.gpa && (
                      <div className="flex flex-row gap-1 items-center">
                        <Icons iconType={"graduationHat"} size={"sm"} />
                        <Typography
                          type={"md"}
                          text={`GPA: ${educationInfo.gpa.currentNumber} / ${educationInfo.gpa.maxNumber}`}
                        />
                      </div>
                    )}
                  </div>

                  <Typography
                    type={"md"}
                    text={educationInfo.langInfo[props.lang].shortDescription}
                  />
                  <div className="gap-2 flex flex-col mt-auto">
                    <div className="flex flex-row items-center gap-1">
                      <Typography type={"h5"} text={`${education.keyCourses}`} />
                    </div>
                    <div className="gap-2 flex flex-row flex-wrap">
                      {educationInfo.langInfo[props.lang].keyCourses.map(
                        (info, index) => (
                          <Card
                            key={`${educationInfo.schoolName}-task-${index}`}
                            className="p-2 gap-2 w-fit"
                          >
                            <Typography type={"sm"} text={`${info}`} />
                          </Card>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CustomAnimation>
        ))}
    </div>
  );
};
