import styles from "./WorkflowSection.module.css";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { WorkflowDiagram } from "../diagrams/WorkflowDiagram";
import { workflow } from "../../content/siteContent";

export function WorkflowSection() {
  return (
    <Section id="workflow" eyebrow="Concept workflow">
      <Reveal>
        <h2 className={styles.headline}>{workflow.headline}</h2>
      </Reveal>
      <div className={styles.diagram}>
        <WorkflowDiagram steps={workflow.steps} />
      </div>
    </Section>
  );
}
