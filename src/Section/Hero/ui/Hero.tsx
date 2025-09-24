import { Typography } from "@/components/ui/typography";
import { Locale } from "@/dictionaries/dictionaries";

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
      <div className="flex justify-center md:justify-start">
        <Typography type={"h1"} text={"Jason Brutus"} />
      </div>

      <div className="hidden md:flex justify-center md:justify-start">
        <Typography type={"h1"} text={"ALLO"} />
      </div>
    </div>
  );
};
