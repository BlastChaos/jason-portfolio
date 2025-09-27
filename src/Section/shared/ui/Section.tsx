import { PropsWithChildren } from "react";
import { Header } from "./header";

type Props = {
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
      <div className={"container mx-auto px-8 lg:px-12 flex flex-col py-8"}>
        {props.header && (
          <div className="flex justify-center pb-16">
            <Header
              sectionName={props.header.titleName}
              quote={props.header.quote}
            />
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
};
