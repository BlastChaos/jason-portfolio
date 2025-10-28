import { getDictionary, Locale } from "@/dictionaries/dictionaries";

type Props = {
  lang: Locale;
};
export const ContactMe: React.FC<Props> = async (props: Props) => {
  const { headers } = await getDictionary(props.lang);
  return (
    <div>
      <h1>{headers.contact}</h1>
      <h2>{headers.contactQuote}</h2>
    </div>
  );
};
