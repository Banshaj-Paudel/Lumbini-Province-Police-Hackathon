"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./shared/SectionHeading";
import {
  Code2,
  Utensils,
  Shield,
  Coffee,
  ClipboardCheck,
  ClipboardList,
  Trophy,
  Award,
  Medal,
  Crown,
  Clock,
  MapPin,
  Sun,
  Moon,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────── */

type ActivityCategory =
  | "coding"
  | "meal"
  | "ceremony"
  | "judging"
  | "break"
  | "registration";

interface TimelineEvent {
  time: string;
  title: string;
  note?: string;
  category: ActivityCategory;
  featured?: boolean;
}

/* ─── Category Config ───────────────────────────────────────────────── */

const cat = (
  Icon: typeof Code2,
  dotBorder: string,
  dotBg: string,
  dotText: string,
) => ({ Icon, dotBorder, dotBg, dotText });

const categoryConfig: Record<ActivityCategory, ReturnType<typeof cat>> = {
  coding: cat(Code2, "border-foreground/30", "bg-white", "text-foreground"),
  meal: cat(Utensils, "border-gold", "bg-gold", "text-white"),
  ceremony: cat(Shield, "border-crimson", "bg-crimson", "text-white"),
  judging: cat(ClipboardCheck, "border-crimson", "bg-white", "text-crimson"),
  break: cat(Coffee, "border-foreground/15", "bg-white", "text-foreground/40"),
  registration: cat(
    ClipboardList,
    "border-foreground/30",
    "bg-white",
    "text-foreground",
  ),
};

/* ─── Schedule Data ─────────────────────────────────────────────────── */

const day1Events: TimelineEvent[] = [
  {
    time: "07:00 – 08:00",
    title: "Participant Registration + Consent Form & Code of Conduct Signing",
    note: "Breakfast served during registration",
    category: "registration",
  },
  {
    time: "08:00 – 08:30",
    title: "Official Opening Ceremony & Welcome Program",
    note: "Chief Guest: DIG Bhupendra Bahadur Khatri",
    category: "ceremony",
    featured: true,
  },
  {
    time: "08:30 – 08:40",
    title: "Symbolic Banner Signing - Official Coding Session Launch",
    note: "Marks the official start of the hackathon",
    category: "ceremony",
    featured: true,
  },
  {
    time: "08:40 – 09:00",
    title: "Mentor Introduction, Problem Statement Briefing & Timeline",
    note: "Teams receive full briefing",
    category: "registration",
  },
  { time: "09:00 – 11:30", title: "Coding Session I", category: "coding" },
  { time: "11:30 – 12:30", title: "Lunch", category: "meal" },
  { time: "12:30 – 18:00", title: "Coding Session II", category: "coding" },
  { time: "18:00 – 19:00", title: "Dinner", category: "meal" },
  { time: "19:00 – 20:00", title: "Refresher Event", category: "break" },
  {
    time: "20:00 onwards",
    title: "Overnight Coding Session Continues",
    category: "coding",
  },
];

const day2Events: TimelineEvent[] = [
  { time: "07:30 – 08:00", title: "Breakfast", category: "meal" },
  {
    time: "08:00 – 10:00",
    title: "Final Coding Session",
    note: "Last stretch before submission",
    category: "coding",
  },
  {
    time: "10:00 – 11:00",
    title: "Presentation Preparation & Final Submission Checks",
    note: "Teams finalize decks and demos",
    category: "coding",
  },
  {
    time: "11:00 – 12:00",
    title: "Project Submission Deadline & Technical Verification",
    note: "Hard cutoff for all submissions",
    category: "ceremony",
    featured: true,
  },
  { time: "12:00 – 13:00", title: "Lunch", category: "meal" },
  {
    time: "13:00 – 14:00",
    title: "Content Creation Competition",
    category: "break",
  },
  {
    time: "14:00 – 15:40",
    title: "Judge Presentations - First 10 Teams",
    note: "10 minutes per team",
    category: "judging",
    featured: true,
  },
  { time: "15:40 – 16:00", title: "Tea Break", category: "break" },
  {
    time: "16:00 – 17:40",
    title: "Judge Presentations - Remaining 10 Teams",
    note: "10 minutes per team",
    category: "judging",
    featured: true,
  },
  {
    time: "17:40 – 18:00",
    title: "Final Evaluation & Results Deliberation by Judging Panel",
    category: "judging",
    featured: true,
  },
  {
    time: "18:00 – 18:30",
    title: "Closing Ceremony & Prize Distribution",
    note: "Winners announced - Chief Guest: DIG Bhupendra Bahadur Khatri",
    category: "ceremony",
    featured: true,
  },
];

/* ─── Helper ────────────────────────────────────────────────────────── */

function getCardSide(index: number): "left" | "right" {
  return index % 2 === 0 ? "left" : "right";
}

/* ─── Day Header Banner ─────────────────────────────────────────────── */

function DayHeader({
  day,
  dateBs,
  subtitle,
}: {
  day: number;
  dateBs: string;
  subtitle: string;
}) {
  return (
    <div className="bg-midnight text-white py-14 md:py-16 relative overflow-hidden">
      <div className="dhaka-weave-dark absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-gold bg-white/10 px-3 py-1">
          {day === 1 ? (
            <Sun size={14} aria-hidden="true" />
          ) : (
            <Moon size={14} aria-hidden="true" />
          )}
          Day {day}
        </span>
        <h3 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter mt-4 text-white">
          {dateBs}
        </h3>
        <p className="font-mono text-sm text-white/70 uppercase tracking-widest mt-3">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ─── Timeline Card ─────────────────────────────────────────────────── */

function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const side = getCardSide(index);
  const pointerCls =
    side === "left" ? "timeline-card-left" : "timeline-card-right";
  const originX = side === "left" ? -30 : 30;

  return (
    <motion.article
      initial={{ opacity: 0, x: originX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`timeline-card ${pointerCls} relative border bg-white p-5 md:p-6 ${
        event.featured ? "border-crimson/40" : "border-border"
      }`}
      style={{ borderRadius: 0, maxWidth: "420px" }}
      tabIndex={0}
      role="listitem"
    >
      {/* Featured accent bar */}
      {event.featured && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-1 bg-crimson"
        />
      )}

      {/* Time badge */}
      <span className="inline-block font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/60 bg-foreground/[0.06] px-2 py-0.5 mb-3">
        {event.time}
      </span>

      {/* Title */}
      <h3
        className={`font-sans font-bold text-sm md:text-base leading-snug ${
          event.featured ? "text-crimson" : "text-foreground"
        }`}
      >
        {event.title}
      </h3>

      {/* Note */}
      {event.note && (
        <p className="font-mono text-[11px] text-foreground/45 mt-2 leading-relaxed">
          {event.note}
        </p>
      )}
    </motion.article>
  );
}

/* ─── Spine Node (icon dot on the axis) ─────────────────────────────── */

function SpineNode({ event }: { event: TimelineEvent }) {
  const c = categoryConfig[event.category];
  const Icon = c.Icon;
  return (
    <div
      className={`relative z-10 flex size-9 shrink-0 items-center justify-center border-2 ${c.dotBorder} ${c.dotBg} ${c.dotText}`}
    >
      <Icon size={14} aria-hidden="true" />
    </div>
  );
}

/* ─── Timeline Row ──────────────────────────────────────────────────── */

function TimelineRow({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const side = getCardSide(index);

  return (
    <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr]">
      {/* === MOBILE === */}
      <div className="md:hidden flex justify-center pt-1">
        <SpineNode event={event} />
      </div>
      <div className="md:hidden pb-8 pl-4 pt-1">
        <TimelineCard event={event} index={index} />
      </div>

      {/* === DESKTOP: Spine (center column) === */}
      <div className="hidden md:flex md:col-start-2 md:col-end-3 justify-center pt-1">
        <SpineNode event={event} />
      </div>

      {/* === DESKTOP LEFT === */}
      <div className="hidden md:flex md:col-start-1 md:col-end-2 justify-end pr-10 pt-1">
        {side === "left" && <TimelineCard event={event} index={index} />}
      </div>

      {/* === DESKTOP RIGHT === */}
      <div className="hidden md:flex md:col-start-3 md:col-end-4 justify-start pl-10 pt-1">
        {side === "right" && <TimelineCard event={event} index={index} />}
      </div>
    </div>
  );
}

/* ─── Central Spine Line ────────────────────────────────────────────── */

function SpineLine() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 bottom-0 w-px bg-border
        left-[19px]
        md:left-1/2 md:-translate-x-px"
    />
  );
}

/* ─── Chief Guest Card ──────────────────────────────────────────────── */

/* ─── Grand Finale ──────────────────────────────────────────────────── */

function GrandFinale() {
  return (
    <section
      id="timeline-finale"
      className="w-full bg-midnight text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="dhaka-weave-dark absolute inset-0" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        {/* Heading */}
        <div className="flex items-stretch gap-4 mb-10">
          <span className="w-1 bg-gold" aria-hidden="true" />
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-gold">
              Grand Prize Ceremony
            </span>
            <h2 className="font-sans font-black text-5xl md:text-6xl tracking-tighter uppercase leading-[0.9] text-white">
              Special Felicitation
            </h2>
          </div>
        </div>

        <svg
          viewBox="0 0 80 8"
          preserveAspectRatio="none"
          className="w-full h-2 mt-6"
          aria-hidden="true"
        >
          <polyline
            points="0,7 5,1 10,7 15,1 20,7 25,1 30,7 35,1 40,7 45,1 50,7 55,1 60,7 65,1 70,7 75,1 80,7"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
          />
          <polyline
            points="0,5 5,7 10,5 15,7 20,5 25,7 30,5 35,7 40,5 45,7 50,5 55,7 60,5 65,7 70,5 75,7 80,5"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.6"
          />
        </svg>
        <div className="mt-6 h-px w-full bg-white/10" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12 items-stretch">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5 text-gold">
              <Crown size={24} aria-hidden="true" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                Top 3 Teams Felicitated
              </span>
            </div>
            <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed mb-8">
              The top 3 winning teams will remain in Butwal following the
              hackathon and receive cash prizes along with official certificates
              of achievement at the Butwal International Convention Center.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Date", value: "Ashadh 1, 2083", Icon: Clock },
                { label: "Venue", value: "BICC, Butwal", Icon: MapPin },
                { label: "Awards", value: "Cash + Certificates", Icon: Award },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="border border-white/10 p-4">
                  <Icon
                    className="text-gold mb-3"
                    size={22}
                    aria-hidden="true"
                  />
                  <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">
                    {label}
                  </span>
                  <span className="font-sans font-bold text-sm text-white leading-snug">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right presenter */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 border border-gold/20 bg-white/[0.03] p-8 md:p-10"
          >
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-gold">
              Presented by
            </span>
            <h3 className="font-sans font-black text-xl md:text-2xl uppercase text-white tracking-tight mt-3">
              Inspector General of Police
            </h3>
            <p className="font-sans font-bold text-lg text-gold mt-1">
              Dan Bahadur Karki
            </p>
            <p className="font-mono text-sm text-white/60 mt-4 leading-relaxed">
              Awards will be presented personally by the Inspector General of
              Police at the special felicitation program, one day after the
              hackathon concludes.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { Icon: Trophy, label: "First Place", accent: "text-gold" },
                { Icon: Award, label: "Second Place", accent: "text-crimson" },
                { Icon: Medal, label: "Third Place", accent: "text-white/50" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <p.Icon size={18} className={p.accent} aria-hidden="true" />
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/60">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Timeline ─────────────────────────────────────────────────── */

export function Timeline() {
  return (
    <>
      {/* Day 1 */}
      <section id="timeline" className="w-full bg-soft py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading label="Schedule" title="Event Timeline" />

          <DayHeader
            day={1}
            dateBs="Jestha 30, 2083"
            subtitle="Registration, Opening & Coding Begins"
          />

          <div className="relative mt-10 max-w-4xl mx-auto">
            <SpineLine />
            {day1Events.map((event, i) => (
              <TimelineRow key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Day 2 */}
      <section id="timeline-day2" className="w-full bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <DayHeader
            day={2}
            dateBs="Jestha 31, 2083"
            subtitle="Final Presentations & Awards"
          />

          <div className="relative mt-10 max-w-4xl mx-auto">
            <SpineLine />
            {day2Events.map((event, i) => (
              <TimelineRow key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Grand Finale */}
      <GrandFinale />
    </>
  );
}
