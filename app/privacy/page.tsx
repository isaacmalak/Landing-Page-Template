import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ACME Corp collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return (
    <main className="flex flex-1 items-center justify-center">Privacy</main>
  );
}
