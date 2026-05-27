"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Lightbulb,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

type Criterion = {
  n: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const criteria: Criterion[] = [
  {
    n: "01",
    Icon: BookOpen,
    title: "Research & Understanding of Existing Nepal Police Systems",
    desc: "Teams should demonstrate research on existing Nepal Police tools, public services, operational systems, apps, and publicly available resources to avoid duplication and show understanding of policing realities.",
  },
  {
    n: "02",
    Icon: ShieldCheck,
    title: "Practicality & Usability for Nepal Police",
    desc: "The idea should realistically solve a policing or public safety challenge and be deployable or usable within Nepal Police operational realities.",
  },
  {
    n: "03",
    Icon: Lightbulb,
    title: "Innovation & Problem Solving Approach",
    desc: "Creativity, originality, and strength of the proposed approach.",
  },
  {
    n: "04",
    Icon: Wrench,
    title: "Proposal Clarity & Team Capability",
    desc: "Clear understanding of the problem, proposed solution, and confidence that the team can execute it.",
  },
];

export function EvaluationCriteria() {
  return (
    <section
      id="evaluation"
      className="w-full bg-white py-24 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="WHAT JUDGES LOOK FOR"
          title="PROPOSAL EVALUATION CRITERIA"
        />

        <p className="font-mono text-sm text-foreground/60 max-w-2xl leading-relaxed -mt-4 mb-12">
          Proposals are scored against four criteria focused on problem
          understanding, impact, innovation, and execution capability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {criteria.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col border border-border bg-soft transition-colors hover:border-foreground/30"
            >
              <span
                className="absolute top-0 left-0 h-1 w-full bg-crimson"
                aria-hidden
              />

              <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-black text-5xl md:text-6xl tracking-tighter leading-none text-foreground/10 transition-colors group-hover:text-crimson/20">
                    {c.n}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-white text-foreground transition-colors group-hover:border-crimson group-hover:text-crimson">
                    <c.Icon size={24} strokeWidth={1.5} aria-hidden />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-crimson">
                    CRITERION {c.n}
                  </span>
                  <h3 className="font-sans font-black text-lg md:text-xl uppercase text-foreground tracking-tight leading-tight">
                    {c.title}
                  </h3>
                </div>

                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
