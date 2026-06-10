import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { expertiseDomains } from "@/lib/data/expertise";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label="Domaines" heading="Mon Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {expertiseDomains.map((domain) => (
            <ExpertiseCard
              key={domain.id}
              iconName={domain.iconName}
              title={domain.title}
              description={domain.description}
              problemsSolved={domain.problemsSolved}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
