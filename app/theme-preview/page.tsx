/*
 * Scratch page for eyeballing the palette. Delete it whenever.
 * Class names are literal because Tailwind scans source text — `bg-${token}` would
 * never generate a utility.
 */
const swatches = [
  "bg-background",
  "bg-surface",
  "bg-border",
  "bg-muted",
  "bg-primary",
  "bg-primary-hover",
];

export default function ThemePreview() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 p-10">
      <h1 className="text-2xl font-bold">Theme preview</h1>

      <div className="grid grid-cols-3 gap-3">
        {swatches.map((className) => (
          <div key={className} className="flex flex-col gap-1.5">
            <div className={`${className} h-16 rounded-md border border-border`} />
            <code className="font-mono text-xs text-muted">{className}</code>
          </div>
        ))}
      </div>

      <p className="text-muted">
        Muted body copy. Switch your OS to dark mode to watch everything follow.
      </p>

      <button className="w-fit rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary-hover">
        Primary button
      </button>
    </main>
  );
}
