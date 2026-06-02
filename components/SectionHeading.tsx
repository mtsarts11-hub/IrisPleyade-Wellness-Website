type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span
          aria-hidden="true"
          className={`mb-3 block text-[10px] text-gold-light/70 ${
            centered ? "text-center" : "text-left"
          }`}
        >
          ✦
        </span>
      ) : null}
      {eyebrow ? (
        <p className={`section-eyebrow ${centered ? "" : "justify-start"}`}>
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
          <span className="h-px w-8 bg-gold/70" />
        </p>
      ) : null}
      <h2 className="mt-4 font-serif text-4xl leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-sm leading-7 text-cream/65 sm:text-base">{text}</p>
      ) : null}
    </div>
  );
}
