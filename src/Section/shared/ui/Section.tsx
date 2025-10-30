"use client";

import { PropsWithChildren, useRef } from "react";
import { Typography } from "@/components/ui/typography";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";

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
  const sectionRef = useRef<HTMLElement>(null);

  const isIntersecting = useIntersectionObserver(sectionRef);
  return (
    <div
      className={
        props.useSecondaryBgColor ? "bg-secondary-background" : undefined
      }
    >
      <section
        ref={sectionRef}
        id={props.id}
        className={"container mx-auto px-8 lg:px-12 flex flex-col py-16"}
      >
        {props.header && (
          <div
            className={`flex justify-center items-center flex-col text-center gap-2 pb-16 transition-all duration-700`}
          >
            <Typography
              type={"h2"}
              text={props.header.titleName}
              className={
                isIntersecting
                  ? "animate-[slideUpFadeIn_0.8s_ease-out_0.2s_both]"
                  : "invisible"
              }
            />
            <Typography
              type={"lg"}
              text={`“${props.header.quote}”`}
              className={
                isIntersecting
                  ? "animate-[slideUpFadeIn_0.8s_ease-out_0.4s_both]"
                  : "invisible"
              }
            />
          </div>
        )}
        {props.children}
      </section>
    </div>
  );
};
