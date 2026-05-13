"use client";

import { SectionHeading } from "./shared/SectionHeading";
import { ComingSoonSection } from "./shared/ComingSoonSection";

export function Tracks() {
  return (
    <section id="tracks" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="CHALLENGE TRACKS" title="HACKATHON TRACKS" />
        <ComingSoonSection
          label="CHALLENGE TRACKS"
          title="HACKATHON TRACKS"
          description="Track details will be announced shortly"
        />
      </div>
    </section>
  );
}
