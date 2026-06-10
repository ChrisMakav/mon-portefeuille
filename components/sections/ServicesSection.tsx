import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";
import { iconMap } from "@/lib/icons";

export function ServicesSection() {
  return (
    <section id="services" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label="Offres" heading="Mes Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <ServiceCard
                key={service.id}
                icon={Icon ? <Icon className="w-6 h-6" /> : null}
                title={service.title}
                description={service.description}
                ctaLabel="En savoir plus →"
                ctaHref="#contact"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
