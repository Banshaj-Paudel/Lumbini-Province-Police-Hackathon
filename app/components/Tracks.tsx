"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";
import { tracks, accentMap } from "../lib/tracks";

export function Tracks() {
  return (
    <section id="tracks" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="CHALLENGE TRACKS" title="HACKATHON TRACKS" />

        <p className="font-mono text-sm text-foreground/60 max-w-2xl -mt-4 mb-12 leading-relaxed">
          Three focus areas where your build can directly support Nepal Police
          operations and the communities it serves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {tracks.map((t, i) => {
            const a = accentMap[t.accent];
            return (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/tracks/${t.slug}`}
                  className={`group relative block h-full border border-border bg-white transition-colors ${a.ring}`}
                >
                  <span
                    className={`absolute top-0 left-0 h-full w-1 ${a.bar}`}
                    aria-hidden
                  />

                  <div className="p-8 pl-10 flex flex-col gap-5 h-full">
                    <div className="flex items-center justify-between">
                      <t.Icon className={a.icon} size={36} />
                      <span
                        className={`font-mono text-xs font-bold tracking-widest uppercase ${a.label}`}
                      >
                        TRACK {t.number}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-xl md:text-2xl uppercase text-foreground tracking-tight leading-tight min-h-[3.5rem]">
                      {t.title}
                    </h3>

                    <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                      {t.short}
                    </p>

                    <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest uppercase ${a.label}`}
                      >
                        EXPLORE TRACK
                      </span>
                      <ArrowUpRight
                        size={18}
                        className={`${a.icon} transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
