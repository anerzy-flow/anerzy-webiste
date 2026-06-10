import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";
import { cx } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Max-width wrapper with consistent horizontal padding, from tokens. */
export function Container({
  children,
  as: Tag = "div",
  className,
}: ContainerProps) {
  return <Tag className={cx(styles.container, className)}>{children}</Tag>;
}
