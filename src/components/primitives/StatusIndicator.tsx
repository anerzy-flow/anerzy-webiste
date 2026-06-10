import styles from "./StatusIndicator.module.css";
import { cx } from "../../lib/utils";
import type { DiagramStatus } from "../../content/types";

interface StatusIndicatorProps {
  status: DiagramStatus;
  label: string;
  className?: string;
}

const STATUS_TEXT: Record<DiagramStatus, string> = {
  feasible: "Feasible",
  constraint: "Constraint",
  blocked: "Blocked",
};

/** Traffic-light feasibility marker. Used only for decision/status outputs. */
export function StatusIndicator({
  status,
  label,
  className,
}: StatusIndicatorProps) {
  return (
    <span className={cx(styles.indicator, styles[status], className)}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>
        <span className="visually-hidden">{STATUS_TEXT[status]}: </span>
        {label}
      </span>
    </span>
  );
}
