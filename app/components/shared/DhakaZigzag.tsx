export function DhakaZigzag({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 8"
      preserveAspectRatio="none"
      className="w-full h-2"
      aria-hidden
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
        stroke={light ? "rgba(255,255,255,0.4)" : "rgba(45,53,131,0.15)"}
        strokeWidth="0.6"
      />
    </svg>
  );
}
