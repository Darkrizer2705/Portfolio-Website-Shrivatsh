import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = "Featured" | "All";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const list = filter === "Featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Selected Work"
      title="Shipped, measured, repeated."
    >
      <div className="mb-10 inline-flex rounded-full border border-border/60 bg-background/40 p-1 backdrop-blur">
        {(["Featured", "All"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all",
              filter === f ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-7 text-left shadow-elevated backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.year} · {p.tagline}
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>

            <h3 className="mt-5 font-display text-2xl leading-tight sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            {p.metrics.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
                {p.metrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-2xl gradient-text">{m.value}</div>
                    <div className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-wider text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elevated"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background/60 hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8 sm:p-10">
          <div className="mono-eyebrow">{project.year} · {project.tagline}</div>
          <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">{project.title}</h3>

          {project.metrics.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border/60 p-3">
                  <div className="font-display text-xl gradient-text">{m.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-6 leading-relaxed text-foreground/90">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.details.map((d, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-muted"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider text-background"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
