import Image from "next/image";
import { aboutHighlights } from "@/data/site";
import { CelestialOrnament } from "@/components/CelestialOrnament";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionCosmos } from "@/components/SectionCosmos";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden border-y border-gold-light/10 bg-gold-light/[0.025] py-24 sm:py-32"
    >
      <CelestialOrnament
        variant="constellation"
        className="-right-24 top-10 h-72 w-72 opacity-35"
      />
      <SectionCosmos variant="about" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[10rem_10rem_1rem_1rem] border border-gold-light/20" />
          <figure className="relative aspect-[4/5] overflow-hidden rounded-[10rem_10rem_1rem_1rem] border border-gold-light/30 bg-[radial-gradient(circle_at_50%_28%,rgba(216,184,102,.15),transparent_30%),linear-gradient(150deg,#15110e,#070706)]">
            <Image
              src="/images/iris-owner-editorial.jpg"
              alt="Retrato editorial de Iris, fundadora de Iris Pleyade Wellness Valencia"
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover object-[center_-32px] sm:object-[center_-42px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2e22]/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-7 border-t border-[#ead39f]/45 pt-4 text-center text-[9px] font-bold uppercase tracking-[0.3em] text-[#f1dca6]">
              Iris · fundadora y terapeuta
            </figcaption>
          </figure>
        </div>

        <div>
          <SectionHeading
            eyebrow="Un espacio creado con presencia"
            title="Sobre Iris Pleyade"
            align="left"
          />
          <p className="mt-7 max-w-2xl text-sm leading-8 text-cream/65 sm:text-base">
            Iris Pleyade nace como un espacio de bienestar consciente en
            Valencia, creado para acompañarte a reconectar con tu cuerpo, tu
            calma y tu propia energía. Cada sesión se cuida con atención,
            presencia y una sensibilidad especial hacia lo que cada persona
            necesita.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 border-t border-gold-light/15 pt-4 text-sm leading-6 text-cream/75"
              >
                <span className="mt-0.5 text-gold-light">✦</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
