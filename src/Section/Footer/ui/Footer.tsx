import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

type Props = {
  lang: Locale;
};

export const Footer: React.FC<Props> = async (props: Props) => {
  const { footer } = await getDictionary(props.lang);
  const currentYear = new Date().getFullYear();
  const startYear = 2025;

  return (
    <footer className="bg-secondary-background border-t border-border">
      <div className="container mx-auto px-8 lg:px-12 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography
              type="sm"
              text={`© ${startYear}${
                currentYear > startYear ? `-${currentYear}` : ""
              } Jason Brutus. ${footer.rights}`}
              className="text-muted-foreground text-center md:text-left"
            />

            <div className="flex flex-col md:flex-row items-center gap-2">
              <Typography
                type="sm"
                text={footer.builtWith}
                className="text-muted-foreground"
              />
              <div className="flex flex-row gap-2 items-center">
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Next.js"
                >
                  <Icons iconType="nextjs" size="md" />
                </Link>
                <Link
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="React"
                >
                  <Icons iconType="react" size="md" />
                </Link>
                <Link
                  href="https://www.typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="TypeScript"
                >
                  <Icons iconType="typescript" size="md" />
                </Link>
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Tailwind CSS"
                >
                  <Icons iconType="tailwind" size="md" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
