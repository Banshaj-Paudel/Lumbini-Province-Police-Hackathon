import { tickerItems } from "../lib/constants";

export function Ticker() {
  return (
    <aside className="w-full overflow-hidden bg-crimson" aria-label="Announcements ticker">
      <ul className="ticker-track py-2.5 list-none p-0 m-0 flex" role="marquee" aria-live="polite" aria-label="Scrolling announcements">
        {[0, 1].map((dup) => (
          <li key={dup} className="flex shrink-0 items-center" role="presentation">
            {tickerItems.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className="font-mono font-bold text-sm tracking-widest uppercase text-white flex-shrink-0"
                role="listitem"
              >
                {t}
                <span className="px-3" aria-hidden="true">/</span>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </aside>
  );
}
