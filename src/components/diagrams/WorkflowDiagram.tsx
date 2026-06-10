import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import styles from "./WorkflowDiagram.module.css";
import { cx } from "../../lib/utils";
import type { WorkflowStep } from "../../content/types";

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

/** Four UI-like step blocks joined by a connector that fills as the section
 * scrolls; each step highlights once the progress line reaches it. */
export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);

  // Progress through the block as it travels across the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const count = Math.min(steps.length, Math.floor(v * steps.length) + 1);
    setReached(count);
  });

  return (
    <div className={styles.wrap} ref={ref}>
      {/* connector track + scroll-driven fill (horizontal on desktop) */}
      <div className={styles.trackH} aria-hidden="true">
        <motion.div
          className={styles.fillH}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      {/* connector track + fill (vertical on mobile) */}
      <div className={styles.trackV} aria-hidden="true">
        <motion.div
          className={styles.fillV}
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const isActive = i < reached;
          return (
            <li
              key={step.index}
              className={cx(styles.step, isActive && styles.stepActive)}
            >
              <span className={styles.index}>{step.index}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
