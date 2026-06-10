import type {
  AudienceContent,
  CtaContent,
  HeroContent,
  ProblemContent,
  ProductBoundaryContent,
  SiteMeta,
  ThesisContent,
  WorkflowContent,
} from "./types";

/* ----------------------------------------------------------------------------
 * Site metadata + contact.
 * NOTE: contactEmail is a placeholder — replace with the real address.
 * It is the single source for the "Start a conversation" mailto CTA.
 * -------------------------------------------------------------------------- */
export const meta: SiteMeta = {
  brand: "Aenerzy",
  tagline: "Orchestrating the tools behind local energy decisions.",
  contactEmail: "hello@aenerzy.com",
  contactSubject: "Aenerzy — starting a conversation",
};

export const hero: HeroContent = {
  headline: "Orchestrating the tools behind local energy decisions.",
  subheadline:
    "Aenerzy is exploring how municipalities and energy hubs can connect fragmented models, data, and planning workflows into clearer scenario decisions.",
  primaryCta: "Start a conversation",
  secondaryCta: { label: "Explore the thesis", href: "#thesis" },
};

export const problem: ProblemContent = {
  headline:
    "Local energy planning is connected in reality, but fragmented in practice.",
  columns: [
    {
      title: "Models are isolated",
      text: "Heat, electricity, mobility, and flexibility tools often answer separate questions, even when the decisions depend on each other.",
    },
    {
      title: "Data moves manually",
      text: "Teams still rely on spreadsheets, exports, assumptions, and one-off workflows to compare scenarios.",
    },
    {
      title: "Decisions arrive late",
      text: "Grid, spatial, cost, or permit constraints are often discovered after plans have already gained momentum.",
    },
  ],
};

export const thesis: ThesisContent = {
  eyebrow: "Our thesis",
  headline: "Our thesis",
  main: "The next step in energy planning is not another standalone model. It is an orchestration layer that helps existing models, datasets, and experts work together.",
  supporting:
    "Aenerzy is exploring this layer: a way to connect trusted tools, guide users through the right questions, and produce scenario outputs that are easier to compare and explain.",
  smallLine: "Connect existing tools. Test scenarios. Explain trade-offs.",
};

export const workflow: WorkflowContent = {
  headline: "What Aenerzy could become",
  steps: [
    {
      index: "01",
      title: "Connect",
      text: "Link existing models, datasets, APIs, spreadsheets, and planning tools.",
    },
    {
      index: "02",
      title: "Orchestrate",
      text: "Coordinate model inputs, assumptions, data flows, and dependencies.",
    },
    {
      index: "03",
      title: "Simulate",
      text: "Run scenario questions across heat, grid, space, cost, and flexibility.",
    },
    {
      index: "04",
      title: "Explain",
      text: "Return outputs that planners, experts, and decision-makers can understand.",
    },
  ],
};

export const productBoundary: ProductBoundaryContent = {
  headline: "What this is, and what it is not",
  is: {
    title: "This is",
    bullets: [
      "An orchestration concept for energy digital twin tools.",
      "A way to connect existing models and datasets.",
      "A guided scenario workflow for local energy planning.",
      "A bridge between experts and non-expert decision-makers.",
      "A privacy-aware, federated approach where data can stay with its owner.",
    ],
  },
  isNot: {
    title: "This is not",
    bullets: [
      "Not a custom modeling consultancy.",
      "Not just another dashboard.",
      "Not a replacement for every digital twin tool.",
      "Not a claim that one model can solve the whole energy transition.",
      "Not a finished platform yet.",
    ],
  },
};

export const audience: AudienceContent = {
  headline: "Who we want to learn from",
  blocks: [
    {
      title: "Municipalities",
      text: "Planning heat, electricity, mobility, housing, and public space under real constraints.",
    },
    {
      title: "Energy hubs",
      text: "Coordinating local generation, storage, demand, and flexibility.",
    },
    {
      title: "Business parks",
      text: "Exploring electrification, charging, grid limits, and operational flexibility.",
    },
    {
      title: "Grid and heat experts",
      text: "Working with the models and assumptions that decisions depend on.",
    },
    {
      title: "Consultants and planners",
      text: "Turning technical analysis into choices that organizations can act on.",
    },
  ],
};

export const cta: CtaContent = {
  headline: "If this problem sounds familiar, we would like to learn from you.",
  text: "We are shaping Aenerzy by speaking with people who work on local energy planning, grid congestion, heat transition, energy hubs, and business electrification.",
  primaryCta: "Start a conversation",
  secondaryText:
    "No pitch deck required. We are interested in workflows, bottlenecks, and real planning questions.",
};

/** Convenience: the mailto href used by every "Start a conversation" CTA. */
export const contactHref = `mailto:${meta.contactEmail}?subject=${encodeURIComponent(
  meta.contactSubject,
)}`;
