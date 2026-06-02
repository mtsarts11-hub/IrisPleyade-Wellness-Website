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
        width={compact ? 44 : 52}
        height={compact ? 44 : 52}
        className="shrink-0"
        priority
      />
      <span className="font-serif text-xl leading-none tracking-[0.16em] text-cream sm:text-2xl">
        IRIS PLEYADE
      </span>
    </span>
  );
}
