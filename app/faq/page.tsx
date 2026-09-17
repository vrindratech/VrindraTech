import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about VrindraTech website, mobile app, SaaS, AI, and custom software development services.",
  alternates: {
    canonical: "https://vrindratech.com/faq",
  },
};

export default function FAQPage() {
  return <FAQ />;
}