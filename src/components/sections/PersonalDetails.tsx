import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap, User } from "lucide-react";
import { Section } from "../Section";
import { profile } from "@/data/portfolio";

export function PersonalDetails() {
  const rows = [
    { icon: User, label: "Name", value: profile.name },
    { icon: MapPin, label: "Location", value: profile.location },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: GraduationCap,
      label: "College Email",
      value: profile.collegeEmail,
      href: `mailto:${profile.collegeEmail}`,
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
      value: profile.github.replace(/^https?:\/\//, ""),
      href: profile.github,
    },
  ];

  return (
    <Section
      id="details"
      index="03"
      eyebrow="Personal Details"
      title="The quick facts."
      description="Everything you need to reach me, all in one place."
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2">
        {rows.map((r, i) => {
          const Icon = r.icon;
          const external = r.href?.startsWith("http");
          const isLastOddItem = rows.length % 2 !== 0 && i === rows.length - 1;
          const Inner = (
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/60 bg-card/60 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mono-eyebrow mb-1.5">{r.label}</div>
                <div className="truncate text-sm font-medium text-foreground/90">{r.value}</div>
              </div>
            </div>
          );
          return (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className={`bg-background/80 p-6 transition-colors hover:bg-muted/30 ${isLastOddItem ? "sm:col-span-2" : ""}`}
            >
              {r.href ? (
                <a
                  href={r.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="block"
                >
                  {Inner}
                </a>
              ) : (
                Inner
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
