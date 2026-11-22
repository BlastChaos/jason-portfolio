"use client";
import { PropsWithChildren, useRef } from "react";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";
import { cn } from "@/utilities/utils";

type Props = {
  type:
    | "slideUpFadeIn"
    | "slideLeftFadeIn"
    | "slideRightFadeIn"
    | "slideUpFadeInBounce"
    | "slideLeftFadeInBounce"
    | "slideRightFadeInBounce";
  delay: number;
  duration: number;
  className?: string;
};

const MAX_DELAY_S = 0.4;
const MAX_DURATION_S = 0.6;

export const CustomAnimation: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>,
) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef);
  const delay = Math.min(props.delay * 0.4, MAX_DELAY_S);
  const duration = Math.min(props.duration, MAX_DURATION_S);

  return (
    <div
      ref={sectionRef}
      data-entrance-animation
      className={cn(!isIntersecting && "motion-safe:invisible", props.className)}
      style={
        isIntersecting
          ? {
              animation: `${props.type} ${duration}s ease-out ${delay}s both`,
            }
          : undefined
      }
    >
      {props.children}
    </div>
  );
};
