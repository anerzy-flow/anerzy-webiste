import { motion } from "motion/react";
import styles from "./ExampleQuestions.module.css";
import { Section } from "../primitives/Section";
import { QuestionCard } from "./QuestionCard";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import { exampleQuestions } from "../../content/useCases";

export function ExampleQuestions() {
  return (
    <Section id="questions" eyebrow="Example questions">
      <h2 className={styles.headline}>{exampleQuestions.headline}</h2>

      <motion.div
        className={styles.grid}
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {exampleQuestions.questions.map((item) => (
          <motion.div key={item.question} variants={staggerItem}>
            <QuestionCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
