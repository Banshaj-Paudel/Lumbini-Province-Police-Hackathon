export function BadgeMark({ size = 40, light = false }: { size?: number; light?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nepal Police"
      role="img"
      className="shrink-0"
    >
      {/* Shield body */}
      <path
        d="M24 4L44 12V28C44 37 34 43 24 46C14 43 4 37 4 28V12L24 4Z"
        fill={light ? "rgba(255,255,255,0.12)" : "#001a33"}
        stroke={light ? "rgba(255,255,255,0.3)" : "#001a33"}
        strokeWidth="1.5"
      />
      {/* Gold star */}
      <path
        d="M24 13L25.8 19H32L27 23L28.8 29L24 26L19.2 29L21 23L16 19H22.2Z"
        fill="#C9963A"
      />
      {/* Crimson base band */}
      <path
        d="M4 30C4 30 8 40 24 46C40 40 44 30 44 30H4Z"
        fill="#DC143C"
        opacity="0.9"
      />
    </svg>
  );
}
