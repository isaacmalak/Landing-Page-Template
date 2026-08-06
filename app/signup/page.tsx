import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an ACME Corp account and get started in minutes.",
};

export default function Signup() {
  return (
    <main className="flex flex-1 items-center justify-center">Sign up</main>
  );
}
