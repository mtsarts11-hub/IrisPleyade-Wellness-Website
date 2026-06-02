import { Logo } from "@/components/Logo";
import { MAPS_URL, WHATSAPP_URL, navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gold-light/15 bg-[#eee6d9] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-cream/50">
            {site.shortDescription} Un espacio íntimo para reconectar con tu
            calma, tu cuerpo y tu energía.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-light">
            Explora
          </p>
          <nav aria-label="Navegación del pie de página">
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-cream/55 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-light">
            Encuéntranos
          </p>
          <p className="mt-4 text-xs leading-6 text-cream/55">{site.address}</p>
          <a
            href={WHATSAPP_URL}
            className="mt-3 block text-xs text-cream/70 transition-colors hover:text-gold-light"
          >
            WhatsApp: {site.phone}
          </a>
          <a
            href={MAPS_URL}
            className="mt-3 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-gold-light"
          >
            Cómo llegar ↗
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-gold-light/10 px-5 pt-6 text-[10px] uppercase tracking-[0.16em] text-cream/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Iris Pleyade Wellness Valencia</p>
        <p>Centro de bienestar y masajes terapéuticos en Valencia</p>
      </div>
    </footer>
  );
}
