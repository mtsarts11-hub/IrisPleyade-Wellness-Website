import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionCosmos } from "@/components/SectionCosmos";
import { experiences } from "@/data/site";

export function Experiences() {
  return (
    <section
      id="experiencias"
      className="cosmic-bg relative overflow-hidden border-y border-gold-light/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-gold-light/10" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-gold-light/[0.05]" />
      <SectionCosmos variant="experiences" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regala un momento inolvidable"
          title="Experiencias y bonos regalo"
          text="Regala bienestar, descanso y conexión con una experiencia premium en Iris Pleyade."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.name}
              className={`relative flex min-h-[480px] flex-col overflow-hidden rounded-2xl border p-7 sm:p-8 ${
                experience.featured
                  ? "border-gold-light/45 bg-[linear-gradient(155deg,rgba(255,255,255,.92),rgba(230,215,189,.55)_95%)] shadow-gold-soft"
                  : "border-gold-light/20 bg-ink-soft/75"
              }`}
            >
              {experience.featured ? (
                <span className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-gold-light/30 bg-gold-light/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gold-light">
                  Edición especial
                </span>
              ) : null}

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/35 text-gold-light">
                <Icon name={experience.icon} className="h-6 w-6" />
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-light">
                {experience.eyebrow}
              </p>
              <h3 className="mt-4 max-w-xs font-serif text-4xl leading-[0.92] text-cream">
                {experience.name}
              </h3>

              <ul className="mt-7 space-y-3 border-t border-gold-light/15 pt-6">
                {experience.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-cream/65"
                  >
                    <span className="text-[9px] text-gold-light">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={experience.href}
                className={`mt-auto justify-center px-6 py-3.5 ${
                  experience.featured ? "gold-button" : "outline-button"
                }`}
              >
                {experience.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
