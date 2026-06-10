import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data/stats";

export function ResultsSection() {
  return (
    <section id="resultats" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label="Impact" heading="Résultats Concrets" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16 reveal-stagger">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Qualitative statement + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-line pt-12">
          <div className="reveal">
            <p className="font-sans text-lg text-fg-muted leading-relaxed">
              Chaque mission est orientée résultats mesurables — gains de temps,
              réduction des coûts, amélioration de la productivité et croissance.
              Je m&apos;engage sur des indicateurs concrets définis en amont,
              pas sur des livrables abstraits.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Gains de temps moyens : 30 à 60% sur les tâches automatisées",
                "ROI moyen d'une mission d'automatisation : atteint en moins de 3 mois",
                "Taux d'adoption des nouvelles solutions après formation : 85%+",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span className="font-sans text-sm text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-center gap-4 reveal">
            <div className="text-center lg:text-center">
              <p className="font-display text-4xl font-black uppercase text-fg mb-2">
                Prêt à obtenir ces résultats ?
              </p>
              <p className="font-sans text-sm text-fg-muted mb-6">
                Réservez un appel de découverte — gratuit, sans engagement, 30 minutes.
              </p>
              <a href="#contact">
                <Button variant="primary" size="lg">
                  Réserver un appel →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
