"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL, INSTAGRAM_URL, navItems } from "@/data/site";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 42);
    const frame = window.requestAnimationFrame(updateHeader);
    const timeout = window.setTimeout(updateHeader, 80);
    let hashTimeout = 0;
    const updateAfterHashChange = () => {
      window.clearTimeout(hashTimeout);
      hashTimeout = window.setTimeout(updateHeader, 80);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("hashchange", updateAfterHashChange);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.clearTimeout(hashTimeout);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("hashchange", updateAfterHashChange);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "border-b border-gold-light/15 bg-ink/95 shadow-[0_10px_28px_rgba(123,91,49,.08)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          aria-label="Iris Pleyade Wellness Valencia, volver al inicio"
          className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
        >
          <Logo compact />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/65 transition-colors hover:text-gold-light focus-visible:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Iris Pleyade"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/20 text-gold-light transition-colors hover:bg-gold-light/10 focus-visible:ring-2 focus-visible:ring-gold-light"
          >
            <Icon name="instagram" className="h-4 w-4" />
          </a>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gold-light">
            ES
          </span>
          <a href={BOOKING_URL} className="gold-button px-5 py-3 text-[10px]">
            Regala un masaje
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/25 text-gold-light transition-colors hover:bg-gold-light/10 focus-visible:ring-2 focus-visible:ring-gold-light lg:hidden"
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-transform ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-transform ${
                isOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-gold-light/10 bg-ink-soft/98 transition-[max-height] duration-300 lg:hidden ${
          isOpen ? "visible max-h-[520px]" : "invisible max-h-0"
        }`}
      >
        <nav aria-label="Navegación móvil" className="px-5 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/75 transition-colors hover:bg-gold-light/5 hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            className="gold-button mt-5 flex w-full justify-center py-3.5 text-xs"
          >
            Regala un masaje
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-gold-light/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-light transition-colors hover:bg-gold-light/10"
          >
            <Icon name="instagram" className="h-4 w-4" />
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
