import type { HTMLMotionProps, TargetAndTransition } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "../../utils/cn";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "scale";

export interface ScrollRevealProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "viewport" | "transition"
  > {
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const hiddenStates: Record<ScrollRevealVariant, TargetAndTransition> = {
  "fade-up": { opacity: 0, y: 18 },
  fade: { opacity: 0 },
  "slide-left": { opacity: 0, x: -18 },
  "slide-right": { opacity: 0, x: 18 },
  scale: { opacity: 0, scale: 0.97 },
};

export function ScrollReveal({
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.16,
  className,
  ...props
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <motion.div initial={false} className={className} {...props} />;
  }

  return (
    <motion.div
      initial={hiddenStates[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    />
  );
}
