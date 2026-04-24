export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 warm-bg" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      {/* subtle vignette */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,oklch(0_0_0/0.5)_100%)]" />
    </div>
  );
}
