import { cn } from "@/utilities/utils";
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
import { Home } from "./icons/home";
import { Avatar } from "./icons/avatar";
import { Suitcase } from "./icons/suitcase";
import { Folder } from "./icons/folder";
import { Mail } from "./icons/mail";
import { GraduationHat } from "./icons/graduationHat";
import { Gear } from "./icons/gear";
import { Hamburger } from "./icons/hamburger";
import { AlternateEmail } from "./icons/alternateEmail";
const icons = {
  suitcase: {
    type: "svg",
    svg: Suitcase,
  },
  graduationHat: {
    type: "svg",
    svg: GraduationHat,
  },
  gear: {
    type: "svg",
    svg: Gear,
  },
  hamburger: {
    type: "svg",
    svg: Hamburger,
  },
  folder: {
    type: "svg",
    svg: Folder,
  },
  mail: {
    type: "svg",
    svg: Mail,
  },
  avatar: {
    type: "svg",
    svg: Avatar,
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
    type: "svg",
    svg: Home,
  },
  document: {
    type: "svg",
    svg: Document,
  },
  meThinking: {
    type: "img",
    alt: "Me who's thinking about something",
    path: "/me-thinking.png",
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
  alternateEmail: {
    type: "svg",
    svg: AlternateEmail,
  },
} satisfies Record<string, Info>;

export type IconsType = keyof typeof icons;

type InfoLottie = {
  type: "hover";
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
  size: "sm" | "md" | "lg" | "5xl" | "4xl" | "full";
  className?: string;
};

export const Icons: React.FC<Props> = (props: Props) => {
  const icon = icons[props.iconType];

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

  return <icon.svg className={classNameInfo} />;
};
