import { motion } from "framer-motion";
import { Section } from "../Section";
import { about } from "@/data/portfolio";
import portrait from "@/assets/shrivatsh.jpeg";

const stats = [
  { k: "7+", v: "Projects Shipped" },
  { k: "1st", v: "Hackathons Won" },
  { k: "~30%", v: "Avg. Model Lift" },
  { k: "3", v: "Leadership Years" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Engineer. Builder. Leader."
    >
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="space-y-6 lg:col-span-3">
          <p className="text-lg leading-relaxed text-foreground/85">
            Third-year B.Tech AI student at Mahindra University, obsessed with turning machine
            learning research into systems that move the needle. I'm driven by a passion for
            building robotics and AI solutions that create tangible impact in the real world. I
            focus on designing intelligent, scalable systems that solve meaningful problems,
            prioritizing practical innovation over academic novelty.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Beyond the code, I lead Mahindra University's Entrepreneurship & Innovation Cell as
            President, where I've built the muscle to ship ideas — from prototype to pitch — under
            pressure. I care about AI that ships.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background/80 p-5"
              >
                <div className="font-display text-3xl gradient-text">{s.k}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-3 shadow-elevated">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={portrait}
                alt="Shrivatsh Kuppusubramaniam"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="font-display text-2xl">Shrivatsh</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Hyderabad, IN
                  </div>
                </div>
                <div className="rounded-full border border-primary/40 bg-background/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur">
                  /portrait
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Toolkit */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <h3 className="font-display text-3xl">Toolkit</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            /skills
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(about.skills).map(([group, items]) => (
            <div key={group} className="bg-background/80 p-6">
              <div className="mono-eyebrow mb-4">{group}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-muted/40 px-2 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
