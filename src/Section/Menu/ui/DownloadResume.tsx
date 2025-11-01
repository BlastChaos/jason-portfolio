import { Locale } from "@/dictionaries/dictionaries";
import { TextIconButton } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  lang: Locale;
  resumeText: string;
  className?: string;
};

const RESUME_URL =
  "https://etsmtl365-my.sharepoint.com/:b:/g/personal/jason_brutus_1_ens_etsmtl_ca/ETaisPKWb91EoOIRJRyf61kBDVpu8vgXcL28OYPgsd009g?e=ztyU4G";

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
