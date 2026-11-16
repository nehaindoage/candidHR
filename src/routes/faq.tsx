import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/faq/FaqPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - screening, interviews, integrations and pricing | CandidHR.ai" },
      {
        name: "description",
        content:
          "Answers on AI screening, automated video interviews, assessments, ATS integrations, data security and plans. Search by topic or browse all frequently asked questions.",
      },
      { property: "og:title", content: "CandidHR.ai frequently asked questions" },
      {
        property: "og:description",
        content:
          "Search answers on screening, interviews, assessments, integrations, security and pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});
