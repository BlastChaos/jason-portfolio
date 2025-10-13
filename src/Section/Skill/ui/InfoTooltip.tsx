"use client";

import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";

import { useState } from "react";

type Props = {
  info: {
    name: string;
    color: string;
    description: string;
  }[];
};
export const InfoTooltip: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
      <TooltipTrigger onClick={() => setIsOpen((open) => !open)}>
        <Icons iconType={"info"} size={"md"} />
      </TooltipTrigger>
      <TooltipContent className="max-w-[80vw] break-normal">
        <div className="flex-col gap-2 flex flex-wrap">
          {props.info.map((info) => (
            <div
              key={`tooltip-${info.name}`}
              className="text-center flex flex-row items-center gap-2 text-wrap"
            >
              <div
                className={`rounded-full w-3 h-3`}
                style={{
                  backgroundColor: info.color,
                }}
              />
              <div>
                <Typography type={"sm"} text={info.name} />
                {": "}
                <Typography type={"sm"} text={info.description} />
              </div>
            </div>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
