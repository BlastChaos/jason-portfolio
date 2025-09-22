import { Icons } from "@/components/ui/icons";
import { cn } from "@/utilities/utils";
import { LottieRefCurrentProps } from "lottie-react";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export const Section: React.FC = () => {
  const pathName = usePathname();

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="group relative flex flex-col gap-2">
      <Icons iconType="suitcase" size="lg" />
      <span
        className={cn(
          "absolute left-0 bottom-0 w-full h-1 bg-primary",
          "transform scale-x-0 origin-left",
          "transition-transform duration-700",
          "group-hover:scale-x-100"
        )}
      />
    </div>
  );
};
