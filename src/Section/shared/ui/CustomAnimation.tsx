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
export const CustomAnimation: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef);

  return (
    <div
      ref={sectionRef}
      className={cn(!isIntersecting && "invisible", props.className)}
      style={
        isIntersecting
          ? {
              animation: `${props.type} ${props.duration}s ease-out ${props.delay}s both`,
            }
          : undefined
      }
    >
      {props.children}
    </div>
  );
};
