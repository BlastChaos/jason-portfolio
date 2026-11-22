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

  const SPEED = 200;
  const WAIT_TIME = 5000;
  const DELETE_SPEED = 50;
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

  const cursorClassName = "text-4xl md:text-5xl font-extralight";

  return (
    // Every phrase is laid out invisibly in the same grid cell, so the block
    // keeps the height of the longest one and the page doesn't jump while typing.
    <div className={`grid tracking-tight ${props.className ?? ""}`}>
      {props.texts.map((text) => (
        <div
          key={text}
          aria-hidden
          className="invisible col-start-1 row-start-1 whitespace-pre-wrap"
        >
          <Typography type={"h2"} className={"inline font-extralight"} text={text} />
          <span className={cursorClassName}>{CURSOR_CHAR}</span>
        </div>
      ))}
      <div className="col-start-1 row-start-1 whitespace-pre-wrap">
        <Typography
          type={"h2"}
          className={"inline font-extralight"}
          text={displayText.length === 0 ? " " : displayText}
        />
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
          className={cursorClassName}
          initial="initial"
          animate="animate"
        >
          {CURSOR_CHAR}
        </motion.span>
      </div>
    </div>
  );
};
