import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/iris-pleyade-mark.svg"
        alt=""
        aria-hidden="true"
        width={52}
        height={52}
        className={
          compact
            ? "h-11 w-11 shrink-0 sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
            : "h-14 w-14 shrink-0"
        }
        priority
      />
      <span className="font-serif text-xl leading-none tracking-[0.16em] text-cream sm:text-[1.6rem] sm:tracking-[0.18em]">
        IRIS PLEYADE
      </span>
      <span className="sr-only">Iris Pleyade Wellness Valencia</span>
    </span>
  );
}
