"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { MethodologyStep } from "@/components/ui/MethodologyStep";
import { useLanguage } from "@/contexts/LanguageContext";

export function MethodologySection() {
  const { tr } = useLanguage();
  const { methodology } = tr;

  return (
    <section id="methode" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={methodology.label} heading={methodology.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 reveal-stagger">
          {methodology.steps.map((step, index) => (
            <MethodologyStep
              key={step.number}
              number={step.number}
              name={step.name}
              description={step.description}
              isLast={index === methodology.steps.length - 1 || index === methodology.steps.length - 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
