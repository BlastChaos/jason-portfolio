import { Locale } from "@/dictionaries/dictionaries";
import { projectsInfo } from "../utilities/projectsInfo";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { ProjectCard } from "./ProjectCard";

type Props = {
  lang: Locale;
};
export const Projects: React.FC<Props> = async (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsInfo.map((project, index) => (
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
