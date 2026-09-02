import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "../../utils/cn";

export interface PageTransitionProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "exit" | "transition"
  > {
  duration?: number;
}

export function PageTransition({
  duration = 0.22,
  className,
  ...props
}: PageTransitionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.div
        initial={false}
        className={cn("min-w-0", className)}
        {...props}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className={cn("min-w-0", className)}
      {...props}
    />
  );
}
