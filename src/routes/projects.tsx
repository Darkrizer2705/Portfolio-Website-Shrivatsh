import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shrivatsh Kuppusubramaniam" },
      {
        name: "description",
        content:
          "Selected work by Shrivatsh Kuppusubramaniam: predictive maintenance on NASA CMAPSS, LoRA fine-tuned NLP, web platforms, and more — each linked to its GitHub repository.",
      },
      { property: "og:title", content: "Projects — Shrivatsh Kuppusubramaniam" },
      {
        property: "og:description",
        content:
          "ML systems, NLP models and shipped web platforms — each linked to its GitHub source.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-24">
      <Projects />
    </div>
  );
}
