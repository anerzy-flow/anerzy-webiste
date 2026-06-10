import type { ReactNode } from "react";
import styles from "./Section.module.css";
import { cx } from "../../lib/utils";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Optional mono label rendered above the section content. */
  eyebrow?: string;
  /** Tonal background variant. */
  tone?: "default" | "surface" | "dark";
  className?: string;
  /** Set false to render full-bleed content (the inner Container is skipped). */
  contained?: boolean;
  /** Heading text exposed to assistive tech as the section's accessible name. */
  ariaLabel?: string;
}

/** Vertical-rhythm wrapper for every page section. Owns the section id used by
 * anchor navigation and applies scroll-margin so the sticky header never
 * overlaps the target. */
export function Section({
  id,
  children,
  eyebrow,
  tone = "default",
  className,
  contained = true,
  ariaLabel,
}: SectionProps) {
  const body = (
    <>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {children}
    </>
  );

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cx(styles.section, styles[tone], className)}
    >
      {contained ? <Container>{body}</Container> : body}
    </section>
  );
}
