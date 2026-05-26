"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  Lightbulb,
  Wrench,
  HeartHandshake,
  UserCheck,
  Globe,
  Feather,
  Smartphone,
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
    title: "Research & Understanding of Nepal Police Systems",
    desc: "Demonstrates understanding of existing Nepal Police tools, public services, workflows, operational realities, and publicly available information sources.",
  },
  {
    n: "02",
    Icon: ShieldCheck,
    title: "Potential Public Safety / Policing Impact",
    desc: "Potential value and usefulness for Nepal Police or public safety outcomes.",
  },
  {
    n: "03",
    Icon: Lightbulb,
    title: "Solution Idea & Innovation",
    desc: "Originality, creativity, and strength of the proposed approach.",
  },
  {
    n: "04",
    Icon: Wrench,
    title: "Feasibility & Execution Capability",
    desc: "Realistic scope and ability to build within the hackathon duration.",
  },
];

const accessibility = [
  { Icon: UserCheck, label: "Ease of use for officers and citizens" },
  { Icon: Globe, label: "Nepali language support" },
  { Icon: Feather, label: "Accessibility in low-resource environments" },
  { Icon: Smartphone, label: "Mobile friendliness" },
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
          Proposals are scored against five criteria. The first four focus on
          substance and execution, the fifth on how well the solution serves
          real users in the field.
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

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mt-4 flex flex-col border border-border bg-soft transition-colors hover:border-foreground/30"
        >
          <span
            className="absolute top-0 left-0 h-1 w-full bg-crimson"
            aria-hidden
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 flex flex-col gap-5 p-7 md:p-8 lg:border-r lg:border-border">
              <div className="flex items-center justify-between">
                <span className="font-sans font-black text-5xl md:text-6xl tracking-tighter leading-none text-foreground/10 transition-colors group-hover:text-crimson/20">
                  05
                </span>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-white text-foreground transition-colors group-hover:border-crimson group-hover:text-crimson">
                  <HeartHandshake size={24} strokeWidth={1.5} aria-hidden />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-crimson">
                  CRITERION 05
                </span>
                <h3 className="font-sans font-black text-lg md:text-xl uppercase text-foreground tracking-tight leading-tight">
                  Experience & Accessibility
                </h3>
              </div>

              <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                How well the solution serves officers and citizens in
                real-world conditions across Nepal.
              </p>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border-t lg:border-t-0 border-border">
              {accessibility.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 bg-soft p-6 md:p-7"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-white text-foreground">
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="h-1.5 w-6 shrink-0 bg-gold" aria-hidden />
                    <span className="font-mono text-sm text-foreground/70 leading-relaxed">
                      {label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
