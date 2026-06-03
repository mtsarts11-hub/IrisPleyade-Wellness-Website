import { reviews, site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionCosmos } from "@/components/SectionCosmos";

export function Reviews() {
  return (
    <section id="resenas" className="section-space relative overflow-hidden">
      <SectionCosmos variant="reviews" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={`${site.rating} en Google · ${site.reviewCount} reseñas`}
          title="Reseñas de clientes"
          text="Reseñas reales del perfil de Google de Iris Pleyade, traducidas al español para mantener la experiencia del sitio."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.quote} className="luxury-card p-6 sm:p-7">
              <p
                aria-label="5 estrellas"
                className="text-xs tracking-[0.2em] text-gold-light"
              >
                ★★★★★
              </p>
              <blockquote className="mt-5 font-serif text-2xl leading-tight text-cream">
                {review.quote}
              </blockquote>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/45">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
