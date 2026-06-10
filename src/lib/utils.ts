/** Tiny classNames joiner — keeps CSS Module composition readable. */
export function cx(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
