"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ResultsSection() {
  const { tr } = useLanguage();
  const { results } = tr;

  return (
    <section id="resultats" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={results.label} heading={results.heading} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16 reveal-stagger">
          {tr.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-line pt-12">
          <div className="reveal">
            <p className="font-sans text-lg text-fg-muted leading-relaxed">{results.statement}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {results.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span className="font-sans text-sm text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-4 reveal">
            <div className="text-center lg:text-center">
              <p className="font-display text-4xl font-black uppercase text-fg mb-2">{results.ctaHeading}</p>
              <p className="font-sans text-sm text-fg-muted mb-6">{results.ctaSub}</p>
              <a href="#contact">
                <Button variant="primary" size="lg">{results.cta}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
