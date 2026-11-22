"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@/components/ui/button";
import { cn } from "@/utilities/utils";

type Props = {
  label: string;
};

export const BackToTopButton: React.FC<Props> = (props: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight / 2);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <IconButton
      icon="arrowUp"
      variant="default"
      size="lg"
      onClick={scrollToTop}
      aria-label={props.label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-6 z-40 sm:hidden rounded-full p-2 w-10 h-10 transition-opacity duration-200",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    />
  );
};
