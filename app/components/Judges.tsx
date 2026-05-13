"use client";

import { SectionHeading } from "./shared/SectionHeading";
import { ComingSoonSection } from "./shared/ComingSoonSection";

export function Judges() {
  return (
    <section id="judges" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="EVALUATION PANEL" title="JUDGES" />
        <ComingSoonSection
          label="EVALUATION PANEL"
          title="JUDGES"
          description="Judges panel will be announced soon"
        />
      </div>
    </section>
  );
}
