import { Icon } from "@/components/Icons";
import { WHATSAPP_URL } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      aria-label="Escribir a Iris Pleyade por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-white shadow-[0_12px_38px_rgba(37,211,102,.34)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:ring-2 focus-visible:ring-white sm:bottom-7 sm:right-7"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
