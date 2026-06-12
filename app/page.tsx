import { Nav } from "@/components/ui/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Nav brandName="R.M." />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ServicesSection />
        <PortfolioSection />
        <MethodologySection />
        <ResultsSection />
        <TestimonialsSection />
        <WhyMeSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
