import styles from "./UseCaseSection.module.css";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { UseCaseDiagram } from "../diagrams/UseCaseDiagram";
import { amsterdamUseCase } from "../../content/useCases";

export function UseCaseSection() {
  const uc = amsterdamUseCase;
  return (
    <Section id="amsterdam" eyebrow={uc.eyebrow} tone="surface">
      <Reveal>
        <h2 className={styles.headline}>{uc.headline}</h2>
      </Reveal>

      <div className={styles.intro}>
        <Reveal className={styles.introMain}>
          <p className={styles.useCaseTitle}>{uc.useCaseTitle}</p>
          <p className={styles.copy}>{uc.copy}</p>
        </Reveal>

        <Reveal delay={0.08} className={styles.aside}>
          <div className={styles.coreQuestion}>
            <p className={styles.coreLabel}>Core question</p>
            <p className={styles.coreText}>{uc.coreQuestion}</p>
          </div>
          <p className={styles.why}>{uc.whyMultipleTools}</p>
        </Reveal>
      </div>

      <div className={styles.diagram}>
        <UseCaseDiagram stages={uc.stages} />
      </div>

      <Reveal>
        <p className={styles.caption}>{uc.diagramCaption}</p>
      </Reveal>
    </Section>
  );
}
