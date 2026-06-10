import { useState } from "react";
import { motion } from "motion/react";
import styles from "./OrchestrationDiagram.module.css";
import { cx } from "../../lib/utils";
import { DURATION, EASE_STANDARD, VIEWPORT } from "../../lib/animation";

/* ---- Diagram data (single source for both the SVG and the mobile stack) ---- */
const INPUTS = [
  "Heat model",
  "Grid model",
  "GIS",
  "Permits",
  "Flexibility",
  "Building data",
];
const OUTPUTS = ["Scenario view", "Traffic-light check", "Decision note"];
/* Which output each input lights up on hover. */
const INPUT_TO_OUTPUT = [0, 1, 2, 2, 0, 1];

/* ---- SVG geometry (fixed viewBox; scales responsively) ---- */
const VB = { w: 960, h: 480 };
const INPUT = { x: 30, w: 200, h: 50, top: 45, step: 68 };
const CENTER = { x: 380, y: 165, w: 200, h: 150 };
const OUTPUT = { x: 730, w: 200, h: 64, top: 108, step: 100 };

const inputY = (i: number) => INPUT.top + i * INPUT.step;
const outputY = (i: number) => OUTPUT.top + i * OUTPUT.step;

/* Connector endpoints fan evenly across the center module's edges. */
const centerLeftY = (i: number) => 175 + i * 26; // 6 inputs
const centerRightY = (i: number) => 190 + i * 50; // 3 outputs

const inputPath = (i: number) => {
  const y0 = inputY(i) + INPUT.h / 2;
  const y1 = centerLeftY(i);
  return `M ${INPUT.x + INPUT.w} ${y0} C 305 ${y0}, 305 ${y1}, ${CENTER.x} ${y1}`;
};

const outputPath = (i: number) => {
  const y0 = centerRightY(i);
  const y1 = outputY(i) + OUTPUT.h / 2;
  return `M ${CENTER.x + CENTER.w} ${y0} C 655 ${y0}, 655 ${y1}, ${OUTPUT.x} ${y1}`;
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_STANDARD },
  },
};
const fadeNode = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE_STANDARD },
  },
};

export function OrchestrationDiagram() {
  const [active, setActive] = useState<number | null>(null);
  const activeOutput = active === null ? null : INPUT_TO_OUTPUT[active];

  return (
    <div className={styles.wrap}>
      {/* ---- Desktop / tablet: scalable SVG ---- */}
      <motion.svg
        className={styles.svg}
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        role="img"
        aria-label="Aenerzy orchestration layer connecting input models — heat model, grid model, GIS, permits, flexibility, and building data — into outputs: a scenario view, a traffic-light check, and a decision note."
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {/* connector lines (drawn first, nodes sit on top) */}
        <g fill="none" strokeLinecap="round">
          {INPUTS.map((_, i) => (
            <motion.path
              key={`in-${i}`}
              d={inputPath(i)}
              variants={drawLine}
              className={cx(styles.line, active === i && styles.lineActive)}
            />
          ))}
          {OUTPUTS.map((_, i) => (
            <motion.path
              key={`out-${i}`}
              d={outputPath(i)}
              variants={drawLine}
              className={cx(
                styles.line,
                activeOutput === i && styles.lineActive,
              )}
            />
          ))}
        </g>

        {/* input nodes */}
        {INPUTS.map((label, i) => (
          <motion.g
            key={label}
            variants={fadeNode}
            className={styles.nodeGroup}
            onPointerEnter={() => setActive(i)}
            onPointerLeave={() => setActive(null)}
          >
            <rect
              className={cx(styles.node, active === i && styles.nodeActive)}
              x={INPUT.x}
              y={inputY(i)}
              width={INPUT.w}
              height={INPUT.h}
              rx={8}
            />
            <text
              className={styles.nodeLabel}
              x={INPUT.x + INPUT.w / 2}
              y={inputY(i) + INPUT.h / 2}
            >
              {label}
            </text>
          </motion.g>
        ))}

        {/* center orchestration module */}
        <motion.g variants={fadeNode}>
          <rect
            className={styles.center}
            x={CENTER.x}
            y={CENTER.y}
            width={CENTER.w}
            height={CENTER.h}
            rx={8}
          />
          <text
            className={styles.centerEyebrow}
            x={CENTER.x + CENTER.w / 2}
            y={CENTER.y + 34}
          >
            ORCHESTRATION LAYER
          </text>
          <text
            className={styles.centerLabel}
            x={CENTER.x + CENTER.w / 2}
            y={CENTER.y + 78}
          >
            Aenerzy
          </text>
          <text
            className={styles.centerSub}
            x={CENTER.x + CENTER.w / 2}
            y={CENTER.y + 110}
          >
            connects trusted tools
          </text>
        </motion.g>

        {/* output nodes */}
        {OUTPUTS.map((label, i) => (
          <motion.g key={label} variants={fadeNode}>
            <rect
              className={cx(
                styles.node,
                styles.outputNode,
                activeOutput === i && styles.nodeActive,
              )}
              x={OUTPUT.x}
              y={outputY(i)}
              width={OUTPUT.w}
              height={OUTPUT.h}
              rx={8}
            />
            <text
              className={styles.nodeLabel}
              x={OUTPUT.x + OUTPUT.w / 2}
              y={outputY(i) + OUTPUT.h / 2}
            >
              {label}
            </text>
          </motion.g>
        ))}
      </motion.svg>

      {/* ---- Mobile: stacked, semantic HTML ---- */}
      <div className={styles.stack} aria-hidden={false}>
        <div className={styles.stackGroup}>
          <p className={styles.stackLabel}>Inputs</p>
          <ul className={styles.chips}>
            {INPUTS.map((label) => (
              <li key={label} className={styles.chip}>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <span className={styles.stackArrow} aria-hidden="true" />
        <div className={cx(styles.stackGroup, styles.stackCenter)}>
          <p className={styles.stackCenterEyebrow}>Orchestration layer</p>
          <p className={styles.stackCenterTitle}>Aenerzy</p>
        </div>
        <span className={styles.stackArrow} aria-hidden="true" />
        <div className={styles.stackGroup}>
          <p className={styles.stackLabel}>Outputs</p>
          <ul className={styles.chips}>
            {OUTPUTS.map((label) => (
              <li key={label} className={cx(styles.chip, styles.chipOutput)}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
