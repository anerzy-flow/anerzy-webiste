import type { Variants } from "motion/react";

/* Motion constants mirror the CSS tokens in tokens.css so JS- and CSS-driven
 * motion stay in sync. Durations are in seconds (Motion); CSS uses ms. */
export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.16,
  medium: 0.42,
  slow: 0.9,
} as const;

/** Default in-view trigger: animate once, a little before fully on screen. */
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Fade + small upward motion — the brief's "enters with a small upward
 * motion and fade". Used by the <Reveal> primitive. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_STANDARD },
  },
};

/** Container that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** A single staggered child (no y-offset baked in so it composes cleanly). */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_STANDARD },
  },
};
