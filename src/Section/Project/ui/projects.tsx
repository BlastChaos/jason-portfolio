import { Card } from "@/components/ui/card";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import Image from "next/image";
import { projectsInfo, ProjectType } from "../utilities/projectsInfo";
import { Typography } from "@/components/ui/typography";
import { TagBadge } from "../../shared/ui/tagBadge";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { Icons, IconsType } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Props = {
  lang: Locale;
};
export const Projects: React.FC<Props> = async (props: Props) => {
  const projectsToSee = projectsInfo.slice(0, 3);
  const { projects: projectsDict } = await getDictionary(props.lang);
  const projectTypesName: Record<
    ProjectType,
    { name: string; icon: IconsType }
  > = {
    school: {
      name: projectsDict.school,
      icon: "graduationHat",
    },
    work: {
      name: projectsDict.work,
      icon: "suitcase",
    },
    personnal: {
      name: projectsDict.personnal,
      icon: "folder",
    },
  };
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
      {projectsToSee.map((project, index) => (
        <CustomAnimation
          type="slideRightFadeIn"
          delay={index * 0.2}
          duration={1}
          key={project.slug}
        >
          <Card className="pt-0 px-0 gap-2 group h-full" removeHoverEffect>
            <div
              style={{
                backgroundColor: project.bgColor,
              }}
              className={`h-60 w-full rounded-t-xl relative overflow-hidden`}
            >
              {project.projectLink || project.githubLink ? (
                <Link
                  href={project.projectLink ?? project.githubLink ?? "#"}
                  target="_blank"
                >
                  <Image
                    src={project.icons[0]}
                    fill
                    alt={`${project.slug} icon`}
                    style={{
                      objectFit: "contain",
                    }}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              ) : (
                <Image
                  src={project.icons[0]}
                  fill
                  alt={`${project.slug} icon`}
                  style={{
                    objectFit: "contain",
                  }}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <div className="px-4 flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <Typography
                    type={"h4"}
                    text={project.localizationInfo[props.lang].tittle}
                  />
                  {project.projectLink && (
                    <Link href={project.projectLink} target="_blank">
                      <Icons iconType="link" size={"sm"} />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank">
                      <Icons iconType="github" size={"sm"} />
                    </Link>
                  )}
                </div>
                <Typography
                  type={"sm"}
                  text={project.localizationInfo[props.lang].shortDescription}
                />
                <div className="flex flex-row flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <TagBadge tag={tag} key={`${project.slug}-${tag}`} />
                  ))}
                  {/* TODO: Add a button to show more tags */}
                  {/* {project.tags.length > 5 && (
                  <Card className="p-2">{`+${project.tags.length - 5}`}</Card>
                )} */}
                </div>
              </div>
              <Separator />
              <div className="flex flex-1">
                {project.type === "work" && (
                  <div className="w-fit p-1.5 flex flex-row items-center gap-2 text-muted-foreground">
                    <Icons
                      iconType={projectTypesName[project.type].icon}
                      size={"sm"}
                    />
                    <Typography
                      type={"sm"}
                      text={`${projectTypesName[project.type].name} ${
                        project.typeName
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          </Card>
        </CustomAnimation>
      ))}
    </div>
  );
};
