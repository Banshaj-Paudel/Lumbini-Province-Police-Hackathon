import Link from "next/link";
import { BadgeMark } from "./BadgeMark";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Mentors", href: "#mentors" },
  { label: "Judges", href: "#judges" },
  { label: "Team", href: "#team" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy"
        >
          <BadgeMark size={34} />
          <div className="leading-none">
            <p className="text-[13px] font-bold tracking-tight text-slate-900">
              Lumbini Province Police
            </p>
            <p className="mono text-[10px] text-slate-400 mt-0.5 tracking-widest uppercase">
              Hackathon 2026
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#register"
          className="inline-flex h-9 items-center gap-1.5 bg-crimson hover:bg-crimson-2 px-4 text-[12px] font-semibold text-white tracking-wide transition-colors"
        >
          Register
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 5.5h9M6 1.5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
