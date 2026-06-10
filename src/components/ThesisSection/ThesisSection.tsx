import styles from "./ThesisSection.module.css";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { thesis } from "../../content/siteContent";

export function ThesisSection() {
  return (
    <Section id="thesis" eyebrow={thesis.eyebrow}>
      <div className={styles.grid}>
        <Reveal>
          <h2 className={styles.headline}>{thesis.headline}</h2>
        </Reveal>
        <div className={styles.body}>
          <Reveal>
            <p className={styles.main}>{thesis.main}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className={styles.supporting}>{thesis.supporting}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.smallLine}>{thesis.smallLine}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
