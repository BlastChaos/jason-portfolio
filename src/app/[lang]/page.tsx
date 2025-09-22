import { Locale } from "@/dictionaries/dictionaries";
import { Header } from "@/Section/Header/ui/Header";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <Header lang={lang} />
    </div>
  );
}
