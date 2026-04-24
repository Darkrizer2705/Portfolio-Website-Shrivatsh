import { motion } from "framer-motion";
import { Activity, BrainCircuit, Bot, Eye, MessageSquare } from "lucide-react";
import { Section } from "../Section";

const interests = [
  {
    icon: Activity,
    title: "Predictive Maintenance & Industrial AI",
    body: "Hybrid pipelines that fuse clustering, classification and regression to forecast equipment degradation before it becomes failure.",
  },
  {
    icon: BrainCircuit,
    title: "Transformer Fine-tuning (LoRA / PEFT)",
    body: "Parameter-efficient adaptation of foundation models so domain-specific reasoning ships without industrial-scale compute.",
  },
  {
    icon: Eye,
    title: "Computer Vision for Robotics",
    body: "Perception systems that bridge sensors and decisions — turning pixels into actions for real-world robotic platforms.",
  },
  {
    icon: Bot,
    title: "Learning and Building Intelligent Robots",
    body: "My research interests focus on learning and building intelligent robotic systems that can perceive, reason, and act autonomously. I am particularly interested in integrating machine learning with robotics to develop adaptive and efficient real-world solutions.",
  },
  {
    icon: MessageSquare,
    title: "Applied NLP for Contextual Reasoning",
    body: "Language models that read messy, real-world text and produce predictions grounded in context, not just keywords.",
  },
];

export function ResearchInterests() {
  return (
    <Section
      id="research"
      index="02"
      eyebrow="Research Interests"
      title="What I'm exploring."
      description="The threads that connect every project I build — from CMAPSS turbofans to F1 race summaries."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2">
        {interests.map((it, i) => {
          const Icon = it.icon;
          const isLastOddItem = interests.length % 2 !== 0 && i === interests.length - 1;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className={`group relative bg-background/80 p-8 ${isLastOddItem ? "sm:col-span-2" : ""}`}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-border/60 bg-card/60 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
