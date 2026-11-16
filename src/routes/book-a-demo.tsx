import { createFileRoute } from "@tanstack/react-router";
import { BookDemoPage } from "@/components/demo/BookDemoPage";

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title: "Book a demo - see CandidHR.ai on your own roles" },
      {
        name: "description",
        content:
          "Bring one live job description and see ranked matches in about 60 seconds. A 30-minute working session on sourcing, screening, assessments and AI interviews.",
      },
      { property: "og:title", content: "Book a CandidHR.ai demo" },
      {
        property: "og:description",
        content:
          "See CandidHR.ai on your own roles — sourcing, screening, assessments and AI interviews in one walkthrough.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookDemoPage,
});
