import { Locale } from "@/dictionaries/dictionaries";
import { projectsInfo } from "../utilities/projectsInfo";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import { ProjectCard } from "./ProjectCard";

type Props = {
  lang: Locale;
};
export const Projects: React.FC<Props> = async (props: Props) => {
  const projectsToSee = projectsInfo.slice(0, 5);
  const firstThree = projectsToSee.slice(0, 3);
  const firstFour = projectsToSee.slice(0, 4);
  const lastTwo = projectsToSee.slice(3, 5);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:hidden gap-4">
        {firstFour.map((project, index) => (
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

      <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
        {projectsToSee.map((project, index) => (
          <CustomAnimation
            type="slideRightFadeIn"
            delay={index * 0.2}
            duration={1}
            key={project.slug}
            className={
              index === projectsToSee.length - 1
                ? "md:col-span-2 md:max-w-md md:mx-auto"
                : ""
            }
          >
            <ProjectCard project={project} lang={props.lang} />
          </CustomAnimation>
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-col gap-4">
        <div className="grid lg:grid-cols-3 gap-4">
          {firstThree.map((project) => {
            const index = projectsToSee.findIndex(
              (p) => p.slug === project.slug
            );
            return (
              <CustomAnimation
                type="slideRightFadeIn"
                delay={index * 0.2}
                duration={1}
                key={project.slug}
              >
                <ProjectCard project={project} lang={props.lang} />
              </CustomAnimation>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {lastTwo.map((project, relativeIndex) => {
            const index = projectsToSee.findIndex(
              (p) => p.slug === project.slug
            );
            return (
              <CustomAnimation
                type="slideRightFadeIn"
                delay={index * 0.2}
                duration={1}
                key={project.slug}
                className={
                  relativeIndex === 0 ? "lg:col-start-1" : "lg:col-start-2"
                }
              >
                <ProjectCard project={project} lang={props.lang} />
              </CustomAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
};
