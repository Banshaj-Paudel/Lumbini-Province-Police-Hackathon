"use client";

import { motion } from "framer-motion";
import { CountUp } from "./shared/CountUp";
import { indianFmt } from "../lib/utils";

export function BentoGrid() {
  return (
    <section className="relative z-20 -mt-16 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-24">
      <div
        className="grid grid-cols-1 md:grid-cols-3 bg-border shadow-2xl"
        style={{ gap: "1px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-card relative bg-white p-8 md:p-12 overflow-hidden"
        >
          <span className="bento-bar absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          <p className="font-mono font-bold text-xs tracking-widest uppercase text-gold">
            IN PRIZES
          </p>
          <p className="mt-4 font-sans font-black text-3xl md:text-5xl tracking-tighter text-foreground">
            NPR{" "}
            <CountUp to={100000} format={indianFmt} />
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="bento-card relative bg-white p-8 md:p-12 overflow-hidden"
        >
          <span className="bento-bar absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          <p className="font-mono font-bold text-xs tracking-widest uppercase text-gold">
            BUILD DURATION
          </p>
          <p className="mt-4 font-sans font-black text-3xl md:text-5xl tracking-tighter text-foreground">
            <CountUp to={36} /> Hrs
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="bento-card relative bg-white p-8 md:p-12 overflow-hidden"
        >
          <span className="bento-bar absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          <p className="font-mono font-bold text-xs tracking-widest uppercase text-gold">
            ORGANIZED BY
          </p>
          <p className="mt-4 font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
            LUMBINI PROVINCE POLICE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
