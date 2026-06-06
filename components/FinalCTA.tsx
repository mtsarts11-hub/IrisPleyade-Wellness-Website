import { BOOKING_URL, WHATSAPP_URL } from "@/data/site";
import { SectionCosmos } from "@/components/SectionCosmos";

export function FinalCTA() {
  return (
    <section className="cosmic-bg relative overflow-hidden border-y border-gold-light/10 py-24 sm:py-32">
      <SectionCosmos variant="cta" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="text-xl text-gold-light">✦</span>
        <h2 className="mt-5 font-serif text-5xl leading-[0.9] text-cream sm:text-7xl">
          Permítete parar, respirar y reconectar contigo
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-cream/65 sm:text-base">
          Reserva tu experiencia en Iris Pleyade y regálate un momento de
          bienestar profundo en Valencia.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={BOOKING_URL} className="gold-button justify-center px-7 py-4">
            Regala un masaje
          </a>
          <a
            href={WHATSAPP_URL}
            className="outline-button justify-center px-7 py-4"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
