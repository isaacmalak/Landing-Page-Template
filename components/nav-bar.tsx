"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* Edit these three. */
const brand = "Acme";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const cta = { label: "Get started", href: "/signup" };

export function NavBar() {
  const pathname = usePathname();

  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (value: boolean) => setOpenedOn(value ? pathname : null);

  const navLinks = links.map(({ label, href }) => {
    const active = pathname === href;

    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={active ? "text-primary" : "text-muted"}
      >
        {label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-10 border-b border-border flex justify-center bg-background ">
      <nav
        aria-label="Main"
        className="flex h-16 items-center px-4 md:w-4xl"
      >
        <Link href="/" className="font-semibold">
          {brand}
        </Link>

        <div className="hidden gap-6 md:flex mx-auto">{navLinks}</div>

      

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          onClick={() => setOpen(false)}
          className="flex flex-col items-start gap-4  p-4 md:hidden"
        >
          {navLinks}
          <Link
            href={cta.href}
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </header>
  );
}
