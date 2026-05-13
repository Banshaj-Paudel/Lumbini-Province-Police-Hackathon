import { tickerItems } from "../lib/constants";

export function Ticker() {
  return (
    <div className="w-full overflow-hidden bg-crimson">
      <div className="ticker-track py-2.5">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {tickerItems.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className="font-mono font-bold text-sm tracking-widest uppercase text-white flex-shrink-0"
              >
                {t}
                <span className="px-3">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
