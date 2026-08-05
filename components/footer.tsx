import Link from "next/link";

const brand = "Acme";
const tagline = "Brand, product and web design for teams that ship.";

const columns = [
  {
    title: "Contact",
    items: [
      { label: "hello@acme.com", href: "mailto:hello@acme.com" },
      { label: "+1 (555) 010 0199", href: "tel:+15550100199" },
    ],
  },
  {
    title: "Follow",
    items: [
      { label: "GitHub", href: "https://github.com" },
      { label: "X", href: "https://x.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="flex justify-center border-t border-border">
      <div className="flex flex-col gap-10 px-4 py-12 md:w-4xl">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-xs flex-col gap-3">
            <Link href="/" className="font-semibold">
              {brand}
            </Link>
            <p className="text-muted">{tagline}</p>
          </div>

          {columns.map(({ title, items }) => (
            <div key={title} className="flex flex-col gap-3">
              <h2 className="font-medium">{title}</h2>
              {items.map(({ label, href }) => (
                <Link key={href} href={href} className="text-muted">
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-border py-6 text-muted">
          <p>
            © {new Date().getFullYear()} {brand}
          </p>

          <div className="flex gap-6">
            {legal.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
