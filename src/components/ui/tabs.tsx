import { motion } from "motion/react";
import { cn } from "@/utilities/utils";

import { Typography } from "./typography";

type Tab = {
  id: string;
  label: React.ReactNode;
};

type AnimatedTabsProps = {
  tabs: Tab[];
  currentTab: string;
  className?: string;
  onTabChange: (id: string) => void;
  bubbleClassName?: string;
};

export const Tabs = (props: AnimatedTabsProps) => {
  if (!props.tabs.length) return null;

  return (
    <div className={cn("flex flex-row gap-2", props.className)}>
      {props.tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => props.onTabChange(tab.id)}
          className={cn(
            "relative rounded-[--radius] px-3 py-1.5 text-sm font-medium",
            "text-foreground outline-ring transition",
            "focus-visible:outline-2",
            props.currentTab === tab.id ? "" : "hover:text-foreground/60"
          )}
        >
          {props.currentTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className={cn(
                "absolute inset-0 z-0 bg-primary rounded-lg",
                props.bubbleClassName
              )}
              transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
            />
          )}
          <Typography
            type={"lg"}
            text={tab.label}
            className={cn(
              "relative z-10 transition-colors duration-300",
              props.currentTab === tab.id && "text-primary-foreground"
            )}
          />
        </button>
      ))}
    </div>
  );
};
