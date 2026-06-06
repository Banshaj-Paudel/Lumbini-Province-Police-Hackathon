import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { DhakaZigzag } from "../../components/shared/DhakaZigzag";
import { tracks, getTrackBySlug } from "../../lib/tracks";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) return { title: "Track not found" };
  return {
    title: `${track.title} | Track ${track.number} | Hackathon 2083`,
    description: track.long,
  };
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) notFound();

  const currentIdx = tracks.findIndex((t) => t.slug === track.slug);
  const next = tracks[(currentIdx + 1) % tracks.length];
  const problemCount = `${track.problems.length} ${
    track.problems.length === 1 ? "PROBLEM" : "PROBLEMS"
  }`;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />

      <section className="relative w-full bg-white py-14 sm:py-16 md:py-24 border-b border-border overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 md:px-10">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#tracks"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-foreground/60 hover:text-crimson transition-colors mb-8 sm:mb-10"
          >
            <ArrowLeft size={14} />
            ALL TRACKS
          </a>

          <div className="flex items-stretch gap-4 sm:gap-5">
            <span className="w-1 shrink-0 bg-crimson" aria-hidden />
            <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <track.Icon
                  className="text-foreground"
                  size={30}
                  strokeWidth={1.5}
                />
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/50">
                  TRACK {track.number}
                </span>
                <span className="h-3 w-px bg-border" aria-hidden />
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-foreground/50">
                  {problemCount}
                </span>
              </div>

              <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-6xl uppercase text-foreground tracking-tighter leading-[0.95] wrap-break-word">
                {track.title}
              </h1>

              <p className="font-mono text-sm md:text-base font-bold text-foreground/80 leading-relaxed">
                {track.tagline}
              </p>

              <div className="max-w-md">
                <DhakaZigzag />
              </div>

              <p className="font-mono text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed max-w-3xl">
                {track.long}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-soft py-14 sm:py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-crimson">
              THE SCALE OF THE PROBLEM
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {track.stats.map((s) => (
              <div
                key={s.value}
                className="bg-white border border-border p-5 md:p-6 flex flex-col gap-3"
              >
                <span className="font-sans font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none text-foreground">
                  {s.value}
                </span>
                <span className="font-mono text-xs text-foreground/60 leading-relaxed">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 mb-10 sm:mb-12 max-w-2xl">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-crimson">
              WHAT YOU CAN BUILD
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl uppercase text-foreground tracking-tighter leading-tight">
              GUIDING PROBLEM STATEMENTS
            </h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed mt-1">
              Each problem below is a direction, not a blueprint. Pick one,
              research what already exists, and build a solution that ships.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {track.problems.map((p) => (
              <article
                key={p.number}
                className="relative bg-soft border border-border p-6 sm:p-8 md:p-10 overflow-hidden"
              >
                <span
                  className="absolute top-0 left-0 h-1 w-full bg-crimson"
                  aria-hidden
                />

                <div className="flex items-baseline gap-3 sm:gap-4 mb-6">
                  <span className="font-sans font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter leading-none text-foreground/25 shrink-0">
                    {p.number.padStart(2, "0")}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl uppercase text-foreground tracking-tight leading-tight">
                    {p.title}
                  </h3>
                </div>

                <div className="bg-white border border-border p-5 md:p-6 mb-8 flex items-start gap-3.5 sm:gap-4">
                  <HelpCircle
                    size={22}
                    className="text-foreground/40 mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <p className="font-mono text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                    {p.question}
                  </p>
                </div>

                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-foreground/40 block mb-5">
                  THE NUMBERS BEHIND IT
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {p.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3.5 bg-white border border-border p-4 sm:p-5 transition-colors hover:border-foreground/30"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground/25"
                        aria-hidden
                      />
                      <span className="font-mono text-sm text-foreground/70 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-14 border border-border bg-soft overflow-hidden">
            <span
              className="absolute top-0 left-0 h-1 w-full bg-gold"
              aria-hidden
            />
            <div className="p-6 sm:p-8 md:p-10">
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gold block mb-4">
                A NOTE TO PARTICIPANTS
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl uppercase text-foreground tracking-tight leading-tight mb-6">
                These are directions, not blueprints.
              </h3>
              <div className="flex flex-col gap-5 max-w-3xl">
                <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                  The problem statements above are simple guides to point you in
                  the right direction. They are not prescriptive specifications.
                  Participants are fully encouraged to apply their own
                  creativity, research, and analysis - as long as the solution
                  stays within the scope of usability and feasibility for Nepal
                  Police.
                </p>
                <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                  Before building, participants are strongly requested to
                  research existing tools and resources already available in
                  Nepal Police, to avoid duplicating something that already
                  exists. If you cannot find relevant information, or have
                  questions about technical constraints, legal boundaries,
                  existing systems, or operational realities, contact the
                  contact persons listed on this page. They will walk you
                  through everything - from technical details to legal
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-indigo py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-gold">
                READY TO BUILD?
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl uppercase text-white tracking-tighter leading-tight">
                JOIN THE HACKATHON
              </h3>
              <p className="font-mono text-sm text-white/60 leading-relaxed">
                Form a team of 3–4, pick a problem statement, and ship something
                that serves Nepal Police and the citizens of Lumbini Province.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[20rem]">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <span
                aria-disabled="true"
                role="status"
                className="inline-flex items-center justify-between gap-5 bg-crimson/60 text-white/80 px-6 py-5 transition-colors group"
              >
                <span className="font-mono font-bold text-sm uppercase tracking-widest">
                  Registration Closed
                </span>
                <ArrowRight
                  size={20}
                  className="shrink-0 transition-transform"
                />
              </span>

              <Link
                href={`/tracks/${next.slug}`}
                className="inline-flex items-center justify-between gap-5 border border-white/20 text-white px-6 py-4 hover:bg-white/5 transition-colors group"
              >
                <div className="flex flex-col gap-0.5 text-left min-w-0">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gold">
                    NEXT · TRACK {next.number}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider uppercase truncate">
                    {next.title}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
