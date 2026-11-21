"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
};

export const CopyEmailButton: React.FC<Props> = (props: Props) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.email);
      setCopied(true);
    } catch {
      // Clipboard blocked (non-HTTPS or denied): the address is still shown to copy by hand.
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      aria-live="polite"
      className={props.className}
    >
      {copied ? props.copiedLabel : props.copyLabel}
    </Button>
  );
};
