import { Card } from "@/components/ui/card";
import { Locale } from "@/dictionaries/dictionaries";

type Props = {
  lang: Locale;
};
export const WorkExperience: React.FC<Props> = (props: Props) => {
  return (
    <div className="relative mx-24 py-4 gap-4 flex flex-col">
      <div className="absolute left-0 top-0 bottom-0 w-1 -z-10 bg-accent" />
      <Card className="border-l-4  border-primary"></Card>
      <Card className="border-l-4  border-primary"></Card>
    </div>
  );
};
