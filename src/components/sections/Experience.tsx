import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "../Section";
import { experience, education } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience & Leadership"
      title="A journey of leading and building."
    >
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative grid gap-2 pl-12 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <div className="absolute left-3 top-2 -translate-x-1/2">
                <span className="block h-2.5 w-2.5 rounded-full bg-primary shadow-glow ring-4 ring-background" />
              </div>

              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {e.period}
              </div>

              <div>
                <h3 className="font-display text-2xl">{e.role}</h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.org} · {e.place}
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                    >
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-primary/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-20 rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </span>
        </div>
        <div className="divide-y divide-border/60">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="flex flex-wrap items-baseline justify-between gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div>
                <h4 className="font-display text-xl">{ed.degree}</h4>
                <div className="text-sm text-muted-foreground">{ed.school}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {ed.period} · {ed.note}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
