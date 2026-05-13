"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ComingSoonSection({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <p className="font-sans font-black text-4xl md:text-5xl text-foreground uppercase tracking-tighter">
        COMING SOON
      </p>
      <p className="mt-4 font-mono text-foreground/50 text-base">
        {description}
      </p>
    </motion.div>
  );
}
