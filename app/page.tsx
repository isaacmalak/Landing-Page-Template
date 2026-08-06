import type { Metadata } from "next";

// TODO: change this metadata config to what you need
export const metadata: Metadata = {
  //! `absolute` skips the "%s | ACME Corp" template from app/site.config.ts
  
  title: { absolute: "ACME Corp — Innovative Solutions for Business" },
  description:
    "ACME Corp builds high-quality products and services that help businesses worldwide reach their goals.",
};

export default function Home() {
  return (
    <div className="">
      <main className=""></main>
    </div>
  );
}
