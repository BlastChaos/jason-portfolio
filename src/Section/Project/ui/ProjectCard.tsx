import { Card } from "@/components/ui/card";
import { IconsType, Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { Locale, getDictionary } from "@/dictionaries/dictionaries";
import { TagBadge } from "@/Section/shared/ui/tagBadge";

import Link from "next/link";
import Image from "next/image";
import { ProjectInfo, ProjectType } from "../utilities/projectsInfo";
import { cn } from "@/utilities/utils";

export const ProjectCard = async (props: {
  project: ProjectInfo;
  lang: Locale;
}) => {
  const project = props.project;
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
    personal: {
      name: projectsDict.personnal,
      icon: "folder",
    },
  };

  const typeInfo = projectTypesName[project.type];

  const mainLink = project.projectLink ?? project.githubLink;

  return (
    <Card
      className="group flex flex-col h-full overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
      animationType="none"
    >
      <div
        style={{
          backgroundColor: project.bgColor,
        }}
        className="relative h-52 w-full shrink-0 overflow-hidden"
      >
        {/* Type Badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm border border-border/20">
            <Icons iconType={typeInfo.icon} size="sm" className="w-3 h-3" />
            <span>{typeInfo.name}</span>
          </div>
        </div>

        {mainLink ? (
          <Link href={mainLink} target="_blank" className="block h-full w-full">
            <Image
              src={project.icons[0]}
              fill
              alt={`${
                project.localizationInfo[props.lang].tittle
              } project preview`}
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ) : (
          <Image
            src={project.icons[0]}
            fill
            alt={`${
              project.localizationInfo[props.lang].tittle
            } project preview`}
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header: Title & Links */}
        <div className="flex flex-row justify-between items-start gap-2">
          <div className="flex flex-col gap-1">
            {mainLink ? (
              <Link href={mainLink} target="_blank" className="w-fit">
                <Typography
                  type="h4"
                  text={project.localizationInfo[props.lang].tittle}
                  className={cn(
                    "font-bold leading-tight transition-colors",
                    "group-hover:text-primary"
                  )}
                />
              </Link>
            ) : (
              <Typography
                type="h4"
                text={project.localizationInfo[props.lang].tittle}
                className="font-bold leading-tight"
              />
            )}

            {project.type === "work" && (
              <span className="text-sm text-muted-foreground font-medium">
                {project.companyName}
              </span>
            )}
          </div>

          <div className="flex flex-row gap-2 shrink-0">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors bg-secondary-background p-2 rounded-md hover:bg-secondary-background/80"
              >
                <Icons iconType="github" size="sm" />
              </Link>
            )}
            {project.projectLink && (
              <Link
                href={project.projectLink}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors bg-secondary-background p-2 rounded-md hover:bg-secondary-background/80"
              >
                <Icons iconType="link" size="sm" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <Typography
          type="sm"
          text={project.localizationInfo[props.lang].shortDescription}
          className="text-muted-foreground line-clamp-3"
        />

        {/* Footer: Tags */}
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <TagBadge tag={tag} key={`${project.slug}-${tag}`} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
