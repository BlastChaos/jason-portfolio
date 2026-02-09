import { Locale } from "@/dictionaries/dictionaries";
import { TextIconButton } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  lang: Locale;
  resumeText: string;
  className?: string;
};

const RESUME_URL =
  "https://docs.google.com/document/d/1tLnUxXERxWT7hhfYOgmRxKydAqliq_78/edit?usp=sharing&ouid=107560061721660228440&rtpof=true&sd=true";

export const DownloadResume: React.FC<Props> = (props: Props) => {
  return (
    <Link href={RESUME_URL} target="_blank">
      <TextIconButton
        text={props.resumeText}
        variant={"secondary"}
        icon="download"
        className={props.className}
      />
    </Link>
  );
};
