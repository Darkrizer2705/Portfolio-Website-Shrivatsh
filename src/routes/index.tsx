import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { PersonalDetails } from "@/components/sections/PersonalDetails";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shrivatsh Kuppusubramaniam — AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Shrivatsh Kuppusubramaniam — AI/ML Engineer building predictive maintenance systems, transformer-based NLP models, and scalable ML pipelines.",
      },
      { property: "og:title", content: "Shrivatsh Kuppusubramaniam — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Predictive maintenance, transformer fine-tuning, and shipped ML systems with measurable impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ResearchInterests />
      <PersonalDetails />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
