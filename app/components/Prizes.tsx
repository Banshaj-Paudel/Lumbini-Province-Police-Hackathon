"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Gift } from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

type Accent = "gold" | "crimson" | "indigo";

const prizes: {
  Icon: typeof Trophy;
  place: string;
  amount: string;
  note: string;
  accent: Accent;
  order: string;
  elevate: string;
  featured?: boolean;
}[] = [
  {
    Icon: Trophy,
    place: "FIRST PLACE",

    amount: "NPR 50,000",
    note: "Grand prize with official government recognition and certificate from Nepal Police.",
    accent: "gold",
    order: "md:order-2",
    elevate: "md:-mt-4",
    featured: true,
  },
  {
    Icon: Award,
    place: "SECOND PLACE",

    amount: "NPR 30,000",
    note: "Runner-up recognition with official certificate of achievement.",
    accent: "crimson",
    order: "md:order-1",
    elevate: "md:mt-6",
  },
  {
    Icon: Medal,
    place: "THIRD PLACE",

    amount: "NPR 20,000",
    note: "Third place honors with official certificate of achievement.",
    accent: "indigo",
    order: "md:order-3",
    elevate: "md:mt-10",
  },
];

const accentMap: Record<
  Accent,
  { bar: string; icon: string; label: string; rank: string; chip: string }
> = {
  gold: {
    bar: "bg-gold",
    icon: "text-gold",
    label: "text-gold",
    rank: "text-gold/20",
    chip: "border-gold/50 text-gold",
  },
  crimson: {
    bar: "bg-crimson",
    icon: "text-crimson",
    label: "text-crimson",
    rank: "text-crimson/15",
    chip: "border-crimson/50 text-crimson",
  },
  indigo: {
    bar: "bg-indigo",
    icon: "text-indigo",
    label: "text-indigo",
    rank: "text-indigo/15",
    chip: "border-indigo/50 text-indigo",
  },
};

export function Prizes() {
  return (
    <section id="prizes" className="w-full bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="REWARDS & RECOGNITION" title="PRIZE POOL" />

        <p className="font-mono text-sm text-foreground/60 max-w-2xl -mt-4 mb-12 leading-relaxed">
          NPR 1,00,000 distributed across the top three teams, alongside
          official government recognition and certificates of achievement from
          Nepal Police.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-start">
          {prizes.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <motion.div
                key={p.place}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative border border-border bg-white p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow overflow-hidden ${p.order} ${p.elevate}`}
              >
                <span
                  className={`absolute top-0 left-0 h-full w-1 ${a.bar}`}
                  aria-hidden
                />
             

                <p.Icon className={a.icon} size={40} />

                <span
                  className={`font-mono text-xs font-bold tracking-widest uppercase ${a.label}`}
                >
                  {p.place}
                </span>

                <h3 className="font-sans font-black text-4xl md:text-5xl uppercase text-foreground tracking-tighter leading-none">
                  {p.amount}
                </h3>

                <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                  {p.note}
                </p>

                {p.featured && (
                  <span
                    className={`inline-flex w-fit border px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase ${a.chip}`}
                  >
                    GRAND PRIZE
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex items-center gap-4 border-l-2 border-gold bg-gold/5 px-6 py-5"
        >
          <Gift className="text-gold shrink-0" size={26} aria-hidden />
          <p className="font-mono text-sm text-foreground/70 leading-relaxed">
            <span className="font-bold text-foreground">
              And surprise events and gifts
            </span>{" "}
            throughout the hackathon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
