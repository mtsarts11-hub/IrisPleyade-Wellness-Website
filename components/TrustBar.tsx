import { WHATSAPP_URL } from "@/data/site";

const trustItems = [
  "5,0 ★★★★★",
  "42 reseñas",
  "Valencia, Extramurs",
  "Reservas online disponibles",
];

export function TrustBar() {
  return (
    <section
      aria-label="Información destacada"
      className="border-b border-gold-light/10 bg-gold-light/[0.035]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-8">
            {index ? <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" /> : null}
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                index === 0 ? "text-gold-light" : "text-cream/60"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-8">
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
          <a
            href={WHATSAPP_URL}
            className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream/60 transition-colors hover:text-gold-light"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}
