import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-y border-gold-light/10 bg-gold-light/[0.025] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Todo lo que necesitas saber"
            title="Preguntas frecuentes"
            align="left"
          />
          <p className="mt-5 text-sm leading-7 text-cream/55">
            Si te queda alguna duda, estaremos encantados de orientarte
            personalmente por WhatsApp.
          </p>
        </div>

        <div className="divide-y divide-gold-light/15 border-y border-gold-light/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-serif text-xl text-cream marker:content-none sm:text-2xl">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-light/25 text-lg leading-none text-gold-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-cream/60">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
