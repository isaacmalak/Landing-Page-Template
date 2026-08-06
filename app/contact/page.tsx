import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ACME Corp team.",
};

export default function Contact() {
  return (
    <main className="flex flex-1 items-center justify-center">Contact</main>
  );
}
