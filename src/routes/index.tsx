import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CandidHR.ai — AI Recruitment Software for Screening & Interviews" },
      { name: "description", content: "CandidHR.ai sources, screens, assesses and interviews every applicant with AI, then hands your team a ranked shortlist. 153 ATS integrations, 1,000+ job boards." },
      { property: "og:title", content: "CandidHR.ai — AI Recruitment Software for Screening & Interviews" },
      { property: "og:description", content: "AI that sources, screens, assesses and interviews candidates so your team only meets the best. See matches in 60 seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
