"use client";

import { useEffect, type CSSProperties } from "react";

const stars = [
  [6, 12, 2, 7],
  [15, 29, 1, 9],
  [24, 76, 2, 8],
  [39, 57, 2, 10],
  [54, 36, 2, 7],
  [62, 81, 1, 9],
  [21, 48, 1, 8],
  [34, 88, 2, 9],
  [44, 69, 1, 7],
  [79, 89, 1, 7],
  [89, 45, 2, 11],
  [4, 61, 1, 8],
  [72, 5, 1, 7],
];

const sparkleStars = [
  [11, 38, 18, 13],
  [28, 16, 12, 11],
  [47, 92, 14, 15],
  [58, 51, 10, 12],
  [74, 27, 16, 14],
  [86, 68, 12, 10],
  [95, 12, 15, 16],
];

export function CosmicMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll(
      "main > section, footer, .luxury-card",
    );

    root.classList.add("motion-ready");
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "-4% 0px -8%", threshold: 0.04 },
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    let animationFrame = 0;
    let isScrollUpdateQueued = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      root.style.setProperty(
        "--cosmic-scroll-far",
        `${(-scrollY * 0.014).toFixed(2)}px`,
      );
      root.style.setProperty(
        "--cosmic-scroll-near",
        `${(-scrollY * 0.026).toFixed(2)}px`,
      );
      isScrollUpdateQueued = false;
    };

    const handleScroll = () => {
      if (isScrollUpdateQueued) return;
      isScrollUpdateQueued = true;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      root.classList.remove("motion-ready");
      root.style.removeProperty("--cosmic-scroll-far");
      root.style.removeProperty("--cosmic-scroll-near");
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="cosmic-motion">
      <span className="cosmic-backdrop-orbit cosmic-backdrop-orbit--one" />
      <span className="cosmic-backdrop-orbit cosmic-backdrop-orbit--two" />
      <span className="cosmic-backdrop-orbit cosmic-backdrop-orbit--three" />
      <div className="cosmic-starfield cosmic-starfield--far">
        {stars.map(([x, y, size, duration], index) => (
          <span
            key={`${x}-${y}`}
            className={`cosmic-star ${index % 6 === 0 ? "cosmic-star--gold" : ""}`}
            style={
              {
                "--star-x": `${x}%`,
                "--star-y": `${y}%`,
                "--star-size": `${size}px`,
                "--star-duration": `${duration}s`,
                "--star-delay": `${(index % 7) * -1.3}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="cosmic-starfield cosmic-starfield--near">
        {stars.slice(0, 5).map(([x, y, size, duration], index) => (
          <span
            key={`near-${x}-${y}`}
            className="cosmic-star cosmic-star--near"
            style={
              {
                "--star-x": `${(x + 17) % 100}%`,
                "--star-y": `${(y + 31) % 100}%`,
                "--star-size": `${size + 1}px`,
                "--star-duration": `${duration + 3}s`,
                "--star-delay": `${(index % 5) * -1.7}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="cosmic-starfield cosmic-starfield--sparkles">
        {sparkleStars.map(([x, y, size, duration], index) => (
          <span
            key={`sparkle-${x}-${y}`}
            className={`cosmic-cross-star ${
              index % 2 === 0 ? "cosmic-cross-star--soft" : ""
            }`}
            style={
              {
                "--spark-x": `${x}%`,
                "--spark-y": `${y}%`,
                "--spark-size": `${size}px`,
                "--spark-duration": `${duration}s`,
                "--spark-delay": `${index * -1.9}s`,
                "--spark-rotate": `${index * 18}deg`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <span className="cosmic-comet cosmic-comet--one" />
    </div>
  );
}
