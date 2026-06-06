import type { CSSProperties } from "react";

type SectionCosmosVariant =
  | "services"
  | "experiences"
  | "about"
  | "reviews"
  | "faq"
  | "contact"
  | "cta"
  | "bar";

type SectionCosmosProps = {
  className?: string;
  variant: SectionCosmosVariant;
};

const sectionStars: Record<SectionCosmosVariant, number[][]> = {
  services: [
    [11, 18, 18, 0],
    [24, 82, 11, 1],
    [41, 10, 13, 2],
    [76, 23, 19, 3],
    [88, 74, 12, 4],
    [18, 52, 9, 5],
    [68, 8, 10, 6],
    [57, 88, 8, 2],
    [94, 44, 10, 5],
    [31, 34, 7, 4],
  ],
  experiences: [
    [9, 70, 12, 2],
    [21, 23, 17, 0],
    [49, 14, 11, 4],
    [69, 78, 15, 1],
    [91, 37, 18, 3],
    [35, 90, 9, 5],
    [82, 11, 10, 6],
    [58, 86, 8, 2],
    [76, 53, 11, 5],
    [14, 43, 7, 4],
  ],
  about: [
    [8, 26, 14, 3],
    [34, 74, 12, 1],
    [63, 15, 18, 2],
    [86, 62, 13, 4],
    [22, 48, 9, 5],
    [72, 87, 11, 6],
    [58, 42, 8, 2],
    [92, 22, 10, 5],
    [14, 86, 7, 4],
  ],
  reviews: [
    [12, 18, 13, 0],
    [29, 62, 18, 2],
    [53, 32, 11, 4],
    [71, 86, 15, 1],
    [92, 20, 12, 3],
    [41, 78, 10, 5],
    [82, 54, 9, 6],
    [62, 12, 8, 1],
    [17, 86, 10, 4],
    [95, 76, 7, 5],
  ],
  faq: [
    [10, 78, 15, 1],
    [27, 26, 12, 3],
    [58, 70, 18, 0],
    [84, 18, 14, 2],
    [36, 88, 9, 5],
    [73, 48, 11, 6],
    [51, 15, 8, 1],
    [90, 70, 10, 4],
    [16, 44, 7, 5],
  ],
  contact: [
    [13, 24, 16, 0],
    [31, 84, 11, 4],
    [64, 18, 14, 2],
    [88, 66, 19, 1],
    [47, 72, 9, 5],
    [76, 36, 10, 6],
    [58, 18, 8, 2],
    [18, 62, 10, 4],
    [94, 28, 7, 5],
  ],
  cta: [
    [14, 42, 12, 3],
    [27, 76, 18, 0],
    [48, 18, 14, 1],
    [73, 70, 11, 4],
    [91, 32, 17, 2],
    [37, 56, 10, 5],
    [84, 84, 9, 6],
    [59, 20, 8, 1],
    [12, 82, 10, 4],
    [96, 66, 7, 5],
  ],
  bar: [
    [18, 38, 10, 0],
    [47, 52, 12, 2],
    [82, 36, 10, 1],
    [63, 70, 8, 3],
  ],
};

export function SectionCosmos({ className = "", variant }: SectionCosmosProps) {
  return (
    <div
      aria-hidden="true"
      className={`section-cosmos section-cosmos--${variant} ${className}`}
    >
      <span className="section-cosmos-glow section-cosmos-glow--one" />
      <span className="section-cosmos-glow section-cosmos-glow--two" />
      <span className="section-cosmos-dust section-cosmos-dust--one" />
      <span className="section-cosmos-dust section-cosmos-dust--two" />
      {sectionStars[variant].map(([x, y, size, delay], index) => (
        <span
          key={`${variant}-${x}-${y}`}
          className={`section-cosmos-star ${
            index % 2 === 0 ? "section-cosmos-star--bright" : ""
          }`}
          style={
            {
              "--section-star-x": `${x}%`,
              "--section-star-y": `${y}%`,
              "--section-star-size": `${size}px`,
              "--section-star-delay": `${delay * -1.2}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
