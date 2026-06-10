import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import styles from "./OrchestrationDiagram.module.css";
import { cx } from "../../lib/utils";
import { DURATION, EASE_STANDARD } from "../../lib/animation";

/* ----------------------------------------------------------------------------
 * Auto-playing product demo: one stage on screen at a time.
 * Ask -> Plan -> Select -> Run -> Deliver, looping; each stage has its own
 * duration (Select holds longest — it carries the tool-choosing story).
 * Clicking a step jumps there and pauses; auto-play resumes after IDLE_MS.
 * -------------------------------------------------------------------------- */
const IDLE_MS = 12000;

const STAGES = [
  { index: "01", label: "Ask", ms: 3000 },
  { index: "02", label: "Plan", ms: 3600 },
  { index: "03", label: "Select", ms: 5600 },
  { index: "04", label: "Run", ms: 3200 },
  { index: "05", label: "Deliver", ms: 4200 },
] as const;

const PROMPT =
  "Can this neighborhood move away from gas without creating grid bottlenecks?";

const PLAN_STEPS = [
  "Estimate heat demand per building block",
  "Check local grid capacity against peak load",
  "Compare transition paths and phasing",
];
const CLARIFY = "Which horizon — 2030 or 2040?";

/* Data feeds connect automatically; tools are chosen per analysis domain.
 * Real tool names; monogram badges stand in until official logos are added. */
const DATA_FEEDS = [
  { badge: "BAG", name: "Building stock" },
  { badge: "DSO", name: "Grid capacity" },
  { badge: "3D", name: "City model" },
] as const;

const TOOL_GROUPS = [
  {
    domain: "Heat analysis",
    tone: "heat",
    pickDelay: 1.0,
    tools: [
      { badge: "VM", name: "Vesta MAIS", detail: "heat-transition model", selected: true },
      { badge: "HE", name: "Hestia", detail: "building heat demand", selected: false },
    ],
  },
  {
    domain: "Electricity analysis",
    tone: "grid",
    pickDelay: 1.8,
    tools: [
      { badge: "PP", name: "pandapower", detail: "grid load-flow", selected: true },
      { badge: "PY", name: "PyPSA", detail: "system optimization", selected: false },
    ],
  },
] as const;

const RUN_ITEMS = [
  { label: "Vesta MAIS · heat", state: "done" },
  { label: "pandapower · grid", state: "done" },
  { label: "3D city model · space", state: "running" },
] as const;

const CHART_BARS = [42, 68, 30, 84, 56];

const stageVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE_STANDARD },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: DURATION.fast, ease: EASE_STANDARD },
  },
};

function AskStage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Question</span>
        <span className={styles.liveDot}>your own words</span>
      </div>
      <p className={styles.promptText}>{PROMPT}</p>
    </div>
  );
}

function PlanStage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Plan drafted</span>
        <span>3 steps</span>
      </div>
      <ol className={styles.planList}>
        {PLAN_STEPS.map((step, i) => (
          <li key={step}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className={styles.clarify}>
        <span className={styles.clarifyLabel}>Aenerzy asks</span>
        {CLARIFY}
      </p>
    </div>
  );
}

function SelectStage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Data &amp; tools</span>
        <span>you choose</span>
      </div>
      <p className={styles.selectLead}>
        This question needs heat and electricity analysis — one tool per
        domain.
      </p>

      <div className={styles.feeds} aria-label="Connected data sources">
        {DATA_FEEDS.map((feed, i) => (
          <motion.span
            key={feed.name}
            className={styles.feed}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + i * 0.12,
              duration: 0.3,
              ease: EASE_STANDARD,
            }}
          >
            <span className={styles.feedBadge}>{feed.badge}</span>
            {feed.name}
            <span className={styles.feedDot} aria-hidden="true" />
          </motion.span>
        ))}
      </div>

      <div className={styles.groups}>
        {TOOL_GROUPS.map((group) => (
          <div key={group.domain} className={styles.group}>
            <p className={cx(styles.groupLabel, styles[group.tone])}>
              {group.domain}
            </p>
            {group.tools.map((tool) => (
              <div
                key={tool.name}
                className={cx(styles.tool, !tool.selected && styles.toolAlt)}
              >
                <span className={cx(styles.toolBadge, styles[group.tone])}>
                  {tool.badge}
                </span>
                <span className={styles.toolText}>
                  <strong>{tool.name}</strong>
                  <small>{tool.detail}</small>
                </span>
                {tool.selected ? (
                  <motion.span
                    className={styles.toolPick}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: group.pickDelay,
                      duration: 0.32,
                      ease: EASE_STANDARD,
                    }}
                  >
                    selected
                  </motion.span>
                ) : (
                  <span className={styles.toolAltTag}>alternative</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function RunStage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Running</span>
        <span>2 of 3 complete</span>
      </div>
      <div className={styles.runList}>
        {RUN_ITEMS.map((item) => (
          <div key={item.label} className={styles.runRow}>
            <span
              className={cx(
                styles.runState,
                item.state === "done" ? styles.runDone : styles.runActive,
              )}
              aria-hidden="true"
            />
            <strong>{item.label}</strong>
            <small>{item.state === "done" ? "complete" : "running…"}</small>
            <span className={styles.runTrack} aria-hidden="true">
              <motion.span
                className={styles.runFill}
                initial={{ width: item.state === "done" ? "100%" : "12%" }}
                animate={{ width: item.state === "done" ? "100%" : "78%" }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeliverStage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Scenario answer</span>
        <span className={styles.statusAmber}>constraint found</span>
      </div>
      <div className={styles.deliverBody}>
        <div>
          <h3 className={styles.deliverTitle}>Feasible with phasing</h3>
          <p className={styles.deliverText}>
            Heat-pump adoption can start now; the district path needs grid
            reinforcement after 2030.
          </p>
        </div>
        <svg
          className={styles.chart}
          viewBox="0 0 120 64"
          role="img"
          aria-label="Small bar chart illustrating scenario results."
        >
          {CHART_BARS.map((h, i) => (
            <motion.rect
              key={i}
              x={6 + i * 24}
              width={14}
              rx={2}
              fill={i === 3 ? "var(--color-water)" : "var(--color-ceramic)"}
              stroke={i === 3 ? "none" : "var(--color-border)"}
              initial={{ y: 60, height: 0 }}
              animate={{ y: 60 - (h * 56) / 100, height: (h * 56) / 100 }}
              transition={{
                duration: DURATION.medium,
                ease: EASE_STANDARD,
                delay: 0.15 + i * 0.07,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

const STAGE_CONTENT = [AskStage, PlanStage, SelectStage, RunStage, DeliverStage];

export function OrchestrationDiagram() {
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const autoPlay = !paused && inView && !reducedMotion;

  useEffect(() => {
    if (!autoPlay) return;
    const id = setTimeout(
      () => setStage((s) => (s + 1) % STAGES.length),
      STAGES[stage].ms,
    );
    return () => clearTimeout(id);
  }, [autoPlay, stage]);

  /* Resume auto-play after a period without interaction. */
  useEffect(() => {
    if (!paused) return;
    const id = setTimeout(() => setPaused(false), IDLE_MS);
    return () => clearTimeout(id);
  }, [paused, stage]);

  const goTo = (i: number) => {
    setStage(i);
    setPaused(true);
  };

  const Active = STAGE_CONTENT[stage];

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div className={styles.rail} role="tablist" aria-label="Product demo steps">
        {STAGES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={i === stage}
            className={cx(styles.railItem, i === stage && styles.railActive)}
            onClick={() => goTo(i)}
          >
            <span className={styles.railIndex}>{s.index}</span>
            <span className={styles.railLabel}>{s.label}</span>
            <span className={styles.railTrack} aria-hidden="true">
              {i === stage && autoPlay && (
                <motion.span
                  key={`fill-${stage}`}
                  className={styles.railFill}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: STAGES[stage].ms / 1000, ease: "linear" }}
                />
              )}
              {i === stage && !autoPlay && (
                <span className={cx(styles.railFill, styles.railFillStatic)} />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className={styles.stagePanel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            variants={stageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.stageInner}
          >
            <Active />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
