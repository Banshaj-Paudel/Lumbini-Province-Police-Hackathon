"use client";

import { motion } from "framer-motion";
import { Award, Target, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative w-full bg-midnight text-white hero-clip overflow-hidden"
      aria-label="Lumbini Police Hackathon hero section"
    >
      <div
        className="absolute inset-0 dhaka-weave-dark pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="block h-px w-2.5-gold" />
            <span className="font-mono font-bold text-xs tracking-widest uppercase text-gold">
              PRESENTED BY NEPAL POLICE
            </span>
          </div>
          <h1
            className="font-sans font-black uppercase text-white"
            style={{
              fontSize: "clamp(34px, 5vw, 84px)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
            }}
          >
            HACK FOR SAFETY
            <span className="text-crimson">.</span>
          </h1>
          <p className="font-mono text-md sm:text-2xl uppercase tracking-widest text-white/60">
            Lumbini Province Police HACKATHON 2083
          </p>
          <p className="font-mono text-white/50 border-l-2 border-crimson pl-5">
            Jestha 30-31, 2083 | Police Training Centre, Butwal, Rupandehi
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#register"
              className="btn-primary inline-flex items-center bg-crimson text-white px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest"
            >
              Register Now
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#tracks"
              className="inline-flex items-center border-2 border-white/30 text-white/80 px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest hover:border-white transition-colors"
            >
              View Tracks
            </a>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block border border-white/10 bg-white/5 p-8"
          aria-label="Hackathon quick details"
        >
          <span
            className="absolute top-0 left-0 right-0 h-1 bg-gold"
            aria-hidden="true"
          />
          <span
            className="absolute top-0 bottom-0 right-0 w-1 bg-gold/30"
            aria-hidden="true"
          />
          <h2 className="font-mono font-bold text-xs tracking-widest uppercase text-gold mb-6">
            HACKATHON OVERVIEW
          </h2>
          <dl className="flex flex-col">
            <div className="flex items-start gap-4 py-4 border-b border-white/10">
              <Award
                className="text-gold shrink-0"
                size={22}
                aria-hidden="true"
              />
              <div>
                <dt className="font-sans font-bold text-white">
                  NPR 1,00,000 Prize Pool
                </dt>
                <dd className="font-mono text-xs text-white/50 mt-1">
                  Cash prizes + Government recognition certificates
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 py-4 border-b border-white/10">
              <Target
                className="text-gold shrink-0"
                size={22}
                aria-hidden="true"
              />
              <div>
                <dt className="font-sans font-bold text-white">
                  36-Hour Build Sprint
                </dt>
                <dd className="font-mono text-xs text-white/50 mt-1">
                  Continuous hackathon, Jestha 30-31, 2083
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 py-4">
              <MapPin
                className="text-gold shrink-0"
                size={22}
                aria-hidden="true"
              />
              <div>
                <dt className="font-sans font-bold text-white">
                  Police Training Centre, Butwal, Rupandehi
                </dt>
                <dd className="font-mono text-xs text-white/50 mt-1">
                  Butwal, Rupandehi, Lumbini, Nepal
                </dd>
              </div>
            </div>
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
