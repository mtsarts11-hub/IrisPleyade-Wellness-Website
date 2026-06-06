type CelestialOrnamentProps = {
  className?: string;
  variant?: "halo" | "sparkles";
};

export function CelestialOrnament({
  className = "",
  variant = "halo",
}: CelestialOrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={`celestial-ornament celestial-ornament--${variant} ${className}`}
    >
      <span className="celestial-glow celestial-glow--one" />
      <span className="celestial-glow celestial-glow--two" />
      <span className="celestial-spark celestial-spark--one">✦</span>
      <span className="celestial-spark celestial-spark--two">✧</span>
      <span className="celestial-spark celestial-spark--three">✦</span>
      <span className="celestial-dot celestial-dot--one" />
      <span className="celestial-dot celestial-dot--two" />
      <span className="celestial-dot celestial-dot--three" />
    </div>
  );
}
