"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { iconMap } from "@/lib/icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyMeSection() {
  const { tr } = useLanguage();
  const { whyme } = tr;

  return (
    <section id="pourquoi" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 reveal">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">{whyme.label}</p>
              <h2
                className="font-display font-black uppercase text-fg leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em", lineHeight: 0.9 }}
              >
                {whyme.heading}
                <br />
                <span className="text-accent">{whyme.headingAccent}</span>
              </h2>
            </div>
            <p className="font-sans text-base text-fg-muted leading-relaxed max-w-sm">{whyme.intro}</p>
          </div>

          <div className="flex flex-col divide-y divide-line reveal">
            {whyme.items.map((item) => {
              const Icon = iconMap[item.iconName];
              return (
                <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0 group">
                  {Icon && (
                    <div className="text-accent shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-fg leading-tight">{item.title}</h3>
                    <p className="font-sans text-sm text-fg-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
