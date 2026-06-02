import type { IconName } from "@/data/site";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (name === "hands") {
    return (
      <svg {...common}>
        <path d="M4 11.5c2.7.5 5 1.7 6.5 3.5 1 1.2 1.4 2.6 1.3 4.2-2.5-.2-4.8-1-6.4-2.7C4 15 3.4 13 3 11.9c-.1-.4.3-.5 1-.4Z" />
        <path d="M20 11.5c-2.7.5-5 1.7-6.5 3.5-1 1.2-1.4 2.6-1.3 4.2 2.5-.2 4.8-1 6.4-2.7C20 15 20.6 13 21 11.9c.1-.4-.3-.5-1-.4Z" />
        <path d="m12 4 .9 2.1L15 7l-2.1.9L12 10l-.9-2.1L9 7l2.1-.9L12 4Z" />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M20 15.6A8 8 0 0 1 8.4 4 8 8 0 1 0 20 15.6Z" />
        <path d="m17 4 .5 1.5L19 6l-1.5.5L17 8l-.5-1.5L15 6l1.5-.5L17 4Z" />
      </svg>
    );
  }

  if (name === "sparkles" || name === "star") {
    return (
      <svg {...common}>
        <path d="m12 2 1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Z" />
        <path d="m19 16 .7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16Z" />
        <path d="m5 15 .6 1.4L7 17l-1.4.6L5 19l-.6-1.4L3 17l1.4-.6L5 15Z" />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M20 4C12.5 4 6.5 7.5 5 13c-.6 2.1.1 4.1 1.6 5.4C12.7 19.2 18 14.4 20 4Z" />
        <path d="M4 20c3-4 6.4-6.8 11-9" />
      </svg>
    );
  }

  if (name === "family") {
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="2.4" />
        <circle cx="16.5" cy="9" r="2" />
        <path d="M3.5 19c.4-3 2-4.8 4.5-4.8s4.2 1.8 4.5 4.8" />
        <path d="M13 18.5c.4-2.3 1.6-3.7 3.5-3.7 2 0 3.3 1.5 3.6 4.2" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...common}>
        <path d="M20.8 8.1c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.3 4.3 0 0 1 12 6.7a4.3 4.3 0 0 1 8.8 1.4Z" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
        <path d="M8 2.5v4M16 2.5v4M3.5 9.5h17M8 14h3M13 14h3M8 17h3" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2a9.84 9.84 0 0 0-8.47 14.84L2 22l5.3-1.51A9.9 9.9 0 1 0 12.04 2Zm0 17.93a8 8 0 0 1-4.08-1.12l-.29-.17-3.14.9.92-3.05-.19-.31a7.99 7.99 0 1 1 6.78 3.75Zm4.39-5.99c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M20.5 11.5a8.3 8.3 0 0 1-12.2 7.3L4 20l1.3-4A8.3 8.3 0 1 1 20.5 11.5Z" />
      <path d="M8.5 9.5c.8 2.2 2.2 3.6 4.5 4.5" />
      <path d="M8.2 8.1h1.3l.6 1.8-.8.8M14.8 12.9l.8-.8 1.8.6V14" />
    </svg>
  );
}
