import { Typography } from "@/components/ui/typography";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typewriter } from "./Typewriter";
import { Icons } from "@/components/ui/icons";
import { Button, TextIconButton } from "@/components/ui/button";

type Props = {
  lang: Locale;
};
export const Hero: React.FC<Props> = async (props: Props) => {
  const { hero } = await getDictionary(props.lang);

  const texts = Object.values(hero.whoAmI);
  return (
    <div
      className={
        "container mx-auto px-4 lg:px-8  grid grid-cols-1 md:grid-cols-2 h-svh"
      }
    >
      <div className="flex flex-col items-center md:items-start justify-center gap-4">
        <Typography type={"h1"} text={"Jason Brutus"} />
        <Typewriter texts={texts} />
        <Typography
          type={"md"}
          text={hero.description}
          className={"md:w-[80%]"}
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
      </div>

      <div className="hidden md:flex justify-center relative items-center">
        <Icons iconType="me" size="lg" className="rounded-full w-96 h-96" />
        <Button className="rounded-full p-4 animate-bounce">
          <Icons iconType="folder" size="lg" />
        </Button>
      </div>
    </div>
  );
};
