"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";
import { Users, Code, Trophy, Lightbulb } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      Icon: Users,
      title: "Form Your Team",
      description: "Gather 3-4 developers and register for free. No experience required.",
    },
    {
      n: "02",
      Icon: Lightbulb,
      title: "Choose a Track",
      description: "Pick from Cyber Forensic AI, IoT Public Safety, or Citizen-Police Tech.",
    },
    {
      n: "03",
      Icon: Code,
      title: "Build & Create",
      description: "Spend 36 hours innovating and building your solution with mentor support.",
    },
    {
      n: "04",
      Icon: Trophy,
      title: "Win Prizes",
      description: "Present your project and compete for NPR 1,00,000 + certificates.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="PROCESS" title="HOW IT WORKS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, Icon, title, description }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connection line to next step */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[calc(50%+32px)] w-[calc(100%-64px)] h-1 bg-gradient-to-r from-crimson to-transparent"></div>
              )}

              <div className="relative border border-border p-8 flex flex-col hover:shadow-lg transition-shadow bg-white">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-crimson text-white rounded-full flex items-center justify-center font-mono font-bold text-sm">
                  {n}
                </div>

                <Icon className="text-gold mb-4" size={36} />
                <h3 className="font-sans font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="font-mono text-sm text-foreground/60">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
