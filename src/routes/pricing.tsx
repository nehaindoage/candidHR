import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/pricing/PricingPage";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing - plans that scale with your hiring | CandidHR.ai" },
      {
        name: "description",
        content:
          "Start free on one real role, then scale with Growth at $399/mo or Enterprise with white label and SLA. Compare AI screening, interviews, assessments and ATS sync across plans.",
      },
      { property: "og:title", content: "CandidHR.ai pricing" },
      {
        property: "og:description",
        content:
          "Free, Growth and Enterprise plans for AI screening, interviews and assessments. Annual billing saves 20%.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});
