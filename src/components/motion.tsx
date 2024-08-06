
import { Variants } from "framer-motion";

export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.75,
      },
    },
  };
};

export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.75) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};
