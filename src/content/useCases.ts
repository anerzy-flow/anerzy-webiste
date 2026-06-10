import type { ExampleQuestionsContent, UseCaseContent } from "./types";

export const neighborhoodUseCase: UseCaseContent = {
  eyebrow: "Worked example",
  headline: "Example: a neighborhood heat transition",
  useCaseTitle:
    "Can a neighborhood move away from gas without creating new grid, heat, or street-space bottlenecks?",
  copy: "A gemeente has to weigh district heating, heat pumps, and phased paths — each with its own grid, space, cost, and resident impact.",
  coreQuestion:
    "What is the best transition path for this neighborhood, given grid capacity, heat demand, space, cost, and timing?",
  whyMultipleTools:
    "The question crosses heat planning, grid capacity, spatial data, and permit timing — no single model answers it alone.",
  stages: [
    {
      index: "01",
      title: "Inputs",
      items: ["Building stock", "Energy labels", "Heat demand", "Ownership"],
    },
    {
      index: "02",
      title: "Models",
      items: [
        "Heat: district vs. heat pumps",
        "Grid: peak load + capacity",
        "Spatial: street works + permits",
        "Cost + phasing",
      ],
    },
    {
      index: "03",
      title: "Scenario view",
      items: ["Preferred path", "Bottlenecks", "Phasing recommendation"],
      outputs: [
        { label: "Heat strategy feasible", status: "feasible" },
        { label: "Grid reinforcement needed", status: "constraint" },
        { label: "Permit window blocks phase 1", status: "blocked" },
      ],
    },
  ],
  diagramCaption:
    "An example of the planning questions Aenerzy is exploring with municipalities and local energy stakeholders — not a final product workflow.",
};

export const exampleQuestions: ExampleQuestionsContent = {
  headline: "The questions we want to make easier to answer",
  questions: [
    {
      question:
        "Can this neighborhood electrify without immediate grid reinforcement?",
      output: "Capacity check, flexibility options, phasing recommendation.",
    },
    {
      question: "Which heat strategy fits this district best?",
      output: "District heating vs. heat pumps, with cost and CO2 compared.",
    },
    {
      question: "Where will the first bottleneck appear?",
      output: "Grid, space, permit, cost, or timing constraint.",
    },
  ],
};
