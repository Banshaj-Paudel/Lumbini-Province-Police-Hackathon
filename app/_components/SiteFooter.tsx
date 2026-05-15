import Link from "next/link";
import { BadgeMark } from "./BadgeMark";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">

      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <BadgeMark size={36} light />
            <div>
              <p className="text-[14px] font-bold text-white tracking-tight">
                Lumbini Province Police
              </p>
              <p className="mono text-[10px] text-slate-500 mt-0.5 tracking-widest uppercase">
                Hackathon · 2026
              </p>
            </div>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed max-w-xs text-slate-400">
            A national hackathon presented by Nepal Police, building toward a
            secure and digitally empowered Nepal.
          </p>
          <p className="mt-5 text-[12px] text-slate-500">
            Presented by{" "}
            <span className="text-slate-300 font-medium">Nepal Police</span>
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              heading: "Event",
              links: ["About", "Tracks", "Schedule", "Prizes"],
            },
            {
              heading: "Participate",
              links: ["Register", "Eligibility", "Rules", "FAQ"],
            },
            {
              heading: "People",
              links: ["Mentors", "Judges", "Team", "Sponsors"],
            },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-semibold text-white mb-4 tracking-tight">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-[13px] hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px]">
          <span>© 2026 Lumbini Province Police. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#terms"   className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
