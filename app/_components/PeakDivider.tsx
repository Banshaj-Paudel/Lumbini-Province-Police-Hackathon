/** Himalayan ridge - transitions navy hero into the white content area */
export function PeakDivider() {
  return (
    <div aria-hidden className="w-full -mb-px pointer-events-none select-none">
      <svg
        viewBox="0 0 1440 80"
        width="100%"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80V52L110 22L270 44L420 8L590 36L740 4L900 30L1060 16L1220 38L1360 14L1440 24V80Z"
          fill="#000d1a"
        />
        {/* Brass ridge line */}
        <polyline
          points="0,52 110,22 270,44 420,8 590,36 740,4 900,30 1060,16 1220,38 1360,14 1440,24"
          stroke="#c9963a"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
