import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions for using ACME Corp products and services.",
};

export default function Terms() {
  return <main className="flex flex-1 items-center justify-center">Terms</main>;
}
