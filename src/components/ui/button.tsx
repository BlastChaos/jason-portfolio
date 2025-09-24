"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { Slot, WithAsChild } from "../utilities/slot";
import { type HTMLMotionProps, motion } from "motion/react";
import { Typography } from "./typography";
import { cn } from "@/utilities/utils";
import { Icons, IconsType } from "./icons";

type ButtonWithAsChild = WithAsChild<
  HTMLMotionProps<"button"> & {
    hoverScale?: number;
    tapScale?: number;
  }
>;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonWithAsChild & VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : motion.button;

  return (
    <Component
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

type TextButtonProps = Omit<ButtonProps, "children" | "asChild"> & {
  text: string;
};

function TextButton({ text, ...props }: TextButtonProps) {
  return (
    <Button {...props}>
      <Typography type={"md"} text={text} />
    </Button>
  );
}

type TextIconButtonProps = Omit<ButtonProps, "children" | "asChild"> & {
  text: string;
  icon: IconsType;
};

function TextIconButton({ text, icon, ...props }: TextIconButtonProps) {
  return (
    <Button {...props}>
      <Icons iconType={icon} size="md" />
      <Typography type={"md"} text={text} />
    </Button>
  );
}

export {
  Button,
  buttonVariants,
  TextButton,
  TextIconButton,
  type ButtonProps,
  type TextButtonProps,
  type TextIconButtonProps,
};
