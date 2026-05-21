"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { tracks } from "../lib/tracks";

export function Tracks() {
  return (
    <section id="tracks" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="CHALLENGE TRACKS" title="HACKATHON TRACKS" />

        <p className="font-mono text-sm text-foreground/60 max-w-2xl -mt-4 mb-12 leading-relaxed">
          Three themes grounded in real data from Nepal Police reports. Every
          problem statement is backed by numbers because understanding the
          scale is the first step to solving it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {tracks.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/tracks/${t.slug}`}
                className="group relative flex h-full flex-col border border-border bg-white transition-colors hover:border-foreground/30"
              >
                <span
                  className="absolute top-0 left-0 h-full w-px bg-border transition-all duration-300 group-hover:w-1 group-hover:bg-crimson"
                  aria-hidden
                />

                <div className="p-8 flex flex-col gap-5 flex-1">
                  <div className="flex items-center justify-between">
                    <t.Icon
                      className="text-foreground"
                      size={32}
                      strokeWidth={1.5}
                    />
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/40">
                      TRACK {t.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-xl md:text-2xl uppercase text-foreground tracking-tight leading-tight min-h-[4.5rem]">
                    {t.title}
                  </h3>

                  <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                    {t.tagline}
                  </p>

                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase border border-border text-foreground/50 px-3 py-1.5 w-fit">
                    {t.problems.length}{" "}
                    {t.problems.length === 1 ? "PROBLEM" : "PROBLEMS"}
                  </span>

                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/50 transition-colors group-hover:text-crimson">
                      EXPLORE TRACK
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-foreground/30 transition-all group-hover:text-crimson group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 border-l-2 border-gold bg-gold/5 px-6 py-5 w-full"
        >
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gold block mb-2">
            NOTE
          </span>
          <p className="font-mono text-sm text-foreground/70 leading-relaxed">
            Participants are encouraged to build practical, ethical, and
            deployable solutions suitable for Nepal&apos;s operational realities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
