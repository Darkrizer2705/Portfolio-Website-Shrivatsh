import { motion } from "framer-motion";
import { Trophy, Award, Sparkles } from "lucide-react";
import { Section } from "../Section";
import { achievements, certifications } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section
      id="achievements"
      index="05"
      eyebrow="Recognition"
      title="Shipped under pressure. Measured by outcome."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {/* Hackathon — wide hero card */}
        {achievements.map((a) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card/40 to-card/40 p-8 shadow-elevated lg:col-span-3 lg:p-10"
          >
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="mono-eyebrow mb-4 flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-primary" />
                  24h Build · Pitch · Win
                </div>
                <h3 className="font-display text-3xl leading-tight sm:text-4xl">{a.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{a.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-3 py-1 font-mono text-xs text-primary">
                  <Trophy className="h-3.5 w-3.5" />
                  {a.highlight} · {a.year}
                </div>
              </div>
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border border-primary/40 bg-background/60 text-primary shadow-glow">
                <Trophy className="h-9 w-9" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <Award className="h-6 w-6 text-primary" />
            <h4 className="mt-5 font-display text-xl leading-snug">{c.title}</h4>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {c.issuer} · {c.year}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
