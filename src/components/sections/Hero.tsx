import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { TypedText } from "../TypedText";
import portrait from "@/assets/shrivatsh.jpeg";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Availability chip with photo */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/40 py-1 pl-1 pr-4 backdrop-blur"
        >
          <img
            src={portrait}
            alt="Shrivatsh Kuppusubramaniam"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-primary/30"
          />
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for AI/ML Internships
          </span>
        </motion.div>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-[15vw] leading-[0.95] tracking-tight sm:text-8xl md:text-9xl"
        >
          {first}
          <br />
          <span className="gradient-text font-light italic text-[10vw] sm:text-6xl md:text-7xl">
            {last}
          </span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          <span className="text-foreground">{profile.shortRole}</span> — Building Intelligent
          Systems with Real-World Impact.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex h-7 items-center font-mono text-sm text-muted-foreground"
        >
          <span className="mr-2 text-primary">$</span>
          <span>currently building&nbsp;</span>
          <TypedText words={profile.typed} />
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider text-background transition-all hover:bg-primary"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => go("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-6 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-primary/60" />
      </motion.div>
    </section>
  );
}
