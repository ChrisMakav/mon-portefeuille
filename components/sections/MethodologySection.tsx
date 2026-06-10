import { SectionHeader } from "@/components/ui/SectionHeader";
import { MethodologyStep } from "@/components/ui/MethodologyStep";

const steps = [
  {
    number: "01",
    name: "Diagnostic",
    description:
      "Analyse de votre situation actuelle, de vos processus et de vos outils. Identification des points de friction et des opportunités d'amélioration.",
  },
  {
    number: "02",
    name: "Analyse",
    description:
      "Étude approfondie des solutions possibles, benchmark des alternatives, évaluation de la faisabilité technique et financière.",
  },
  {
    number: "03",
    name: "Conception",
    description:
      "Co-construction de la solution avec vos équipes : architecture, maquettes, planification des développements et définition des livrables.",
  },
  {
    number: "04",
    name: "Déploiement",
    description:
      "Mise en œuvre itérative, tests, corrections et déploiement en production. Pilotage du changement et communication interne.",
  },
  {
    number: "05",
    name: "Formation",
    description:
      "Transfert de compétences aux équipes : ateliers pratiques, guides utilisateurs et accompagnement à la prise en main des outils.",
  },
  {
    number: "06",
    name: "Suivi",
    description:
      "Monitoring des résultats, ajustements continus et amélioration progressive de la solution sur la base des retours terrain.",
  },
];

export function MethodologySection() {
  return (
    <section id="methode" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label="Process" heading="Ma Méthode" />

        {/* Desktop: 2-column grid of steps; Mobile: single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 reveal-stagger">
          {steps.map((step, index) => (
            <MethodologyStep
              key={step.number}
              number={step.number}
              name={step.name}
              description={step.description}
              isLast={index === steps.length - 1 || index === steps.length - 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
