import { CelestialOrnament } from "@/components/CelestialOrnament";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { MAPS_URL, WHATSAPP_URL, site } from "@/data/site";

const mapEmbedUrl =
  "https://www.google.com/maps?q=C%2F%20de%20Bail%C3%A8n%2C%204%2C%20Extramurs%2C%2046007%20Val%C3%A8ncia%2C%20Valencia%2C%20Espa%C3%B1a&output=embed";

export function Contact() {
  return (
    <section id="contacto" className="section-space relative overflow-hidden">
      <CelestialOrnament
        variant="constellation"
        className="-left-20 top-14 h-64 w-64 opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ven a conocernos"
          title="Contacto y ubicación"
          text="Tu momento de calma te espera en el centro de Valencia, a pocos pasos de la Estación del Norte."
        />

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-gold-light/25 bg-ink-soft lg:grid-cols-[.82fr_1.18fr]">
          <div className="p-6 sm:p-9 lg:p-10">
            <dl className="space-y-6">
              <div className="flex gap-4">
                <dt className="mt-0.5 text-gold-light">
                  <Icon name="message" className="h-5 w-5" />
                  <span className="sr-only">Teléfono / WhatsApp</span>
                </dt>
                <dd>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light">
                    Teléfono / WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    className="mt-2 block text-sm text-cream/80 transition-colors hover:text-gold-light"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="mt-0.5 text-gold-light">
                  <Icon name="map" className="h-5 w-5" />
                  <span className="sr-only">Dirección</span>
                </dt>
                <dd>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light">
                    Dirección
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-cream/80">
                    {site.address}
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="mt-0.5 text-gold-light">
                  <Icon name="clock" className="h-5 w-5" />
                  <span className="sr-only">Horario</span>
                </dt>
                <dd>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light">
                    Horario
                  </p>
                  <p className="mt-2 text-sm text-cream/80">{site.hours}</p>
                </dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-gold-light/15 pt-7">
              <p className="text-xs font-semibold tracking-[0.12em] text-gold-light">
                {site.rating} ★★★★★{" "}
                <span className="text-cream/45">· {site.reviewCount} reseñas</span>
              </p>
            </div>

            <a
              href={MAPS_URL}
              className="outline-button mt-7 justify-center px-6 py-3.5"
            >
              Ver en Google Maps
            </a>
          </div>

          <div className="relative min-h-[360px] border-t border-gold-light/20 lg:border-l lg:border-t-0">
            <iframe
              title="Mapa de Iris Pleyade Wellness Valencia"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[94%] saturate-[75%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-color" />
          </div>
        </div>
      </div>
    </section>
  );
}
