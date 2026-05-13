"use client";

import { SectionHeading } from "./shared/SectionHeading";
import { ComingSoonSection } from "./shared/ComingSoonSection";

export function OrganizingTeam() {
  return (
    <section id="team" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="BEHIND THE EVENT" title="ORGANIZING TEAM" />
        <ComingSoonSection
          label="BEHIND THE EVENT"
          title="ORGANIZING TEAM"
          description="Team details will be announced soon"
        />
      </div>
    </section>
  );
}
