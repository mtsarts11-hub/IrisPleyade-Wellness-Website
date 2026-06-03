import Image from "next/image";
import type { CSSProperties } from "react";
import { BOOKING_URL } from "@/data/site";

const orbitStars = [
  [7, 26, "✦", 10],
  [18, 9, "✧", 12],
  [42, 3, "✦", 9],
  [69, 10, "✦", 11],
  [88, 28, "✧", 13],
  [96, 56, "✦", 10],
  [83, 82, "✧", 12],
  [55, 95, "✦", 9],
  [24, 89, "✦", 11],
  [4, 62, "✧", 13],
];

function OrbitSystem({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`hero-orbit-system ${className}`}>
      <span className="hero-orbit-ring hero-orbit-ring--outer" />
      <span className="hero-orbit-ring hero-orbit-ring--middle" />
      <span className="hero-orbit-ring hero-orbit-ring--inner" />
      <span className="hero-orbit-path hero-orbit-path--one" />
      <span className="hero-orbit-path hero-orbit-path--two" />
      <span className="hero-orbit-moon">☾</span>
      {orbitStars.map(([x, y, symbol, duration], index) => (
        <span
          key={`${x}-${y}`}
          className={`hero-orbit-star ${
            index % 3 === 0 ? "hero-orbit-star--large" : ""
          }`}
          style={
            {
              "--orbit-x": `${x}%`,
              "--orbit-y": `${y}%`,
              "--orbit-duration": `${duration}s`,
              "--orbit-delay": `${index * -0.8}s`,
            } as CSSProperties
          }
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}

function CloudLayers() {
  return (
    <div aria-hidden="true" className="hero-clouds">
      <span className="hero-cloud-track hero-cloud-track--back">
        <span className="hero-cloud-texture hero-cloud-texture--one" />
        <span className="hero-cloud-texture hero-cloud-texture--two" />
      </span>
      <span className="hero-cloud-track hero-cloud-track--front">
        <span className="hero-cloud-texture hero-cloud-texture--one" />
        <span className="hero-cloud-texture hero-cloud-texture--two" />
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[1110px] overflow-hidden border-b border-gold-light/15 bg-[#f7f0e7] pt-24 sm:min-h-[1150px] lg:min-h-[850px] lg:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(255,255,255,.95),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(233,207,170,.22),transparent_30%)]" />

      <div className="absolute inset-0 hidden lg:block">
        <div className="hero-desktop-portrait">
          <Image
            src="/images/hero-iris-hq-v2.jpg"
            alt="Mujer disfrutando de un momento de bienestar y calma"
            fill
            quality={95}
            priority
            sizes="(min-width: 1024px) 1600px, 100vw"
            className="object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,240,231,.98)_0%,rgba(247,240,231,.94)_36%,rgba(247,240,231,.55)_53%,rgba(247,240,231,.05)_72%,transparent_100%)]" />
      </div>

      <OrbitSystem className="hero-orbit-system--portrait hero-desktop-orbit hidden h-[700px] w-[700px] opacity-90 lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[790px] max-w-7xl items-start px-5 pb-12 pt-12 sm:px-8 lg:min-h-[790px] lg:items-center lg:pb-24 lg:pt-16">
        <div className="w-full max-w-[650px]">
          <p className="section-eyebrow justify-start">
            <span className="h-px w-8 bg-gold/70" />
            Iris Pleyade · Wellness Valencia
          </p>

          <h1
            id="hero-title"
            className="mt-8 max-w-[640px] font-serif text-[4.6rem] leading-[0.88] tracking-[-0.05em] text-cream sm:text-[6rem] lg:text-[6.7rem]"
          >
            Bienestar que nace de ti, para{" "}
            <span className="italic text-gold-light">tu mejor versión.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-cream/70 sm:text-base sm:leading-8">
            Masajes terapéuticos, Reiki y experiencias personalizadas en
            Valencia para cuidar tu cuerpo, liberar tensiones y recuperar tu
            equilibrio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={BOOKING_URL} className="gold-button justify-center px-8 py-4">
              Regala un masaje
            </a>
            <a
              href="#servicios"
              className="outline-button justify-center px-8 py-4"
            >
              Nuestros servicios
            </a>
          </div>

          <figure className="relative mt-9 aspect-[4/5] overflow-hidden rounded-[9rem_9rem_1.5rem_1.5rem] border border-gold-light/20 bg-ink-soft shadow-gold-soft lg:hidden">
            <Image
              src="/images/hero-iris-hq-v2.jpg"
              alt="Mujer disfrutando de un momento de bienestar y calma"
              fill
              quality={95}
              priority
              sizes="800px"
              className="object-cover object-[72%_center]"
            />
            <OrbitSystem className="hero-orbit-system--portrait -left-[12%] top-[4%] h-[112%] w-[130%] opacity-80" />
          </figure>
        </div>
      </div>

      <CloudLayers />
    </section>
  );
}
