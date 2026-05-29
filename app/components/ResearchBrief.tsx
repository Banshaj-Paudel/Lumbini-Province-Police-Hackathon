"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderOpen, FileText } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

const RESEARCH_ITEMS = [
  "Publicly available resources",
  "FY 80-81 suicide and cyber crime PDF reports",
  "Annual infographics",
  "Nepal disaster report",
  "आत्महत्या न्यूनीकरण कार्ययोजना",
];

const RESEARCH_DRIVE_URL =
  "https://drive.google.com/drive/folders/1LEvhU8gd8sPhHie3ZoO7uSITQfQPG_Fd";

export function ResearchBrief() {
  return (
    <section id="resources" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="PARTICIPANT PREP"
          title="RESEARCH BRIEF & RESOURCES"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 border border-border bg-white p-8"
          >
            <div className="flex items-center gap-3 mb-4 text-crimson">
              <FolderOpen size={20} aria-hidden="true" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                Hack4Safety 2083 - Participant Research Brief
              </span>
            </div>

            <p className="font-mono text-sm md:text-base text-foreground/75 leading-relaxed">
              Before proposing solutions, participants are strongly encouraged
              to understand existing Nepal Police systems, workflows, and public
              services. Research current systems before building to avoid
              duplication and align with operational realities.
            </p>

            <a
              href={RESEARCH_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 border-2 border-crimson bg-crimson text-white px-7 py-3 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 ease-out hover:bg-white hover:text-crimson hover:-translate-y-0.5"
            >
              Open Research Folder
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 border border-border bg-cream p-8"
            aria-label="Research material list"
          >
            <h3 className="font-sans font-black text-2xl tracking-tight text-foreground uppercase mb-5">
              Included Materials
            </h3>
            <ul className="space-y-4 m-0 p-0 list-none">
              {RESEARCH_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FileText
                    size={16}
                    className="text-crimson mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm text-foreground/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
