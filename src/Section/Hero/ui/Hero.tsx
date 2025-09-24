import { Typography } from "@/components/ui/typography";
import { Locale } from "@/dictionaries/dictionaries";
import { Typewriter } from "./Typewriter";
import { Icons } from "@/components/ui/icons";

type Props = {
  lang: Locale;
};
export const Hero: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={
        "container mx-auto px-4 lg:px-8  grid grid-cols-1 md:grid-cols-2"
      }
    >
      <div className="flex flex-col justify-center md:justify-start gap-4">
        <Typography type={"h1"} text={"Jason Brutus"} />
        <Typewriter texts={["TESTEUR", "SMASH ENJOYER"]} />
      </div>

      <div className="hidden md:flex justify-center md:justify-start">
        <Icons iconType="me" size="lg" />
      </div>
    </div>
  );
};
