import type { NavItem } from "./types";

/* Anchor-based nav for the single-page concept site. Section ids live on the
 * matching <Section> components. When future pages are added (/use-cases,
 * /technology, /about ...), swap these hrefs for routes. */
export const navItems: NavItem[] = [
  { label: "Thesis", href: "#thesis" },
  { label: "Workflow", href: "#workflow" },
  { label: "Amsterdam example", href: "#amsterdam" },
  { label: "Questions", href: "#questions" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];
