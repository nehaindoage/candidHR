import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/solutions/SolutionsPage";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions - hiring by team and volume | CandidHR.ai" },
      {
        name: "description",
        content:
          "One platform tuned to how you hire: talent acquisition, high-volume hiring, campus and early careers, staffing agencies and startups — from a single role to a thousand-applicant drive.",
      },
      { property: "og:title", content: "CandidHR.ai solutions for every hiring team" },
      {
        property: "og:description",
        content:
          "Talent acquisition, high-volume, campus hiring, staffing agencies and startups — same platform, tuned to your volume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});
