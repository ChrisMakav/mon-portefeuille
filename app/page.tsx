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

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À Propos", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "Méthode", href: "#methode" },
  { label: "Résultats", href: "#resultats" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <>
      <Nav
        links={navLinks}
        ctaLabel="Me Contacter"
        ctaHref="#contact"
        brandName="R.M."
      />
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
