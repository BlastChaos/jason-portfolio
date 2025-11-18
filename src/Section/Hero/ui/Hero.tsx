import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typewriter } from "./Typewriter";
import { Icons } from "@/components/ui/icons";
import { TextIconButton } from "@/components/ui/button";
import { Contact } from "./Contact";
import Link from "next/link";
import { cn } from "@/utilities/utils";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";

type Props = {
  lang: Locale;
};
export const Hero: React.FC<Props> = async (props: Props) => {
  const { hero } = await getDictionary(props.lang);

  const texts = Object.values(hero.whoAmI);
  return (
    <div
      className={
        "flex flex-col md:grid md:grid-cols-2 h-svh pt-14 md:pt-0 gap-6 md:h-[93svh]"
      }
    >
      <div className="flex flex-col justify-center gap-4 order-2 md:order-1">
        <CustomAnimation type="slideUpFadeIn" delay={0.2} duration={1}>
          <Typography
            type={"lg"}
            text={hero.introduction}
            className="text-primary font-medium"
          />
        </CustomAnimation>

        <CustomAnimation type="slideUpFadeIn" delay={0.4} duration={1}>
          <Typography type={"h1"} text={"Jason Brutus"} />
        </CustomAnimation>
        <CustomAnimation type="slideUpFadeIn" delay={0.6} duration={1}>
          <Typewriter texts={texts} />
        </CustomAnimation>
        <CustomAnimation
          type="slideUpFadeIn"
          delay={0.6}
          duration={1}
          className="md:w-[77%]"
        >
          <Typography type={"md"} text={hero.description} />
        </CustomAnimation>
        <CustomAnimation
          type="slideUpFadeIn"
          delay={0.8}
          duration={1}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link href={`/#contact`}>
            <TextIconButton
              text={hero.contactMe}
              icon="alternateEmail"
              size={"lg"}
              variant={"default"}
              className="w-full"
            />
          </Link>

          <Link href={`/#projects`}>
            <TextIconButton
              text={hero.work}
              size={"lg"}
              variant={"secondary"}
              icon="suitcase"
              className="w-full"
            />
          </Link>
        </CustomAnimation>

        <CustomAnimation type="slideUpFadeIn" delay={1} duration={1}>
          <Contact />
        </CustomAnimation>
      </div>

      <div className="flex justify-center relative items-center animate-slide-right-bounce order-1 md:order-2">
        <div
          className="rounded-full w-56 h-56 md:w-80 md:h-80  lg:w-110 lg:h-110 absolute bg-accent animate-[pulsation_4s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <Icons
          iconType="me"
          size="5xl"
          className={cn(
            "rounded-full",
            "border-primary border-8",
            "z-10",
            "transition-transform duration-300",
            "hover:scale-105",
            "animate-[float_4s_ease-in-out_2.4s_infinite]"
          )}
        />
      </div>
    </div>
  );
};
