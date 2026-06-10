import { useId, useState } from "react";
import styles from "./ExampleQuestions.module.css";
import { cx } from "../../lib/utils";
import type { ExampleQuestion } from "../../content/types";

/** Interactive question card. The "possible output" is revealed on hover
 * (pointer) and on click / Enter (keyboard + touch), so every input mode works. */
export function QuestionCard({ item }: { item: ExampleQuestion }) {
  const [open, setOpen] = useState(false);
  const outputId = useId();

  return (
    <button
      type="button"
      className={cx(styles.card, open && styles.cardOpen)}
      aria-expanded={open}
      aria-controls={outputId}
      onClick={() => setOpen((v) => !v)}
    >
      <span className={styles.cardHead}>
        <span className={styles.question}>{item.question}</span>
        <span className={styles.toggle} aria-hidden="true" />
      </span>
      <span id={outputId} className={styles.output}>
        <span className={styles.outputInner}>
          <span className={styles.outputLabel}>Possible output</span>
          <span className={styles.outputText}>{item.output}</span>
        </span>
      </span>
    </button>
  );
}
