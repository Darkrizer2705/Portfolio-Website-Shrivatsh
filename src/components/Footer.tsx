import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
        <div>
          © {new Date().getFullYear()} — {profile.name}
        </div>
        <div>Designed & built with intent.</div>
      </div>
    </footer>
  );
}
