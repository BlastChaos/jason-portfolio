import { PropsWithChildren } from "react";
import { Typography } from "@/components/ui/typography";

type Props = {
  id: string;
  header?: {
    titleName: string;
    quote: string;
  };
  useSecondaryBgColor?: boolean;
};
export const Section: React.FC<PropsWithChildren<Props>> = async (
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
        className={"container mx-auto px-8 lg:px-12 flex flex-col py-16"}
      >
        {props.header && (
          <div className="flex justify-center items-center flex-col text-center gap-2 pb-16">
            <Typography type={"h2"} text={props.header.titleName} />
            <Typography type={"lg"} text={`“${props.header.quote}”`} />
          </div>
        )}
        {props.children}
      </section>
    </div>
  );
};
