import { DhakaZigzag } from "./DhakaZigzag";

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-stretch gap-4">
        <span className="w-1 bg-crimson" />
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-crimson">
            {label}
          </span>
          <h2 className="font-sans font-black text-5xl md:text-6xl tracking-tighter uppercase leading-[0.9] text-foreground">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-6">
        <DhakaZigzag />
      </div>
      <div className="mt-6 h-px w-full bg-border" />
    </div>
  );
}
