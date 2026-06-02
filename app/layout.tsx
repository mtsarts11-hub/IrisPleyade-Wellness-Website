import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irispleyade.com"),
  title: "Iris Pleyade Wellness Valencia | Masajes, Reiki y Bienestar",
  description:
    "Centro de bienestar en Valencia especializado en masajes terapéuticos, Reiki, quiromasaje, belleza natural y experiencias holísticas premium. Reserva tu cita online.",
  keywords: [
    "masajes Valencia",
    "bienestar Valencia",
    "Reiki Valencia",
    "quiromasaje Valencia",
    "masaje californiano Valencia",
    "centro wellness Valencia",
    "Iris Pleyade",
  ],
  openGraph: {
    title: "Iris Pleyade Wellness Valencia | Masajes, Reiki y Bienestar",
    description:
      "Masajes terapéuticos, Reiki, quiromasaje y experiencias holísticas premium en Valencia. Reserva tu cita online.",
    locale: "es_ES",
    type: "website",
    siteName: "Iris Pleyade Wellness Valencia",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
