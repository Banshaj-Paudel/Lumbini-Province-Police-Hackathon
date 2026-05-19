import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { DhakaZigzag } from "../../components/shared/DhakaZigzag";
import { tracks, accentMap, getTrackBySlug } from "../../lib/tracks";

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

  const a = accentMap[track.accent];
  const currentIdx = tracks.findIndex((t) => t.slug === track.slug);
  const next = tracks[(currentIdx + 1) % tracks.length];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />

      <section className="relative w-full bg-white py-16 md:py-24 border-b border-border overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <Link
            href="/#tracks"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-foreground/60 hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            ALL TRACKS
          </Link>

          <div className="flex items-stretch gap-5">
            <span className={`w-1 ${a.bar}`} aria-hidden />
            <div className="flex flex-col gap-5 min-w-0">
              <div className="flex items-center gap-3">
                <track.Icon className={a.icon} size={32} />
                <span
                  className={`font-mono text-xs font-bold tracking-widest uppercase ${a.label}`}
                >
                  TRACK {track.number}
                </span>
              </div>

              <h1 className="font-sans font-black text-4xl md:text-6xl uppercase text-foreground tracking-tighter leading-[0.95]">
                {track.title}
              </h1>

              <div className="max-w-md">
                <DhakaZigzag />
              </div>

              <p className="font-mono text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
                {track.long}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-foreground/40">
                  FOCUS AREAS
                </span>
                <span className="h-px flex-1 min-w-8 max-w-32 bg-border" />
                {track.subThemes.map((s, i) => (
                  <span
                    key={s.title}
                    className={`font-mono text-[10px] font-bold tracking-widest uppercase border border-border bg-white px-3 py-1.5 ${a.label}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex flex-col gap-3 mb-12 max-w-2xl">
            <span
              className={`font-mono text-xs font-bold tracking-widest uppercase ${a.label}`}
            >
              WHAT YOU CAN BUILD
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase text-foreground tracking-tighter leading-tight">
              SUB-THEMES & EXAMPLES
            </h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed mt-1">
              Each sub-theme below is a problem space. Pick one, narrow it, and
              build a solution that ships. The build ideas shown are only
              directions bring your own original, ethical idea.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {track.subThemes.map((s, i) => (
              <article
                key={s.title}
                className="relative bg-white border border-border p-8 md:p-10 overflow-hidden"
              >
                <span
                  className={`absolute top-0 left-0 h-1 w-full ${a.bar}`}
                  aria-hidden
                />

                <div className="flex items-center gap-4 mb-5">
                  <span
                    className={`font-sans font-black text-3xl md:text-4xl tracking-tighter leading-none ${a.label}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <h3 className="font-sans font-black text-2xl md:text-3xl uppercase text-foreground tracking-tight leading-tight mb-4">
                  {s.title}
                </h3>

                <p className="font-mono text-sm md:text-base text-foreground/70 leading-relaxed mb-8 max-w-3xl">
                  {s.desc}
                </p>

                <div className="bg-soft p-5 md:p-6 max-w-2xl flex items-start gap-4">
                  <Lightbulb
                    size={24}
                    className={`${a.icon} mt-0.5 shrink-0`}
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widest uppercase ${a.label}`}
                    >
                      BUILD IDEA · DIRECTION ONLY
                    </span>
                    <p className="font-mono text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                      {s.example}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-gold pl-6 py-2 max-w-3xl">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-gold block mb-2">
              NOTE
            </span>
            <p className="font-mono text-sm text-foreground/70 leading-relaxed">
              Participants are encouraged to build practical, ethical, and
              deployable solutions suitable for Nepal&apos;s operational
              realities.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-indigo py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-gold">
                READY TO BUILD?
              </span>
              <h3 className="font-sans font-black text-3xl md:text-4xl uppercase text-white tracking-tighter leading-tight">
                JOIN THE HACKATHON
              </h3>
              <p className="font-mono text-sm text-white/60 leading-relaxed">
                Form a team of 3–4, pick a sub-theme, and ship something that
                serves Nepal Police and the citizens of Lumbini Province.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[20rem]">
              <Link
                href="/#register"
                className="inline-flex items-center justify-between gap-5 bg-crimson text-white px-6 py-5 hover:bg-white hover:text-crimson transition-colors group"
              >
                <span className="font-mono font-bold text-sm uppercase tracking-widest">
                  REGISTER NOW
                </span>
                <ArrowRight
                  size={20}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>

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
