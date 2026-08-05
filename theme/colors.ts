/**
 * Every color in the app. This is the only file you edit to rebrand.
 *
 * A key here becomes three things at once, with no renaming in between:
 *   `primary`  ->  utility `bg-primary` / `text-primary`  ->  var `--theme-primary`
 *
 * Add a key to `light`, give it a value in `dark`, and it's live. TypeScript will
 * complain if `dark` is missing one.
 */

export const light = {
  background: "#ffffff",
  foreground: "#1c1917",
  surface: "#fafaf9",
  border: "#e7e5e4",
  muted: "#78716c",
  primary: "#9f1239",
  "primary-hover": "#881337",
  "primary-foreground": "#ffffff",
};

export type ColorToken = keyof typeof light;

export const dark = {
  background: "#140c0f",
  foreground: "#faf9f8",
  surface: "#20141a",
  border: "#3a2530",
  muted: "#a8a29e",
  primary: "#be123c",
  "primary-hover": "#e11d48",
  "primary-foreground": "#ffffff",
};

/** Handed to Tailwind in tailwind.config.ts so utilities follow the active scheme. */
export const colors = Object.fromEntries(
  Object.keys(light).map((token) => [token, `var(--theme-${token})`])
) as Record<ColorToken, string>;

const declare = (scheme: Record<ColorToken, string>) =>
  Object.entries(scheme)
    .map(([token, value]) => `--theme-${token}: ${value};`)
    .join(" ");

/** The generated stylesheet. Rendered once in app/layout.tsx. */
export const themeCss = `
:root { color-scheme: light; ${declare(light)} }
@media (prefers-color-scheme: dark) {
  :root { color-scheme: dark; ${declare(dark)} }
}
`;
