import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * Returns a definite boolean for whether the user prefers reduced motion.
 * Motion's own hook can return `null` before hydration; we coerce that to
 * `false` so callers can branch simply. Motion also auto-respects the setting
 * for its own animations — this hook is for our custom branching (e.g. skipping
 * SVG line-drawing and showing the resolved diagram state immediately).
 */
export function usePrefersReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false;
}
