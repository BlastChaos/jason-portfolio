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
    <div
      className={
        "flex flex-col md:grid md:grid-cols-2 h-svh pt-8 md:pt-0 gap-6 md:h-[93svh]"
      }
    >
      <div className="flex flex-col justify-center gap-4 order-2 md:order-1">
        <Typography
          type={"lg"}
          text={hero.introduction}
          className="text-primary font-medium"
        />
        <Typography type={"h1"} text={"Jason Brutus"} />
        <Typewriter texts={texts} />
        <Typography
          type={"md"}
          text={hero.description}
          className={"md:w-[77%]"}
        />
        <div className="flex flex-col md:flex-row  gap-4">
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

      <div className="flex justify-center relative items-center animate-[float_4s_ease-in-out_infinite]  order-1 md:order-2">
        <div className="rounded-full w-56 h-56 md:w-110 md:h-110 absolute bg-accent animate-[pulsation_4s_ease-in-out_infinite]" />
        <Icons
          iconType="me"
          size="lg"
          className="rounded-full w-44 h-44 md:w-96 md:h-96  border-primary border-8 z-10 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
