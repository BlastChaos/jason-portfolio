"use client";

import { IconButton } from "@/components/ui/button";

export const Contact: React.FC = () => {
  const goTo = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className="flex flex-row gap-4 md:justify-start justify-center">
      <IconButton
        variant={"secondary"}
        icon="github"
        size={"lg"}
        onClick={() => goTo("https://github.com/BlastChaos")}
        className="rounded-full p-6"
      />
      <IconButton
        variant={"secondary"}
        icon="linkedin"
        size={"lg"}
        onClick={() => goTo("https://www.linkedin.com/in/jasonbrutus/")}
        className="rounded-full p-6"
      />
      <IconButton
        variant={"secondary"}
        icon="mail"
        size={"lg"}
        onClick={() => goTo("mailto:brutusjason123@gmail.com")}
        className="rounded-full p-6"
      />
      <IconButton
        variant={"secondary"}
        icon="devpost"
        size={"lg"}
        onClick={() =>
          goTo(
            "https://devpost.com/BlastChaos?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          )
        }
        className="rounded-full p-6"
      />
    </div>
  );
};
