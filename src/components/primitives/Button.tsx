import type { ReactNode } from "react";
import styles from "./Button.module.css";
import { cx } from "../../lib/utils";

type Variant = "primary" | "secondary" | "link";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  /** Adds an animated trailing arrow (used on link / secondary CTAs). */
  withArrow?: boolean;
}

/** All CTAs on the site are links (mailto / in-page anchors), so Button renders
 * an <a>. Visual style is driven entirely by tokens. */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  withArrow = false,
}: ButtonProps) {
  const isExternal = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={cx(styles.button, styles[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      {withArrow && (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      )}
    </a>
  );
}
