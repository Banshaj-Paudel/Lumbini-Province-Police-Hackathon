"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  BedDouble,
  Bus,
  Award,
  GraduationCap,
  Network,
  Trophy,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

const cards = [
  {
    Icon: Utensils,
    iconColor: "text-foreground",
    status: "PROVIDED",
    statusColor: "text-crimson",
    title: "FOOD & MEALS",
    desc: "Meals and refreshments throughout the 36-hour hackathon are covered for all registered participants.",
  },
  {
    Icon: BedDouble,
    iconColor: "text-foreground",
    status: "PROVIDED",
    statusColor: "text-crimson",
    title: "ACCOMMODATION",
    desc: "On-site accommodation will be arranged for all participating teams for the duration of the event.",
  },
  {
    Icon: Bus,
    iconColor: "text-foreground",
    status: "AT YOUR OWN COST",
    statusColor: "text-foreground/60",
    title: "TRAVEL",
    desc: "Travel to and from Butwal is the responsibility of each participant. Please plan your route in advance.",
  },
  {
    Icon: Award,
    iconColor: "text-crimson",
    status: "INCLUDED",
    statusColor: "text-crimson",
    title: "RECOGNITION CERTIFICATE",
    desc: "Every participant receives an official recognised certificate of participation.",
  },
  {
    Icon: GraduationCap,
    iconColor: "text-crimson",
    status: "INCLUDED",
    statusColor: "text-crimson",
    title: "EXPERT MENTORSHIP",
    desc: "Hands-on guidance from industry professionals and domain experts throughout the event.",
  },
  {
    Icon: Network,
    iconColor: "text-crimson",
    status: "INCLUDED",
    statusColor: "text-crimson",
    title: "NETWORKING",
    desc: "Connect with fellow builders, mentors, and Nepal Police officials across the ecosystem.",
  },
  {
    Icon: Trophy,
    iconColor: "text-crimson",
    status: "FOR WINNERS",
    statusColor: "text-crimson",
    title: "PRIZE POOL",
    desc: "A total prize pool of NPR 1,00,000 awarded to the standout teams of the hackathon.",
  },
  {
    Icon: Rocket,
    iconColor: "text-crimson",
    status: "FOR STANDOUTS",
    statusColor: "text-crimson",
    title: "IMPLEMENTATION SUPPORT",
    desc: "Standout solutions get the opportunity for real-world implementation support with Nepal Police.",
  },
];

export function Provisions() {
  return (
    <section id="provisions" className="w-full bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="ON-SITE PROVISIONS" title="WHAT TO EXPECT" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(
            ({ Icon, iconColor, status, statusColor, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="border border-border bg-white p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
              >
                <Icon className={iconColor} size={36} />
                <span
                  className={`font-mono text-xs font-bold tracking-widest uppercase ${statusColor}`}
                >
                  {status}
                </span>
                <h3 className="font-sans font-black text-xl uppercase text-foreground tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
