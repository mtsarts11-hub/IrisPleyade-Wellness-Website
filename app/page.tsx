import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CosmicMotion } from "@/components/CosmicMotion";
import { Experiences } from "@/components/Experiences";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TrustBar } from "@/components/TrustBar";
import { MAPS_URL, site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: site.fullName,
  description:
    "Centro de bienestar en Valencia especializado en masajes terapéuticos, Reiki, quiromasaje, belleza natural y terapias holísticas.",
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ de Bailèn, 4",
    addressLocality: "València",
    addressRegion: "Valencia",
    postalCode: "46007",
    addressCountry: "ES",
  },
  areaServed: "Valencia",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: site.reviewCount,
  },
  hasMap: MAPS_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <CosmicMotion />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Experiences />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
