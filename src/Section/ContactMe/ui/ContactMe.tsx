import { getDictionary, Locale } from "@/dictionaries/dictionaries";
import { Typography } from "@/components/ui/typography";
import { Icons } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { CustomAnimation } from "@/Section/shared/ui/CustomAnimation";
import Link from "next/link";
import {
  EMAIL_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  DEVPOST_URL,
} from "../utilities/contactInfo";

type Props = {
  lang: Locale;
};
export const ContactMe: React.FC<Props> = async (props: Props) => {
  const { contact } = await getDictionary(props.lang);

  const contactMethods = [
    {
      icon: "mail" as const,
      label: contact.email,
      href: EMAIL_URL,
      action: "mailto",
    },
    {
      icon: "linkedin" as const,
      label: contact.linkedin,
      href: LINKEDIN_URL,
      action: "external",
    },
    {
      icon: "github" as const,
      label: contact.github,
      href: GITHUB_URL,
      action: "external",
    },
    {
      icon: "devpost" as const,
      label: contact.devpost,
      href: DEVPOST_URL,
      action: "external",
    },
  ];

  const removeHttps = (url: string) => {
    return url
      .replace("https://", "")
      .replace("mailto:", "")
      .replace("www.", "")
      .replace(/\/$/, "");
  };

  return (
    <div className="flex flex-col gap-8">
      <CustomAnimation
        type="slideUpFadeIn"
        delay={0.2}
        duration={1}
        className="flex flex-col gap-2"
      >
        <Typography
          type="lg"
          text={contact.description1}
          className="text-center mx-auto whitespace-pre-line"
        />
        <Typography
          type="lg"
          text={contact.description2}
          className="text-center max-w-2xl mx-auto whitespace-pre-line"
        />
      </CustomAnimation>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {contactMethods.map((method, index) => (
          <CustomAnimation
            key={method.icon}
            type="slideUpFadeIn"
            delay={0.4 + index * 0.1}
            duration={1}
          >
            <Card animationType="top" className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-3">
                  <Icons iconType={method.icon} size="lg" />
                  <Typography type="h4" text={method.label} />
                </div>
                <Link
                  href={method.href}
                  target={method.action === "external" ? "_blank" : undefined}
                  rel={
                    method.action === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group"
                >
                  <Typography
                    type="md"
                    text={removeHttps(method.href)}
                    className="text-primary group-hover:underline transition-all"
                  />
                </Link>
              </div>
            </Card>
          </CustomAnimation>
        ))}
      </div>
    </div>
  );
};
