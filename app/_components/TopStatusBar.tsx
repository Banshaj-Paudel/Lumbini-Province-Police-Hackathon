export function TopStatusBar() {
  return (
    <div className="w-full bg-navy border-b border-white/8">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="block h-2 w-2 rounded-full bg-crimson" />
          <span className="mono text-[11px] text-white/50">
            Presented by{" "}
            <span className="text-white/80 font-medium">Nepal Police</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-5 mono text-[11px] text-white/45">
          <span>May 30 — 31, 2026</span>
          <span className="h-3 w-px bg-white/15" />
          <span>Police Training Centre, Butwal, Rupandehi</span>
        </div>
      </div>
    </div>
  );
}
