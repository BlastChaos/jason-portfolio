import { cn } from "@/utilities/utils";
import { JSX } from "react";
import { type ClassValue } from "clsx";
type Type = "h1" | "h2" | "h3" | "h4" | "lg" | "md" | "sm";

type PropsInfo = {
  type: keyof JSX.IntrinsicElements;
  className: ClassValue;
};

type Props = {
  type: Type;
  text: string;
  className?: ClassValue;
};
export const Typography: React.FC<Props> = (props: Props) => {
  const tagMap: Record<Props["type"], PropsInfo> = {
    h1: { type: "h1", className: "text-6xl font-bold" },
    h2: { type: "h2", className: "text-5xl font-bold" },
    h3: { type: "h3", className: "text-xl font-bold" },
    h4: { type: "h4", className: "text-lg font-bold" },
    lg: { type: "p", className: "text-lg" },
    md: { type: "p", className: "text-base" },
    sm: { type: "p", className: "text-sm" },
  };

  const componentInfo = tagMap[props.type];
  return (
    <componentInfo.type
      className={cn(componentInfo.className, props.className)}
    >
      {props.text}
    </componentInfo.type>
  );
};
