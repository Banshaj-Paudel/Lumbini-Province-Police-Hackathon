"use client";

import { motion } from "framer-motion";

export function Register() {
  return (
    <section
      id="register"
      className="relative w-full bg-crimson text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 dhaka-weave-light pointer-events-none" />
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 w-full h-20 pointer-events-none"
        aria-hidden
      >
        <path
          d="M0,80 L0,55 L80,30 L180,52 L280,16 L380,44 L480,20 L580,48 L680,18 L780,40 L880,12 L980,38 L1080,18 L1180,42 L1280,22 L1380,46 L1440,28 L1440,80 Z"
          fill="white"
          fillOpacity="0.10"
        />
      </svg>
      <div className="relative mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest uppercase text-white/70"
        >
          Open to innovators across Nepal
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-sans font-black text-5xl md:text-7xl tracking-tighter text-white"
        >
          Registration Closed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="font-mono text-base text-white/80"
        >
          Registration is now closed. Thank you for your interest—stay tuned for
          future events and announcements.
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          aria-disabled="true"
          className="inline-flex items-center border-2 border-white bg-white/10 text-white/60 px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest mt-2"
          role="status"
        >
          Registration Closed
        </motion.span>
      </div>
    </section>
  );
}
