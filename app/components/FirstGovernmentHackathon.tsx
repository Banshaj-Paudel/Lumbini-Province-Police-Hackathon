"use client";

import { motion } from "framer-motion";
import { Landmark, Flag, Award } from "lucide-react";
import { DhakaZigzag } from "./shared/DhakaZigzag";

const milestones = [
  {
    Icon: Landmark,
    title: "GOVERNMENT-LED",
    desc: "Officially organized by Nepal Police — the entry of a national institution into the technology and developer ecosystem.",
  },
  {
    Icon: Flag,
    title: "A NATIONAL FIRST",
    desc: "The inaugural hackathon ever organized by Nepal Police, and the first by any governmental body in the country.",
  },
  {
    Icon: Award,
    title: "SETTING THE STANDARD",
    desc: "Establishing a new model for collaboration between government, developers, and the citizens they serve.",
  },
];

export function FirstGovernmentHackathon() {
  return (
    <section
      id="milestone"
      className="relative w-full bg-indigo py-24 md:py-28 overflow-hidden"
    >
      <span className="absolute top-0 left-0 right-0 h-px bg-gold" />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden
      >
        <defs>
          <pattern
            id="newar-milestone"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="10"
              y="10"
              width="60"
              height="60"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <rect
              x="22"
              y="22"
              width="36"
              height="36"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
            <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="0.5" />
            <polygon points="40,4 44,12 36,12" fill="white" />
            <polygon points="40,76 44,68 36,68" fill="white" />
            <polygon points="4,40 12,44 12,36" fill="white" />
            <polygon points="76,40 68,44 68,36" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#newar-milestone)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-mono font-bold text-xs tracking-widest uppercase text-gold">
              A HISTORIC MILESTONE
            </span>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase text-white tracking-tighter leading-[0.95]">
              NEPAL&apos;S FIRST
              <br />
              GOVERNMENT HACKATHON
            </h2>
            <div className="mt-2 max-w-md">
              <DhakaZigzag light />
            </div>
          </div>
          <p className="font-mono text-sm text-white/40 max-w-sm">
            Nepal Police proudly leads the nation as the first governmental body
            to organize a hackathon — a defining moment for public sector
            innovation in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {milestones.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/12 p-8 flex flex-col hover:bg-white/5 transition-colors"
              style={{ transition: "border-color .25s, background-color .25s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#D4AF37")
              }
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <Icon className="text-gold mb-6" size={36} />
              <h3 className="font-sans font-black text-lg uppercase text-white">
                {title}
              </h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-white/45">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
