"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { expertiseDomains } from "@/lib/data/expertise";
import { useLanguage } from "@/contexts/LanguageContext";

export function ExpertiseSection() {
  const { tr } = useLanguage();

  return (
    <section id="expertise" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={tr.expertise.label} heading={tr.expertise.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {expertiseDomains.map((domain) => {
            const translated = tr.expertise.domains.find((d) => d.id === domain.id);
            return (
              <ExpertiseCard
                key={domain.id}
                iconName={domain.iconName}
                title={translated?.title ?? domain.title}
                description={translated?.description ?? domain.description}
                problemsSolved={translated?.problemsSolved ?? domain.problemsSolved}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
