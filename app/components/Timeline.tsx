"use client";

import { SectionHeading } from "./shared/SectionHeading";
import { ComingSoonSection } from "./shared/ComingSoonSection";

export function Timeline() {
  return (
    <section id="timeline" className="w-full bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="SCHEDULE" title="EVENT TIMELINE" />
        <ComingSoonSection
          label="SCHEDULE"
          title="EVENT TIMELINE"
          description="Event timeline will be published soon"
        />
      </div>
    </section>
  );
}
