import { IconButton } from "@/components/ui/button";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  DEVPOST_URL,
} from "@/Section/ContactMe/utilities/contactInfo";
import Link from "next/link";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 md:justify-start justify-center">
      <Link
        href={GITHUB_URL}
        target="_blank"
        aria-label="Visit my GitHub profile"
      >
        <IconButton
          variant={"secondary"}
          icon="github"
          size={"lg"}
          className="rounded-full p-6"
          aria-label="GitHub"
        />
      </Link>

      <Link
        href={LINKEDIN_URL}
        target="_blank"
        aria-label="Visit my LinkedIn profile"
      >
        <IconButton
          variant={"secondary"}
          icon="linkedin"
          size={"lg"}
          className="rounded-full p-6"
          aria-label="LinkedIn"
        />
      </Link>
      <Link href={EMAIL_URL} aria-label="Send me an email">
        <IconButton
          variant={"secondary"}
          icon="mail"
          size={"lg"}
          className="rounded-full p-6"
          aria-label="Email"
        />
      </Link>
      <Link
        href={DEVPOST_URL}
        target="_blank"
        aria-label="Visit my DevPost profile"
      >
        <IconButton
          variant={"secondary"}
          icon="devpost"
          size={"lg"}
          className="rounded-full p-6"
          aria-label="DevPost"
        />
      </Link>
    </div>
  );
};
