"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialsSection() {
  const { tr } = useLanguage();
  const [featured, ...rest] = testimonials;

  return (
    <section id="temoignages" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={tr.testimonials.label} heading={tr.testimonials.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          <div className="md:col-span-2 lg:col-span-1">
            <TestimonialCard
              quote={featured.quote}
              author={featured.author}
              role={`${featured.role} — ${featured.company}`}
              avatarSrc={featured.avatarSrc}
            />
          </div>
          {rest.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              author={t.author}
              role={`${t.role} — ${t.company}`}
              avatarSrc={t.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
