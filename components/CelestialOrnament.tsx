type CelestialOrnamentProps = {
  className?: string;
  variant?: "orbit" | "constellation";
};

export function CelestialOrnament({
  className = "",
  variant = "orbit",
}: CelestialOrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={`celestial-ornament celestial-ornament--${variant} ${className}`}
    >
      <span className="celestial-orbit celestial-orbit--outer" />
      <span className="celestial-orbit celestial-orbit--inner" />
      <span className="celestial-orbit celestial-orbit--tilted" />
      <span className="celestial-spark celestial-spark--one">✦</span>
      <span className="celestial-spark celestial-spark--two">✧</span>
      <span className="celestial-spark celestial-spark--three">✦</span>
      <span className="celestial-dot celestial-dot--one" />
      <span className="celestial-dot celestial-dot--two" />
      <span className="celestial-dot celestial-dot--three" />
    </div>
  );
}
