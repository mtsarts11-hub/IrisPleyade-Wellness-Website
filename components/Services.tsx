"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CelestialOrnament } from "@/components/CelestialOrnament";
import { SectionHeading } from "@/components/SectionHeading";
import { BOOKING_URL, serviceCategories } from "@/data/site";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const category = serviceCategories[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % serviceCategories.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  const showCategory = (index: number) => {
    setActiveIndex((index + serviceCategories.length) % serviceCategories.length);
  };

  return (
    <section id="servicios" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute -right-36 top-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <CelestialOrnament className="-left-24 top-16 h-72 w-72 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Carta de servicios"
          title="Elige cómo quieres cuidarte"
          text="Descubre masajes, rituales, experiencias en pareja, belleza natural y terapias energéticas pensadas para cada momento."
        />

        <div
          data-native-scroll
          className="mt-10 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {serviceCategories.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => showCategory(index)}
              aria-pressed={activeIndex === index}
              className={`shrink-0 rounded-full border px-4 py-3 text-[9px] font-bold uppercase tracking-[0.17em] transition-all ${
                activeIndex === index
                  ? "border-gold-light/70 bg-gold-light/15 text-gold-light"
                  : "border-gold-light/15 bg-ink-soft/70 text-cream/50 hover:border-gold-light/35 hover:text-gold-light"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <article className="luxury-card mt-5 grid overflow-hidden lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px]">
            <Image
              key={category.image}
              src={category.image}
              alt={`Ambientación de ${category.name} en Iris Pleyade`}
              fill
              sizes="(min-width: 1024px) 43vw, 100vw"
              className="carousel-image-enter object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2e22]/85 via-[#3d2e22]/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ecd49d]">
                {category.eyebrow}
              </p>
              <h3 className="mt-3 max-w-md font-serif text-4xl leading-[.95] text-white sm:text-5xl">
                {category.name}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light">
                Servicios disponibles
              </p>
              <p className="font-serif text-lg text-cream/45">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(serviceCategories.length).padStart(2, "0")}
              </p>
            </div>

            <ul className="mt-5 divide-y divide-gold-light/15 border-y border-gold-light/15">
              {category.services.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-serif text-xl leading-tight text-cream sm:text-2xl">
                      {service.name}
                    </p>
                    {service.duration ? (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream/40">
                        {service.duration}
                      </p>
                    ) : null}
                  </div>
                  <p className="shrink-0 font-serif text-2xl text-gold-light">
                    {service.price}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => showCategory(activeIndex - 1)}
                  aria-label="Ver categoría anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/25 text-gold-light transition-colors hover:bg-gold-light/10 focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => showCategory(activeIndex + 1)}
                  aria-label="Ver categoría siguiente"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/25 text-gold-light transition-colors hover:bg-gold-light/10 focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  →
                </button>
              </div>
              <a href={BOOKING_URL} className="gold-button justify-center px-6 py-3.5">
                Reserva tu cita
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
