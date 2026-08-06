import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Blog",
  description: "News, updates, and writing from the ACME Corp team.",
};

export default function Blog() {
  return <main className="flex flex-1 items-center justify-center">Blog</main>;
}
