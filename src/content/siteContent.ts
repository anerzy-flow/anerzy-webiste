import type {
  AudienceContent,
  CtaContent,
  HeroContent,
  ProblemContent,
  ProductBoundaryContent,
  SiteMeta,
  ThesisContent,
} from "./types";

/* ----------------------------------------------------------------------------
 * Site metadata + contact.
 * NOTE: contactEmail is a placeholder — replace with the real address.
 * It is the single source for the "Start a conversation" mailto CTA.
 * -------------------------------------------------------------------------- */
export const meta: SiteMeta = {
  brand: "Aenerzy",
  tagline: "Orchestrating the tools behind your energy decisions.",
  contactEmail: "hello@aenerzy.com",
  contactSubject: "Aenerzy — starting a conversation",
};

export const hero: HeroContent = {
  headline: "Orchestrating the tools behind your energy decisions.",
  subheadline:
    "Ask a planning question in your own words. Aenerzy connects the right models and data, runs the scenario, and returns an answer you can act on.",
  primaryCta: "Start a conversation",
  secondaryCta: { label: "Explore the thesis", href: "#thesis" },
};

export const problem: ProblemContent = {
  headline:
    "Local energy planning is connected in reality, but fragmented in practice.",
  columns: [
    {
      title: "Models are isolated",
      text: "Heat, grid, and flexibility tools answer separate questions — even when the decision depends on all of them.",
    },
    {
      title: "Data moves manually",
      text: "Spreadsheets, exports, and one-off workflows still carry the data between tools.",
    },
    {
      title: "Decisions arrive late",
      text: "Grid, spatial, and permit constraints surface after plans have gained momentum.",
    },
  ],
};

export const thesis: ThesisContent = {
  eyebrow: "Our thesis",
  headline: "Our thesis",
  main: "The next step in energy planning is not another standalone model. It is an orchestration layer that makes existing models, datasets, and experts work together.",
  supporting:
    "Aenerzy connects trusted tools, guides users to the right questions, and produces scenario outputs that are easy to compare and explain.",
  smallLine: "Connect existing tools. Test scenarios. Explain trade-offs.",
};

export const productBoundary: ProductBoundaryContent = {
  headline: "What this is, and what it is not",
  is: {
    title: "This is",
    bullets: [
      "An orchestration layer for energy digital twin tools.",
      "A guided scenario workflow for local energy planning.",
      "A privacy-aware, federated approach — data stays with its owner.",
    ],
  },
  isNot: {
    title: "This is not",
    bullets: [
      "Not a custom modeling consultancy.",
      "Not another dashboard.",
      "Not a claim that one model solves the energy transition.",
    ],
  },
};

export const audience: AudienceContent = {
  headline: "Who we want to learn from",
  blocks: [
    {
      title: "Municipalities",
      text: "Planning heat, electricity, mobility, and public space under real constraints.",
    },
    {
      title: "Energy hubs",
      text: "Coordinating local generation, storage, demand, and flexibility.",
    },
    {
      title: "Business parks",
      text: "Exploring electrification, charging, grid limits, and flexibility.",
    },
    {
      title: "Grid and heat experts",
      text: "Working with the models and assumptions that decisions depend on.",
    },
    {
      title: "Consultants and planners",
      text: "Turning technical analysis into choices organizations can act on.",
    },
  ],
};

export const cta: CtaContent = {
  headline: "If this problem sounds familiar, we would like to learn from you.",
  text: "We are shaping Aenerzy with people who work on local energy planning, grid congestion, heat transition, and electrification.",
  primaryCta: "Start a conversation",
  secondaryText:
    "No pitch deck required. We are interested in real workflows and real planning questions.",
  // PLACEHOLDERS — replace names and lines with the real people.
  whoWeAre: {
    title: "Who we are",
    people: [
      {
        name: "[Founder name]",
        line: "[One line: background and why local energy planning matters to you.]",
      },
      {
        name: "[Co-founder name]",
        line: "[One line: background — e.g. simulation tooling, grid modeling, software.]",
      },
    ],
    note: "Based in the Netherlands, working in conversation with the people who plan the energy transition.",
  },
};

/** Convenience: the mailto href used by every "Start a conversation" CTA. */
export const contactHref = `mailto:${meta.contactEmail}?subject=${encodeURIComponent(
  meta.contactSubject,
)}`;
