import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksPage } from "@/components/how-it-works/HowItWorksPage";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works - from job created to ranked shortlist | CandidHR.ai" },
      {
        name: "description",
        content:
          "Seven connected steps: AI drafts the job, posts to 1,000+ boards, sources talent, screens every resume, runs assessments and AI interviews, then syncs a ranked shortlist to your ATS.",
      },
      { property: "og:title", content: "How CandidHR.ai works — job to ranked shortlist" },
      {
        property: "og:description",
        content:
          "Five of seven hiring steps run automatically. Your team approves the role and meets the shortlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});
