import type { ExampleQuestionsContent, UseCaseContent } from "./types";

export const amsterdamUseCase: UseCaseContent = {
  eyebrow: "Amsterdam example",
  headline: "Example question: Amsterdam neighborhood heat transition",
  useCaseTitle:
    "Can an Amsterdam neighborhood move away from gas without creating new grid, heat, or street-space bottlenecks?",
  copy: "A municipality may need to compare district heating, individual heat pumps, hybrid heat pumps, and phased transition paths. Each option affects electricity demand, heat infrastructure, public-space disruption, cost, and resident impact.",
  coreQuestion:
    "For a selected Amsterdam neighborhood, what is the best transition path considering grid capacity, heat demand, public-space constraints, cost, timing, and resident vulnerability?",
  whyMultipleTools:
    "No single model can answer this alone. The question crosses heat planning, electricity capacity, GIS, building data, social indicators, and permit timing.",
  stages: [
    {
      index: "01",
      title: "Neighborhood inputs",
      items: [
        "Building type",
        "Energy labels",
        "Heat demand",
        "Ownership",
        "Income / vulnerability indicators",
      ],
    },
    {
      index: "02",
      title: "Heat model",
      items: [
        "District heating",
        "Individual heat pumps",
        "Hybrid heat pumps",
        "Thermal storage",
        "Source mix",
      ],
    },
    {
      index: "03",
      title: "Grid model",
      items: [
        "Peak load",
        "Transformer pressure",
        "Cable capacity",
        "Reinforcement need",
      ],
    },
    {
      index: "04",
      title: "Spatial and planning layer",
      items: [
        "Underground space",
        "Street works",
        "Station locations",
        "Permit timing",
        "Coordination with other projects",
      ],
    },
    {
      index: "05",
      title: "Aenerzy scenario view",
      items: [
        "Feasibility score",
        "Bottlenecks",
        "Preferred transition path",
        "Phasing recommendation",
        "Decision note",
      ],
      outputs: [
        { label: "Heat strategy feasible", status: "feasible" },
        { label: "Grid reinforcement needed", status: "constraint" },
        { label: "Permit window blocks phase 1", status: "blocked" },
      ],
    },
  ],
  diagramCaption:
    "This is not a final product workflow. It is an example of the kind of planning question Aenerzy is exploring with municipalities and local energy stakeholders.",
};

export const exampleQuestions: ExampleQuestionsContent = {
  headline: "The questions we want to make easier to answer",
  questions: [
    {
      question:
        "Can this neighborhood electrify without immediate grid reinforcement?",
      output: "Capacity check, flexibility options, and phasing recommendation.",
    },
    {
      question: "What happens if heat-pump adoption doubles?",
      output: "Grid impact, heat-demand shift, and investment pressure.",
    },
    {
      question: "Which heat strategy fits this district best?",
      output:
        "Comparison of district heating, heat pumps, storage, cost, and CO2.",
    },
    {
      question: "Where will the first bottleneck appear?",
      output: "Grid, space, permit, cost, or timing constraint.",
    },
    {
      question: "Which tools and data should be used for this decision?",
      output: "Guided workflow for non-expert users.",
    },
  ],
};
