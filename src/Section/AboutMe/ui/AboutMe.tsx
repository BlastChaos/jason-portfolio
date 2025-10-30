"use client";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";
import { Locale } from "@/dictionaries/dictionaries";
import React, { useRef } from "react";
import { InfoCard } from "./InfoCard";
import { useIntersectionObserver } from "@/Section/shared/hook/useIntersectionObserver";
import { cn } from "@/utilities/utils";
type Props = {
  lang: Locale;
  bio: string;
  bioDescription1: string;
  bioDescription2: string;
  bioDescription3: string;
  hobby3Tittle: string;
  hobby3Description: string;
  hobby1Tittle: string;
  hobby1Description: string;
  hobby2Tittle: string;
  hobby2Description: string;
};

export const AboutMe: React.FC<Props> = (props: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef);
  return (
    <div ref={sectionRef} className="flex flex-col">
      <div className="md:grid md:grid-cols-3 flex flex-col items-center gap-4">
        <div className="flex relative w-full h-full justify-center items-center">
          <Icons
            iconType={"meThinking"}
            size={"full"}
            className={cn(
              "transition-transform duration-300 hover:scale-105 rounded-4xl border-primary border-8",
              "object-contain w-full max-w-xs",
              "rounded-4xl",
              isIntersecting
                ? "animate-[slideLeftFadeIn_1s_ease-out_0.8s_both]"
                : "invisible"
            )}
          />
        </div>

        <div className="flex flex-col gap-2 col-span-2">
          <div
            className={cn(
              "flex flex-row gap-1",
              isIntersecting
                ? "animate-[slideUpFadeIn_1s_ease-out_1s_both]"
                : "invisible"
            )}
          >
            <Icons iconType={"document"} size={"md"} />
            <Typography type={"h3"} text={props.bio} />
          </div>
          <Typography
            type={"lg"}
            text={props.bioDescription1}
            className={cn(
              isIntersecting
                ? "animate-[slideUpFadeIn_1s_ease-out_1.2s_both]"
                : "invisible"
            )}
          />
          <Typography
            type={"lg"}
            text={props.bioDescription2}
            className={cn(
              isIntersecting
                ? "animate-[slideUpFadeIn_1s_ease-out_1.4s_both]"
                : "invisible"
            )}
          />
          <Typography
            type={"lg"}
            text={props.bioDescription3}
            className={cn(
              isIntersecting
                ? "animate-[slideUpFadeIn_1s_ease-out_1.6s_both]"
                : "invisible"
            )}
          />
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-4 pt-2">
            <InfoCard
              icon={"idea"}
              title={props.hobby3Tittle}
              description={props.hobby3Description}
              className={cn(
                isIntersecting
                  ? "animate-[slideRightFadeIn_1s_ease-out_1.8s_both]"
                  : "invisible"
              )}
            />
            <InfoCard
              icon={"controller"}
              title={props.hobby1Tittle}
              description={props.hobby1Description}
              className={cn(
                isIntersecting
                  ? "animate-[slideRightFadeIn_1s_ease-out_2s_both]"
                  : "invisible"
              )}
            />
            <InfoCard
              icon={"music"}
              title={props.hobby2Tittle}
              description={props.hobby2Description}
              className={cn(
                isIntersecting
                  ? "animate-[slideRightFadeIn_1s_ease-out_2.2s_both]"
                  : "invisible"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
