"use client";
import suitCase from "@/components/utilities/lottie-suitcase.json";
import folder from "@/components/utilities/lottie-folder.json";
import mail from "@/components/utilities/lottie-mail.json";
import avatar from "@/components/utilities/lottie-avatar.json";
import { cn } from "@/utilities/utils";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { RefObject, useRef } from "react";
import Image from "next/image";
import { Calendar } from "./icons/calendar";
import { Cloud } from "./icons/cloud";
import { Download } from "./icons/download";
import { Code } from "./icons/code";
import { Computer } from "./icons/computer";
import { Controller } from "./icons/controller";
import { Database } from "./icons/database";
import { Document } from "./icons/document";
import { Github } from "./icons/github";
import { Globe } from "./icons/globe";
import { Idea } from "./icons/idea";
import { Info } from "./icons/info";
import { Linkedin } from "./icons/linkedin";
import { Location } from "./icons/location";
import { Music } from "./icons/music";
const icons = {
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
    type: "svg",
    svg: Download,
  },
  github: {
    type: "svg",
    svg: Github,
  },
  linkedin: {
    type: "svg",
    svg: Linkedin,
  },
  home: {
    alt: "Home",
    path: "/github.svg",
    type: "img",
  },
  document: {
    type: "svg",
    svg: Document,
  },
  meThinking: {
    type: "img",
    alt: "Me who's thinking about something",
    path: "/me-thinking.jpeg",
  },
  controller: {
    type: "svg",
    svg: Controller,
  },
  music: {
    type: "svg",
    svg: Music,
  },
  idea: {
    type: "svg",
    svg: Idea,
  },
  react: {
    type: "img",
    alt: "React",
    path: "/tags/react.svg",
  },
  python: {
    type: "img",
    alt: "Python",
    path: "/tags/python.svg",
  },
  Csharp: {
    type: "img",
    alt: "Csharp",
    path: "/tags/csharp.svg",
  },
  typescript: {
    type: "img",
    alt: "TypeScript",
    path: "/tags/typescript.svg",
  },
  nodejs: {
    type: "img",
    alt: "NodeJs",
    path: "/tags/nodejs.svg",
  },
  electron: {
    type: "img",
    alt: "Electron",
    path: "/tags/electron.svg",
  },
  graphql: {
    type: "img",
    alt: "Graphql",
    path: "/tags/graphql.svg",
  },
  nextjs: {
    type: "img",
    alt: "NextJs",
    path: "/tags/nextjs.svg",
  },
  postgres: {
    type: "img",
    alt: "PostgreSQL",
    path: "/tags/postgres.svg",
  },
  sqlite: {
    type: "img",
    alt: "SQLite",
    path: "/tags/sqlite.svg",
  },
  supabase: {
    type: "img",
    alt: "Supabase",
    path: "/tags/supabase.svg",
  },
  tailwind: {
    type: "img",
    alt: "Tailwind",
    path: "/tags/tailwind.svg",
  },
  calendar: {
    type: "svg",
    svg: Calendar,
  },
  location: {
    type: "svg",
    svg: Location,
  },
  code: {
    type: "svg",
    svg: Code,
  },
  info: {
    type: "svg",
    svg: Info,
  },
  computer: {
    type: "svg",
    svg: Computer,
  },
  database: {
    type: "svg",
    svg: Database,
  },
  cloud: {
    type: "svg",
    svg: Cloud,
  },
  globe: {
    type: "svg",
    svg: Globe,
  },
} satisfies Record<string, Info>;

export type IconsType = keyof typeof icons;

type InfoLottie = {
  type: "morph" | "hover";
  animationData: unknown;
};

type InfoSimpleImage = {
  type: "img";
  path: string;
  alt: string;
};

type InfoSvg = {
  type: "svg";
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

type Info = InfoSimpleImage | InfoLottie | InfoSvg;

type Props = {
  iconType: IconsType;
  size: "sm" | "md" | "lg" | "5xl" | "4xl";
  lottieRef?: RefObject<LottieRefCurrentProps | null>;
  className?: string;
};

export const Icons: React.FC<Props> = (props: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

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

  const classNameInfo = cn(
    props.size === "sm" && "w-4 h-4",
    props.size === "md" && "w-6 h-6",
    props.size === "lg" && "w-8 h-8",
    props.size === "5xl" && "w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96",
    props.size === "4xl" && "w-44 h-44 md:w-72 md:h-72",
    props.className
  );

  if (icon.type === "img") {
    return (
      <Image
        alt={icon.alt}
        src={icon.path}
        width={9999}
        height={9999}
        className={classNameInfo}
      />
    );
  }
  if (icon.type === "svg") {
    return <icon.svg className={classNameInfo} />;
  }

  return (
    <Lottie
      autoplay={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        props.size === "sm" && "w-4 h-4",
        props.size === "md" && "w-6 h-6",
        props.size === "lg" && "w-8 h-8"
      )}
      lottieRef={props.lottieRef ?? lottieRef}
      animationData={icon.animationData}
      loop={false}
    />
  );
};
