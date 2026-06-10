import { motion } from "motion/react";
import styles from "./AudienceSection.module.css";
import { Section } from "../primitives/Section";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import { audience } from "../../content/siteContent";

export function AudienceSection() {
  return (
    <Section id="audience" eyebrow="Audience">
      <h2 className={styles.headline}>{audience.headline}</h2>

      <motion.div
        className={styles.grid}
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {audience.blocks.map((block) => (
          <motion.article
            key={block.title}
            className={styles.block}
            variants={staggerItem}
          >
            <h3 className={styles.title}>{block.title}</h3>
            <p className={styles.text}>{block.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
