import { Icons, IconsType } from "@/components/ui/icons";
import { tagMap, Typography } from "@/components/ui/typography";
import { motion } from "motion/react";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  icon: IconsType;
  isActiveSession: boolean;
};

export const MenuSection: React.FC<Props> = (props: Props) => {
  return (
    <Link href={`/#${props.id}`} key={props.id}>
      <div className="group relative flex flex-row gap-2 items-center">
        <Icons iconType={props.icon} size="sm" />
        {props.isActiveSession && (
          <motion.span
            variants={{
              initial: { width: 0, opacity: 0 },
              animate: { width: "auto", opacity: 1 },
              exit: { width: 0, opacity: 0 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: 0.1,
              type: "spring",
              bounce: 0,
              duration: 0.6,
            }}
            className={`${tagMap.sm.className} lg:hidden flex`}
          >
            {props.name}
          </motion.span>
        )}

        <Typography text={props.name} type="sm" className={"hidden lg:flex"} />
      </div>
    </Link>
  );
};
