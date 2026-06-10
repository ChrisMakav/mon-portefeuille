import { SectionHeader } from "@/components/ui/SectionHeader";
import { iconMap } from "@/lib/icons";

const differentiators = [
  {
    iconName: "award",
    title: "Racines industrielles, outils d'aujourd'hui",
    description:
      "15 ans de terrain dans l'industrie lourde (GE Energy, Total E&P, Wabtec, Zodiac Aerospace) — j'apporte une rigueur de chef de projet industriel là où d'autres apportent des slides. Vos projets sont pilotés avec les méthodes qui fonctionnent sur des centrales électriques et des plateformes offshore.",
  },
  {
    iconName: "target",
    title: "Vision orientée résultats",
    description:
      "Issu d'environnements où les dépassements de budget et les retards ont des conséquences contractuelles réelles, je m'engage sur des livrables et des KPIs définis en amont — pas sur des heures. Votre succès mesurable est mon seul critère de réussite.",
  },
  {
    iconName: "sparkles",
    title: "Double expertise : Ingénierie & Digital",
    description:
      "Ingénieur système, développeur full-stack et expert IA — une combinaison rare. Je peux piloter votre transformation de bout en bout : du diagnostic stratégique au déploiement technique, sans intermédiaire.",
  },
  {
    iconName: "users",
    title: "Accompagnement personnalisé",
    description:
      "Pas de méthode standard appliquée à l'aveugle. J'ai travaillé dans des secteurs ultra-normés (aéronautique, ferroviaire, pétrole & gaz) — je sais adapter la rigueur à votre contexte réel, que vous soyez une PME de 10 personnes ou une organisation de 500.",
  },
  {
    iconName: "shield",
    title: "Fiabilité et transparence totale",
    description:
      "Formé à la gestion des risques industriels, j'applique la même rigueur à mes missions de conseil : engagement contractuel, communication proactive, respect des délais. Si un problème survient, vous êtes le premier informé — avec un plan d'action.",
  },
];

export function WhyMeSection() {
  return (
    <section id="pourquoi" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading */}
          <div className="flex flex-col gap-6 reveal">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">
                Différenciateurs
              </p>
              <h2
                className="font-display font-black uppercase text-fg leading-none"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                }}
              >
                Pourquoi
                <br />
                <span className="text-accent">Moi ?</span>
              </h2>
            </div>
            <p className="font-sans text-base text-fg-muted leading-relaxed max-w-sm">
              De nombreux consultants proposent des slides. Moi, je livre des
              solutions qui fonctionnent, formées par des équipes qui les
              utilisent.
            </p>
          </div>

          {/* Right — Differentiator list */}
          <div className="flex flex-col divide-y divide-line reveal">
            {differentiators.map((item) => {
              const Icon = iconMap[item.iconName];
              return (
                <div
                  key={item.title}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0 group"
                >
                  {Icon && (
                    <div className="text-accent shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-fg leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-fg-muted leading-relaxed">
                      {item.description}
                    </p>
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
