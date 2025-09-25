"use client";
import suitCase from "@/components/utilities/lottie-suitcase.json";
import folder from "@/components/utilities/lottie-folder.json";
import mail from "@/components/utilities/lottie-mail.json";
import avatar from "@/components/utilities/lottie-avatar.json";
import { cn } from "@/utilities/utils";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { RefObject, useRef } from "react";
import Image from "next/image";
export type IconsType =
  | "suitcase"
  | "folder"
  | "mail"
  | "avatar"
  | "me"
  | "download"
  | "linkedin"
  | "github"
  | "home";

type InfoLottie = {
  type: "morph" | "hover";
  animationData: unknown;
};

type InfoSimpleImage = {
  type: "img";
  path: string;
  alt: string;
};

type Info = InfoSimpleImage | InfoLottie;

type Props = {
  iconType: IconsType;
  size: "sm" | "md" | "lg";
  lottieRef?: RefObject<LottieRefCurrentProps | null>;
  className?: string;
};

export const Icons: React.FC<Props> = (props: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const icons: Record<IconsType, Info> = {
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
    me: {
      type: "img",
      path: "/me.jpeg",
      alt: "An image of me",
    },
    download: {
      alt: "Download",
      type: "img",
      path: "/download.svg",
    },
    github: {
      alt: "Github",
      path: "/github.svg",
      type: "img",
    },
    linkedin: {
      alt: "Linkedin",
      type: "img",
      path: "/linkedin.svg",
    },
    home: {
      alt: "Home",
      path: "/github.svg",
      type: "img",
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

  if (icon.type === "img") {
    return (
      <Image
        alt={icon.alt}
        src={icon.path}
        width={9999}
        height={9999}
        className={cn(
          props.size === "sm" && "w-4 h-4",
          props.size === "md" && "w-6 h-6",
          props.size === "lg" && "w-16 h-16",
          props.className
        )}
      />
    );
  }

  return (
    <Lottie
      autoplay={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        props.size === "sm" && "w-4 h-4",
        props.size === "md" && "w-6 h-6",
        props.size === "lg" && "w-16 h-16"
      )}
      lottieRef={props.lottieRef ?? lottieRef}
      animationData={icon.animationData}
      loop={false}
    />
  );
};
