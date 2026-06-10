import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealVariants, VIEWPORT } from "../../lib/animation";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay the reveal (seconds) — handy for sequencing sibling blocks. */
  delay?: number;
}

/** Scroll-triggered fade + small upward motion. Motion automatically respects
 * prefers-reduced-motion, so the element simply appears when motion is off. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
