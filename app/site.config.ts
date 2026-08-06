import { Metadata } from "next";

//TODO  Add more site configuration options for your site, don't forget :D
// TODO: change this metadata config to what you need — every page inherits from it,
//? and each app/**/page.tsx overrides title/description on top.

export const metadataBase: Metadata = {
  title: {
    default: "ACME Corp",
    template: "%s | ACME Corp",
  },
  description:
    "ACME Corp is a leading provider of innovative solutions for businesses worldwide. Our mission is to deliver high-quality products and services that empower our clients to achieve their goals.",
  keywords: [
    "ACME Corp",
    "Innovative Solutions",
    "Business Services",
    "Technology",
    "Global Reach",
  ],
  authors: [{ name: "ACME Corp Team" }],
  openGraph: {
    title: "ACME Corp",
    description:
      "ACME Corp is a leading provider of innovative solutions for businesses worldwide. Our mission is to deliver high-quality products and services that empower our clients to achieve their goals.",
    url: "https://www.acmecorp.com",
    siteName: "ACME Corp",
    images: [
      {
        url: "https://www.acmecorp.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACME Corp",
    description:
      "ACME Corp is a leading provider of innovative solutions for businesses worldwide. Our mission is to deliver high-quality products and services that empower our clients to achieve their goals.",
    images: ["https://www.acmecorp.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
