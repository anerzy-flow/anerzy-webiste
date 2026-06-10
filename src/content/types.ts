/* Shared content shapes. Editing copy means editing the data files that use
 * these types — components never hardcode text. */

export interface CtaLink {
  label: string;
  /** Either an in-page anchor (e.g. "#thesis") or a full href (mailto:, https:). */
  href: string;
}

export interface SiteMeta {
  brand: string;
  /** Short positioning line used in the footer / metadata. */
  tagline: string;
  /** Contact address for the "Start a conversation" mailto CTA. */
  contactEmail: string;
  /** Pre-filled subject line for the mailto CTA. */
  contactSubject: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: CtaLink;
}

export interface ProblemColumn {
  title: string;
  text: string;
}

export interface ProblemContent {
  headline: string;
  columns: ProblemColumn[];
}

export interface ThesisContent {
  eyebrow: string;
  headline: string;
  main: string;
  supporting: string;
  smallLine: string;
}

export interface BoundaryColumn {
  title: string;
  bullets: string[];
}

export interface ProductBoundaryContent {
  headline: string;
  is: BoundaryColumn;
  isNot: BoundaryColumn;
}

export interface AudienceBlock {
  title: string;
  text: string;
}

export interface AudienceContent {
  headline: string;
  blocks: AudienceBlock[];
}

export interface Person {
  name: string;
  /** One human line: background, role, or why they care. */
  line: string;
}

export interface CtaContent {
  headline: string;
  text: string;
  primaryCta: string;
  secondaryText: string;
  /** Short "who we are" block — real people behind the project. */
  whoWeAre: {
    title: string;
    people: Person[];
    note: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export type DiagramStatus = "feasible" | "constraint" | "blocked";

export interface UseCaseStage {
  index: string;
  title: string;
  items: string[];
  /** Status badges only used by the final "scenario view" stage. */
  outputs?: { label: string; status: DiagramStatus }[];
}

export interface UseCaseContent {
  eyebrow: string;
  headline: string;
  useCaseTitle: string;
  copy: string;
  coreQuestion: string;
  whyMultipleTools: string;
  stages: UseCaseStage[];
  diagramCaption: string;
}

export interface ExampleQuestion {
  question: string;
  output: string;
}

export interface ExampleQuestionsContent {
  headline: string;
  questions: ExampleQuestion[];
}

export interface Principle {
  text: string;
}

export interface PrinciplesContent {
  headline: string;
  principles: Principle[];
}
