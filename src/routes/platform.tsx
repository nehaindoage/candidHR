import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/components/platform/PlatformPage";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — AI sourcing, screening, assessments & interviews | CandidHR.ai" },
      {
        name: "description",
        content:
          "One platform for everything before round one: source from a 2B+ talent pool, screen every resume, run proctored assessments and AI video interviews, and hand your team a ranked shortlist.",
      },
      {
        property: "og:title",
        content: "CandidHR.ai Platform — everything before round one, connected",
      },
      {
        property: "og:description",
        content:
          "Sourcing, screening, assessments and AI interviews in one place — with a ranked shortlist synced to your ATS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPage,
});
