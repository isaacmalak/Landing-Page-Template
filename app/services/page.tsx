import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the services ACME Corp offers and find the right fit for your team.",
};

export default function Services() {
  return (
    <main className="flex flex-1 items-center justify-center">Services</main>
  );
}
