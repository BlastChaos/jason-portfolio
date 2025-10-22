"use client";
import { Card } from "@/components/ui/card";
import { Icons, IconsType } from "@/components/ui/icons";
import { Tabs } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { SkillType } from "./SkillType";
import { DictionnaryProps, Locale } from "@/dictionaries/dictionaries";
import { useState } from "react";
import { SoftSkill } from "./softSkill";

type Props = {
  lang: Locale;
  skillDictionary: DictionnaryProps["skill"];
};

type Section = "technical" | "softSkills" | "tools";

export const Skill: React.FC<Props> = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<Section>("softSkills");
  const section: Record<Section, { name: string; icon: IconsType }> = {
    softSkills: {
      icon: "code",
      name: "Soft Skill",
    },
    technical: {
      icon: "code",
      name: "Technical",
    },
    tools: {
      icon: "code",
      name: "Tools",
    },
  };
  return (
    <div className="flex flex-col">
      <Card className="flex justify-center items-center w-fit self-center p-1 rounded-full">
        <Tabs
          tabs={Object.entries(section).map(([key, value]) => ({
            id: key,
            label: (
              <div className="flex flex-row items-center gap-2">
                <div className="md:flex hidden">
                  <Icons iconType={value.icon} size={"md"} />
                </div>
                <Typography type={"lg"} text={value.name} />
              </div>
            ),
          }))}
          bubbleClassName="rounded-full"
          onTabChange={(value) => setCurrentTab(value as Section)}
          currentTab={currentTab}
        />
      </Card>
      <div className="flex justify-center pt-4">
        <SkillType skillDictionary={props.skillDictionary} lang={props.lang} />
      </div>
      {currentTab === "softSkills" && (
        <div className="py-4">
          <SoftSkill
            lang={props.lang}
            softSkillDictionary={props.skillDictionary.softSkill}
          />
        </div>
      )}
      <div></div>
    </div>
  );
};
