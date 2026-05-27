"use client";

import { useRef, useState, useCallback, useEffect, type PointerEvent } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  Users,
  Mail,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./shared/SectionHeading";

type Step = {
  n: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const steps: Step[] = [
  {
    n: "01",
    Icon: ClipboardList,
    title: "Register & Submit Proposal",
    desc: "Complete registration and submit your one-page proposal by Jestha 20, 2083.",
    tag: "Deadline · Jestha 20, 2083",
  },
  {
    n: "02",
    Icon: Search,
    title: "Screening & Evaluation",
    desc: "Applications are reviewed on innovation, feasibility, problem understanding, and relevance to policing challenges.",
    tag: "Reviewed by the panel",
  },
  {
    n: "03",
    Icon: Users,
    title: "Team Selection",
    desc: "The top 20 teams are selected and invited to participate in the hackathon.",
    tag: "Top 20 teams advance",
  },
  {
    n: "04",
    Icon: Mail,
    title: "Notification",
    desc: "Selected teams receive an official invitation and further event details via email.",
    tag: "Official invitation by email",
  },
];

const GAP = 20; /* matches gap-5 */

export function SelectionProcess() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragPointerId = useRef<number | null>(null);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const draggingRef = useRef(false);
  const dragAxisLock = useRef<"x" | "y" | null>(null);
  const dragLastX = useRef(0);
  const dragLastTime = useRef(0);
  const dragVelocity = useRef(0);
  const inertiaRaf = useRef<number | null>(null);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (card) {
      const stride = card.offsetWidth + GAP;
      setActive(
        Math.min(steps.length - 1, Math.round(el.scrollLeft / stride))
      );
    }
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  useEffect(() => {
    return () => {
      if (inertiaRaf.current) {
        cancelAnimationFrame(inertiaRaf.current);
      }
    };
  }, []);

  const scrollByDir = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const stride = card ? card.offsetWidth + GAP : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * stride, behavior: "smooth" });
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    const isTouch = event.pointerType === "touch";
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    if (!isTouch) {
      event.preventDefault();
    }
    if (inertiaRaf.current) {
      cancelAnimationFrame(inertiaRaf.current);
      inertiaRaf.current = null;
    }
    draggingRef.current = true;
    dragPointerId.current = event.pointerId;
    dragStartX.current = event.clientX;
    dragStartY.current = event.clientY;
    dragStartScroll.current = el.scrollLeft;
    dragAxisLock.current = null;
    dragLastX.current = event.clientX;
    dragLastTime.current = performance.now();
    dragVelocity.current = 0;
    setIsDragging(true);
    el.setPointerCapture(event.pointerId);
  };

  const onDragMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !draggingRef.current) return;
    if (dragPointerId.current !== event.pointerId) return;
    const deltaX = event.clientX - dragStartX.current;
    const deltaY = event.clientY - dragStartY.current;
    if (event.pointerType === "touch") {
      if (!dragAxisLock.current) {
        if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) return;
        dragAxisLock.current =
          Math.abs(deltaX) >= Math.abs(deltaY) ? "x" : "y";
        if (dragAxisLock.current === "y") {
          draggingRef.current = false;
          dragPointerId.current = null;
          setIsDragging(false);
          if (el.hasPointerCapture(event.pointerId)) {
            el.releasePointerCapture(event.pointerId);
          }
          return;
        }
      }
      if (dragAxisLock.current !== "x") return;
    }
    event.preventDefault();
    const delta = deltaX;
    el.scrollLeft = dragStartScroll.current - delta;
    const now = performance.now();
    const dt = now - dragLastTime.current;
    if (dt > 0) {
      dragVelocity.current = (event.clientX - dragLastX.current) / dt;
      dragLastX.current = event.clientX;
      dragLastTime.current = now;
    }
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !draggingRef.current) return;
    if (dragPointerId.current === event.pointerId) {
      if (el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
    }
    draggingRef.current = false;
    dragPointerId.current = null;
    setIsDragging(false);
    const startVelocity = -dragVelocity.current;
    if (Math.abs(startVelocity) < 0.02) return;
    let velocity = startVelocity;
    let lastTime = performance.now();
    const step = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + velocity * dt;
      el.scrollLeft = Math.max(0, Math.min(max, next));
      if ((el.scrollLeft <= 0 && velocity < 0) || (el.scrollLeft >= max && velocity > 0)) {
        velocity = 0;
      }
      const decay = Math.exp(-0.0035 * dt);
      velocity *= decay;
      if (Math.abs(velocity) < 0.02) {
        inertiaRaf.current = null;
        return;
      }
      inertiaRaf.current = requestAnimationFrame(step);
    };
    inertiaRaf.current = requestAnimationFrame(step);
  };

  return (
    <section
      id="process"
      className="w-full bg-soft py-24 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading label="HOW IT WORKS" title="SELECTION PROCESS" />

        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between -mt-4 mb-12">
          <p className="font-mono text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Four steps from registration to team notification, exactly how
            teams are screened, selected, and invited to Hack4Safety.
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/50">
              <span className="text-crimson">
                {String(active + 1).padStart(2, "0")}
              </span>{" "}
              / {String(steps.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              disabled={atStart}
              aria-label="Previous step"
              className="flex h-10 w-10 items-center justify-center border border-border bg-white text-foreground transition-colors hover:border-crimson hover:text-crimson disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              disabled={atEnd}
              aria-label="Next step"
              className="flex h-10 w-10 items-center justify-center border border-border bg-white text-foreground transition-colors hover:border-crimson hover:text-crimson disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          onScroll={update}
          onPointerDown={startDrag}
          onPointerMove={onDragMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
          className={`no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-1 touch-pan-y ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {steps.map((s) => (
            <motion.article
              key={s.n}
              data-card
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group relative flex shrink-0 snap-start flex-col border border-border bg-white transition-colors hover:border-foreground/30 w-[80vw] sm:w-[20rem] md:w-[21rem]"
            >
              <span
                className="absolute top-0 left-0 h-1 w-full bg-crimson"
                aria-hidden
              />

              <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-black text-5xl md:text-6xl tracking-tighter leading-none text-foreground/10 transition-colors group-hover:text-crimson/20">
                    {s.n}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-border bg-soft text-foreground transition-colors group-hover:border-crimson group-hover:text-crimson">
                    <s.Icon size={24} strokeWidth={1.5} aria-hidden />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-crimson">
                    STEP {s.n}
                  </span>
                  <h3 className="font-sans font-black text-lg md:text-xl uppercase text-foreground tracking-tight leading-tight">
                    {s.title}
                  </h3>
                </div>

                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-auto flex items-center gap-2.5 border-t border-border pt-5">
                  <span
                    className="h-1.5 w-1.5 shrink-0 bg-gold"
                    aria-hidden
                  />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-foreground/50">
                    {s.tag}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div
          className="mt-8 h-[3px] w-full bg-border"
          role="presentation"
        >
          <div
            className="h-full bg-crimson transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(progress * 100, 6)}%` }}
          />
        </div>

        <p className="mt-4 flex items-center justify-end text-foreground/40 sm:hidden">
          <span className="text-xs font-mono pr-2">Swipe to explore all steps</span>
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </p>
      </div>
    </section>
  );
}
