import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

type NavItem =
  | { kind: "route"; to: "/" | "/projects"; label: string }
  | { kind: "hash"; id: string; label: string };

const links: NavItem[] = [
  { kind: "route", to: "/", label: "Home" },
  { kind: "hash", id: "about", label: "About" },
  { kind: "hash", id: "research", label: "Research" },
  { kind: "hash", id: "details", label: "Details" },
  { kind: "route", to: "/projects", label: "Projects" },
  { kind: "hash", id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHash = (id: string) => {
    setOpen(false);
    if (!onHome) {
      navigate({ to: "/" });
      // wait for route to mount, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-primary/40 bg-background/40 font-display text-sm text-primary backdrop-blur">
            S
          </span>
          <span className="hidden sm:inline text-muted-foreground">
            shrivatsh<span className="text-primary">.ks</span>
          </span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border border-border/60 bg-background/40 px-2 py-1.5 backdrop-blur-xl md:flex",
            scrolled && "shadow-elevated"
          )}
        >
          {links.map((l) => {
            if (l.kind === "route") {
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  className="relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:bg-foreground/10"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <button
                key={l.id}
                onClick={() => goHash(l.id)}
                className="relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background/40 backdrop-blur transition-colors hover:bg-muted"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-background/40 backdrop-blur md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl px-6 md:hidden"
        >
          <div className="glass rounded-2xl p-2">
            {links.map((l) => {
              if (l.kind === "route") {
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-xl px-4 py-2.5 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground data-[status=active]:bg-foreground/10 data-[status=active]:text-foreground"
                  >
                    {l.label}
                  </Link>
                );
              }
              return (
                <button
                  key={l.id}
                  onClick={() => goHash(l.id)}
                  className="block w-full rounded-xl px-4 py-2.5 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
