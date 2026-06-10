import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";
import { cx } from "../../lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small sentence-case label that sits above section headlines. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return <p className={cx(styles.eyebrow, className)}>{children}</p>;
}
