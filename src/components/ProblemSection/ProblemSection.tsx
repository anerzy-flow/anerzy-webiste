import { motion } from "motion/react";
import styles from "./ProblemSection.module.css";
import { Section } from "../primitives/Section";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import { problem } from "../../content/siteContent";

export function ProblemSection() {
  return (
    <Section id="problem" eyebrow="The problem">
      <h2 className={styles.headline}>{problem.headline}</h2>

      <motion.div
        className={styles.columns}
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {problem.columns.map((column) => (
          <motion.article
            key={column.title}
            className={styles.column}
            variants={staggerItem}
          >
            <h3 className={styles.title}>{column.title}</h3>
            <p className={styles.text}>{column.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
