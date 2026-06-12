"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";
import { iconMap } from "@/lib/icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { tr } = useLanguage();

  return (
    <section id="services" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={tr.services.label} heading={tr.services.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            const translated = tr.services.items.find((i) => i.id === service.id);
            return (
              <ServiceCard
                key={service.id}
                icon={Icon ? <Icon className="w-6 h-6" /> : null}
                title={translated?.title ?? service.title}
                description={translated?.description ?? service.description}
                ctaLabel={tr.services.cta}
                ctaHref="#contact"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
