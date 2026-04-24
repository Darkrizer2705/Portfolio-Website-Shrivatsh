import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Shrivatsh Subramaniam",
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@shrivatsh",
      href: profile.github,
    },
    {
      icon: Phone,
      label: "Direct",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Get in touch"
      title={"Have a problem worth solving?"}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-3xl leading-snug sm:text-4xl">
            Let's build <span className="gradient-text">something real</span> together.
          </p>
          <p className="mt-6 max-w-md text-muted-foreground">
            Open to AI/ML internships, research collaborations, and entrepreneurial projects. I
            respond within 24 hours — the fastest way to reach me is email or LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-wider text-background transition-colors hover:bg-primary"
            >
              <Mail className="h-4 w-4" />
              Write to me
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-5 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur transition-colors hover:bg-muted"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {profile.location} · GMT +5:30
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur"
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            const external = it.href.startsWith("http");
            return (
              <a
                key={it.label}
                href={it.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-muted/50 ${
                  i !== items.length - 1 ? "border-b border-border/60" : ""
                }`}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-background/60 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{it.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {it.label}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
