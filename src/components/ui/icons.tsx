"use client";
import suitCase from "@/components/utilities/lottie-suitcase.json";
import folder from "@/components/utilities/lottie-folder.json";
import mail from "@/components/utilities/lottie-mail.json";
import avatar from "@/components/utilities/lottie-avatar.json";

import { cn } from "@/utilities/utils";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { RefObject, useRef } from "react";

export type Icons = "suitcase" | "folder" | "mail" | "avatar";

type Info = {
  type: "morph" | "hover";
  animationData: unknown;
};

type Props = {
  iconType: Icons;
  size: "sm" | "md" | "lg";
  ref?: RefObject<LottieRefCurrentProps | null>;
};

export const Icons: React.FC<Props> = (props: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const icons: Record<Icons, Info> = {
    suitcase: {
      type: "morph",
      animationData: suitCase,
    },
    folder: {
      type: "morph",
      animationData: folder,
    },
    mail: {
      animationData: mail,
      type: "morph",
    },
    avatar: {
      animationData: avatar,
      type: "morph",
    },
  };

  const icon = icons[props.iconType];

  const handleMouseEnter = () => {
    if (icon.type === "morph") {
      // Forward direction
      lottieRef.current?.setDirection(1);
      lottieRef.current?.play();
    } else {
      // Play the animation from start
      lottieRef.current?.goToAndPlay(0, true);
    }
  };

  const handleMouseLeave = () => {
    if (icon.type === "morph") {
      // Reverse direction
      lottieRef.current?.setDirection(-1);
      lottieRef.current?.play();
    }
  };

  return (
    <Lottie
      autoplay={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        props.size === "sm" && "w-4 h-4",
        props.size === "md" && "w-6 h-6",
        props.size === "lg" && "w-24 h-24"
      )}
      lottieRef={props.ref ?? lottieRef}
      animationData={icon.animationData}
      loop={false}
    />
  );
};
