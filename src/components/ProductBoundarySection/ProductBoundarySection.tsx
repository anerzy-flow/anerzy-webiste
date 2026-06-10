import { motion } from "motion/react";
import styles from "./ProductBoundarySection.module.css";
import { cx } from "../../lib/utils";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import { productBoundary } from "../../content/siteContent";
import { principlesContent } from "../../content/principles";
import type { BoundaryColumn } from "../../content/types";

function Column({
  column,
  variant,
}: {
  column: BoundaryColumn;
  variant: "is" | "isNot";
}) {
  return (
    <div className={cx(styles.column, styles[variant])}>
      <h3 className={styles.title}>{column.title}</h3>
      <ul className={styles.list}>
        {column.bullets.map((bullet) => (
          <li key={bullet} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductBoundarySection() {
  return (
    <Section id="boundary" eyebrow="Product boundary">
      <h2 className={styles.headline}>{productBoundary.headline}</h2>
      <Reveal>
        <div className={styles.grid}>
          <Column column={productBoundary.is} variant="is" />
          <Column column={productBoundary.isNot} variant="isNot" />
        </div>
      </Reveal>

      <motion.ul
        className={styles.principles}
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        aria-label="Principles"
      >
        {principlesContent.principles.map((principle) => (
          <motion.li
            key={principle.text}
            className={styles.principle}
            variants={staggerItem}
          >
            {principle.text}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
