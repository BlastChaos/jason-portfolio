import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typewriter } from "./Typewriter";
import { Icons } from "@/components/ui/icons";
import { TextIconButton } from "@/components/ui/button";
import { Contact } from "./Contact";

type Props = {
  lang: Locale;
};
export const Hero: React.FC<Props> = async (props: Props) => {
  const { hero } = await getDictionary(props.lang);

  const texts = Object.values(hero.whoAmI);
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 md:h-[93svh] h-svh"}>
      <div className="flex flex-col  md:items-start justify-center gap-4">
        <Typography type={"lg"} text={"Hey! I'm"} className="text-primary" />
        <Typography type={"h1"} text={"Jason Brutus"} />
        <Typewriter texts={texts} />
        <Typography
          type={"md"}
          text={hero.description}
          className={"md:w-[77%]"}
        />
        <div className="flex flex-row gap-4">
          <TextIconButton text={hero.contactMe} icon="download" size={"lg"} />
          <TextIconButton
            text={hero.work}
            size={"lg"}
            variant={"secondary"}
            icon="suitcase"
          />
        </div>
        <Contact />
      </div>

      <div className="hidden md:flex justify-center relative items-center animate-[float_4s_ease-in-out_infinite]">
        <div className="rounded-full w-110 h-110 absolute bg-accent animate-[pulsation_4s_ease-in-out_infinite]" />
        <Icons
          iconType="me"
          size="lg"
          className="rounded-full w-96 h-96 border-primary border-8 z-10 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
