import { cn } from "@/utilities/utils";
import { JSX } from "react";
import { type ClassValue } from "clsx";
export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "lg"
  | "md"
  | "sm";

type PropsInfo = {
  type: keyof JSX.IntrinsicElements;
  className: ClassValue;
};

type Props = {
  type: TypographyType;
  text: string;
  className?: ClassValue;
};
export const tagMap: Record<Props["type"], PropsInfo> = {
  h1: { type: "h1", className: "text-5xl md:text-6xl font-bold" },
  h2: { type: "h2", className: "text-4xl md:text-5xl font-bold" },
  h3: { type: "h3", className: "text-xl font-bold" },
  h4: { type: "h4", className: "text-lg font-bold" },
  h5: { type: "h5", className: "text-base font-bold" },
  h6: { type: "h6", className: "text-sm font-bold" },
  lg: { type: "span", className: "text-lg" },
  md: { type: "span", className: "text-base" },
  sm: { type: "span", className: "text-sm" },
};

export const Typography: React.FC<Props> = (props: Props) => {
  const componentInfo = tagMap[props.type];
  return (
    <componentInfo.type
      className={cn(componentInfo.className, props.className)}
    >
      {props.text}
    </componentInfo.type>
  );
};
