import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "About",
  description: "Learn more about ACME Corp and our mission.",
};

export default function About() {
  return <main className="flex flex-1 items-center justify-center">About</main>;
}
