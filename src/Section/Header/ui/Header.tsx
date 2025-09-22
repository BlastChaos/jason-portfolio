import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { getDictionary, Locale } from "@/dictionaries/dictionaries";

type Props = {
  lang: Locale;
};
export const Header: React.FC<Props> = async (props: Props) => {
  const { header } = await getDictionary(props.lang);
  return (
    <div>
      <Icons iconType="suitcase" size="lg" />
      <Card className="hidden sticky top-0 md:flex flex-row h-14 items-center p-4">
        <h4>{"＜JasonBrutus /＞"}</h4>
      </Card>
    </div>
  );
};
