"use client";
import { cn } from "@/utilities/utils";
import { LottieRefCurrentProps } from "lottie-react";

import { useRef, useState } from "react";
import { headerSections, Sections } from "../utilities/headerSection";
import { Icons } from "@/components/ui/icons";
import { Typography } from "@/components/ui/typography";

type Props = {
  name: string;
  section: Sections;
  inSection: boolean;
};

export const Section: React.FC<Props> = (props: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [currentStatus, setCurrentStatus] = useState(props.inSection);

  if (currentStatus !== props.inSection) {
    setCurrentStatus(props.inSection);
    const direction = props.inSection ? 1 : -1;
    lottieRef.current?.setDirection(direction);
    lottieRef.current?.play();
  }

  return (
    <div className="group relative flex flex-row gap-2">
      <Icons
        iconType={headerSections[props.section]}
        size="md"
        ref={lottieRef}
      />
      <Typography text={props.name} type="md" />
      <span
        className={cn(
          "absolute left-0 bottom-0 w-full h-0.5 bg-primary",
          "transform scale-x-0 origin-left",
          "transition-transform duration-700",
          "group-hover:scale-x-100"
        )}
      />
    </div>
  );
};
