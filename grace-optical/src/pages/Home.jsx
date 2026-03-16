import PremiumHero from "../components/PremiumHero";
import Collection from "../components/CollectionPreview";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import BrandLogos from "../components/BrandLogos";
import ClinicalSection from "../components/ClinicalSection";
import AppointmentCTA from "../components/AppointmentCTA";
import ScrollReveal from "../components/ScrollReveal";
import TrustStats from "../components/TrustStats";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <PremiumHero />

      {/* TRUST (NEW — VERY IMPORTANT) */}
      <TrustStats />

      {/* CLINICAL */}
      <ScrollReveal>
        <ClinicalSection />
      </ScrollReveal>

      {/* WHY CHOOSE */}
      <ScrollReveal>
        <WhyChoose />
      </ScrollReveal>

      {/* COLLECTION */}
      <ScrollReveal>
        <Collection />
      </ScrollReveal>

      {/* BRANDS */}
      <ScrollReveal>
        <BrandLogos />
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <AppointmentCTA />
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

    </div>
  );
}