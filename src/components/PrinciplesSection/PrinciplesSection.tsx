import { motion } from "motion/react";
import styles from "./PrinciplesSection.module.css";
import { Section } from "../primitives/Section";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import { principlesContent } from "../../content/principles";

export function PrinciplesSection() {
  return (
    <Section id="principles" eyebrow="Principles" tone="surface">
      <h2 className={styles.headline}>{principlesContent.headline}</h2>

      <motion.ol
        className={styles.list}
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {principlesContent.principles.map((principle, i) => (
          <motion.li
            key={principle.text}
            className={styles.item}
            variants={staggerItem}
          >
            <span className={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={styles.text}>{principle.text}</span>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
