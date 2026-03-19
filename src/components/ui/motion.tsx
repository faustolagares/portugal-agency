import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const VIEWPORT = { once: true, margin: "-80px" };
const EASE = "easeOut";
const DURATION = 0.6;

function useVariants(variants: Variants) {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    } satisfies Variants;
  }
  return variants;
}

interface MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE, delay } },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION, ease: EASE, delay } },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE, delay } },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE, delay } },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay },
    },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function ExpandLine({ delay = 0, className }: { delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  const variants: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
          scaleX: 1,
          opacity: 1,
          transition: { duration: 0.7, ease: EASE, delay },
        },
      };
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "left" }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    />
  );
}

export function BlurUp({ children, delay = 0, className }: MotionProps) {
  const variants = useVariants({
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE, delay },
    },
  });
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function PulseLoop({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className={className}
      animate={reduced ? {} : { scale: [1, 1.12, 1] }}
      transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}
