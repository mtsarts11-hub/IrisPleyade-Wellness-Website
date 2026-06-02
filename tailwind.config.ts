import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F8F2E9",
        "ink-soft": "#EFE5D7",
        gold: "#B48743",
        "gold-light": "#9D7134",
        cream: "#4A3C30",
        bronze: "#D8BF98",
        "text-light": "#6D5D4D",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
      boxShadow: {
        "gold-soft": "0 18px 55px rgba(139, 103, 54, 0.12)",
        "gold-button": "0 12px 28px rgba(153, 111, 50, 0.18)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #CDA967 0%, #B48743 48%, #94652D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
