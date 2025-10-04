import { Card } from "@/components/ui/card";
import { Locale } from "@/dictionaries/dictionaries";
import Image from "next/image";
import { projectsInfo } from "../utilities/projectsInfo";
import { Typography } from "@/components/ui/typography";
import { TagBadge } from "../../shared/ui/tagBadge";

type Props = {
  lang: Locale;
};
export const Projects: React.FC<Props> = (props: Props) => {
  const projectsToSee = projectsInfo.slice(0, 3);
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
      {projectsToSee.map((project) => (
        <Card key={project.slug} className="pt-0 px-0 gap-2 group">
          <div
            style={{
              backgroundColor: project.bgColor,
            }}
            className={`h-60 w-full rounded-t-xl relative overflow-hidden`}
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
          </div>

          <div className="px-4">
            <Typography
              type={"h4"}
              text={project.localizationInfo[props.lang].tittle}
            />
            <Typography
              type={"sm"}
              text={project.localizationInfo[props.lang].shortDescription}
            />
            <div className="flex flex-row flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <TagBadge tag={tag} key={`${project.slug}-${tag}`} />
              ))}
              {project.tags.length > 5 && (
                <Card className="p-2">{`+${project.tags.length - 5}`}</Card>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
