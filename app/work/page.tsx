import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Work",
  description: "A selection of projects and case studies from ACME Corp.",
};

export default function Work() {
  return <main className="flex flex-1 items-center justify-center">Work</main>;
}
