"use client";

import { SectionHeading } from "./shared/SectionHeading";
import { ComingSoonSection } from "./shared/ComingSoonSection";

export function Mentors() {
  return (
    <section id="mentors" className="w-full bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="GUIDANCE" title="MENTORS" />
        <ComingSoonSection
          label="GUIDANCE"
          title="MENTORS"
          description="Mentors list will be published soon"
        />
      </div>
    </section>
  );
}
