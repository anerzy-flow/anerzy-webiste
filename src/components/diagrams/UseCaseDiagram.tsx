import { Fragment } from "react";
import { motion } from "motion/react";
import styles from "./UseCaseDiagram.module.css";
import { cx } from "../../lib/utils";
import { Reveal } from "../primitives/Reveal";
import { StatusIndicator } from "../primitives/StatusIndicator";
import { staggerContainer, staggerItem, VIEWPORT } from "../../lib/animation";
import type { UseCaseStage } from "../../content/types";

interface UseCaseDiagramProps {
  stages: UseCaseStage[];
}

/** Five-stage planning pipeline. Stages fade in on scroll; the final scenario
 * view resolves into green / amber / red feasibility indicators. */
export function UseCaseDiagram({ stages }: UseCaseDiagramProps) {
  return (
    <div className={styles.flow} role="group" aria-label="Amsterdam neighborhood heat-transition pipeline">
      {stages.map((stage, i) => {
        const isFinal = i === stages.length - 1;
        return (
          <Fragment key={stage.index}>
            <Reveal delay={i * 0.07} className={styles.stageWrap}>
              <div className={cx(styles.stage, isFinal && styles.stageFinal)}>
                <p className={styles.index}>Stage {stage.index}</p>
                <h3 className={styles.title}>{stage.title}</h3>
                <ul className={styles.items}>
                  {stage.items.map((item) => (
                    <li key={item} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>

                {stage.outputs && (
                  <motion.ul
                    className={styles.outputs}
                    variants={staggerContainer(0.12, 0.25)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                  >
                    {stage.outputs.map((output) => (
                      <motion.li key={output.label} variants={staggerItem}>
                        <StatusIndicator
                          status={output.status}
                          label={output.label}
                        />
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </Reveal>

            {!isFinal && <span className={styles.connector} aria-hidden="true" />}
          </Fragment>
        );
      })}
    </div>
  );
}
