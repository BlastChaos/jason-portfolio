import { IconButton } from "@/components/ui/button";
import Link from "next/link";

const GITHUB_URL = "https://github.com/BlastChaos";
const LINKEDIN_URL = "https://www.linkedin.com/in/jasonbrutus/";
const EMAIL_URL = "mailto:brutusjason123@gmail.com";
const DEVPOST_URL =
  "https://devpost.com/BlastChaos?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 md:justify-start justify-center">
      <Link href={GITHUB_URL} target="_blank">
        <IconButton
          variant={"secondary"}
          icon="github"
          size={"lg"}
          className="rounded-full p-6"
        />
      </Link>

      <Link href={LINKEDIN_URL} target="_blank">
        <IconButton
          variant={"secondary"}
          icon="linkedin"
          size={"lg"}
          className="rounded-full p-6"
        />
      </Link>
      <Link href={EMAIL_URL} target="_blank">
        <IconButton
          variant={"secondary"}
          icon="mail"
          size={"lg"}
          className="rounded-full p-6"
        />
      </Link>
      <Link href={DEVPOST_URL} target="_blank">
        <IconButton
          variant={"secondary"}
          icon="devpost"
          size={"lg"}
          className="rounded-full p-6"
        />
      </Link>
    </div>
  );
};
