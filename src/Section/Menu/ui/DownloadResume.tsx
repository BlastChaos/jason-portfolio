"use client";
import { Locale } from "@/dictionaries/dictionaries";
import { TextIconButton } from "@/components/ui/button";

type Props = {
  lang: Locale;
  resumeText: string;
};

const RESUME_URL =
  "https://etsmtl365-my.sharepoint.com/:b:/g/personal/jason_brutus_1_ens_etsmtl_ca/ETaisPKWb91EoOIRJRyf61kBDVpu8vgXcL28OYPgsd009g?e=ztyU4G";

export const DownloadResume: React.FC<Props> = async (props: Props) => {
  const goTo = () => {
    window.open(RESUME_URL, "_blank")?.focus();
  };
  return (
    <TextIconButton
      text={props.resumeText}
      variant={"secondary"}
      icon="download"
      onClick={goTo}
    />
  );
};
