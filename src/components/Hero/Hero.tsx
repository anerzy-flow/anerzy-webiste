import { motion } from "motion/react";
import styles from "./Hero.module.css";
import { Container } from "../primitives/Container";
import { Button } from "../primitives/Button";
import { OrchestrationDiagram } from "../diagrams/OrchestrationDiagram";
import { DURATION, EASE_STANDARD } from "../../lib/animation";
import { contactHref, hero } from "../../content/siteContent";

const intro = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const introItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_STANDARD },
  },
};

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <Container>
        <motion.div
          className={styles.intro}
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.headline} variants={introItem}>
            {hero.headline}
          </motion.h1>
          <motion.p className={styles.digitalTwin} variants={introItem}>
            The conductor for digital twin technologies.
          </motion.p>
          <motion.p className={styles.subheadline} variants={introItem}>
            {hero.subheadline}
          </motion.p>
          <motion.div className={styles.actions} variants={introItem}>
            <Button href={contactHref} variant="primary">
              {hero.primaryCta}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="link"
              withArrow
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className={styles.diagram}>
          <OrchestrationDiagram />
        </div>
      </Container>
    </section>
  );
}
