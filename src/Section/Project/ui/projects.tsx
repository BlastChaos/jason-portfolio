import { Locale } from "@/dictionaries/dictionaries";
import { projectsInfo } from "../utilities/projectsInfo";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { ProjectCard } from "./ProjectCard";

type Props = {
  lang: Locale;
};
export const Projects: React.FC<Props> = async (props: Props) => {
  const projectsToSee = projectsInfo.slice(0, 3);

  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
      {projectsToSee.map((project, index) => (
        <CustomAnimation
          type="slideRightFadeIn"
          delay={index * 0.2}
          duration={1}
          key={project.slug}
        >
          <ProjectCard project={project} lang={props.lang} />
        </CustomAnimation>
      ))}
    </div>
  );
};
