"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Typography } from "../../../components/ui/typography";

type Props = {
  texts: string[];
  className?: string;
};
//See https://21st.dev/danielpetho/typewriter/default for the merit
export const Typewriter: React.FC<Props> = (props: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const SPEED = 150;
  const WAIT_TIME = 2000;
  const DELETE_SPEED = 30;
  const CURSOR_CHAR = "|";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = props.texts[currentTextIndex];

    const startTyping = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);

          setCurrentTextIndex((prev) => (prev + 1) % props.texts.length);
          setCurrentIndex(0);
          timeout = setTimeout(() => {
            /* empty */
          }, WAIT_TIME);
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, DELETE_SPEED);
        }
      } else {
        if (currentIndex < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          }, SPEED);
        } else if (props.texts.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, WAIT_TIME);
        }
      }
    };

    startTyping();

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, currentTextIndex, props.texts]);

  return (
    <div
      className={`inline whitespace-pre-wrap tracking-tight ${props.className}`}
    >
      <Typography type={"h2"} text={displayText} />
      <motion.span
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.01,
              repeat: Infinity,
              repeatDelay: 0.4,
              repeatType: "reverse",
            },
          },
        }}
        className={"ml-1"}
        initial="initial"
        animate="animate"
      >
        {CURSOR_CHAR}
      </motion.span>
    </div>
  );
};
