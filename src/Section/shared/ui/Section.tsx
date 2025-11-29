import { PropsWithChildren } from "react";
import { Typography } from "@/components/ui/typography";
import { CustomAnimation } from "./CustomAnimation";

type Props = {
  id: string;
  header?: {
    titleName: string;
    quote: string;
  };
  useSecondaryBgColor?: boolean;
};

export const Section: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <div
      className={
        props.useSecondaryBgColor ? "bg-secondary-background" : undefined
      }
    >
      <section
        id={props.id}
        className={"container mx-auto px-8 lg:px-12 flex flex-col py-8"}
      >
        {props.header && (
          <div
            className={`flex justify-center items-center flex-col text-center gap-2 pb-16 transition-all duration-700`}
          >
            <CustomAnimation type="slideUpFadeIn" delay={0.2} duration={0.8}>
              <Typography type={"h2"} text={props.header.titleName} />
            </CustomAnimation>
            <CustomAnimation type="slideUpFadeIn" delay={0.4} duration={0.8}>
              <Typography type={"lg"} text={`“${props.header.quote}”`} />
            </CustomAnimation>
          </div>
        )}
        {props.children}
      </section>
    </div>
  );
};
