import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-6 py-28 sm:py-36", className)}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 max-w-3xl"
          >
            {eyebrow && (
              <div className="mono-eyebrow mb-6 flex items-center gap-3">
                {index && <span className="text-primary">{index}</span>}
                <span className="h-px w-8 bg-primary/60" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
