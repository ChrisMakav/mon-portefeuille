import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const values = [
  {
    term: "Mission",
    definition:
      "Apporter aux organisations une expertise rare : celle d'un ingénieur qui a piloté des projets complexes dans l'industrie lourde, et qui maîtrise aujourd'hui les outils digitaux les plus avancés — pour des résultats concrets, pas des recommandations théoriques.",
  },
  {
    term: "Vision",
    definition:
      "Un monde où PME, associations et collectivités bénéficient des mêmes méthodes de pilotage et des mêmes leviers technologiques que les grands groupes industriels — sans la même lourdeur ni les mêmes budgets.",
  },
  {
    term: "Valeurs",
    definition:
      "Rigueur d'ingénieur, transparence totale, engagement sur les résultats. Je m'appuie sur 15 ans de terrain pour proposer des solutions qui fonctionnent vraiment — en production, pas seulement en démonstration.",
  },
];

const facts = [
  { label: "Formation", value: "Ingénieur UTBM · DUT ENSP · IBC London" },
  { label: "Localisation", value: "France · Remote-first" },
  { label: "Statut", value: "Consultant indépendant" },
  { label: "Disponibilité", value: "Ouvert aux nouvelles missions" },
];

const employers = [
  "GE Energy",
  "Total E&P",
  "Wabtec",
  "Zodiac Aerospace",
  "Schlumberger",
  "Flowserve",
  "Liebherr",
  "Environnement S.A",
];

export function AboutSection() {
  return (
    <section id="about" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Portrait / Identity */}
          <div className="flex flex-col gap-6 reveal">
            {/* Portrait box */}
            <div className="relative aspect-[4/3] rounded-2xl bg-surface border border-line-strong overflow-hidden">
              <Image
                src="/images/portrait1.jpg"
                alt="Rachide Mabila — Ingénieur Chef de Projet & Expert Digital"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Identity facts */}
            <dl className="flex flex-col gap-3 bg-surface border border-line rounded-xl p-5">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start justify-between gap-4">
                  <dt className="font-mono text-label uppercase tracking-widest text-fg-subtle shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-sm text-fg-muted text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Past employers */}
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-fg-subtle mb-3">
                Expérience acquise chez
              </p>
              <div className="flex flex-wrap gap-2">
                {employers.map((name) => (
                  <Badge key={name} variant="default">
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Bio content */}
          <div className="flex flex-col gap-8 reveal">
            <SectionHeader label="À Propos" heading="Qui Suis-Je ?" align="left" className="mb-0" />

            <p className="font-sans text-base text-fg-muted leading-relaxed">
              Ingénieur de formation (UTBM, IBC Academy of London), j&apos;ai bâti{" "}
              <span className="text-fg font-medium">15 ans d&apos;expérience</span> au
              sein de grands groupes industriels internationaux — GE Energy, Total E&P,
              Wabtec, Zodiac Aerospace, Schlumberger — comme chef de projet,
              responsable programme et ingénieur système sur des projets complexes dans
              les secteurs ferroviaire, aéronautique, pétrole &amp; gaz et énergie.
            </p>

            <p className="font-sans text-base text-fg-muted leading-relaxed">
              Ces années sur des projets EPCC multi-millions, des plateformes offshore
              en Corée, des programmes aéronautiques pour Airbus et Boeing, ou des
              systèmes ferroviaires pour Eurotunnel m&apos;ont forgé une rigueur, une
              gestion du risque et une culture du résultat que je mets aujourd&apos;hui
              au service de{" "}
              <span className="text-fg font-medium">MAKAV Service Digital</span>.
            </p>

            <p className="font-sans text-base text-fg-muted leading-relaxed">
              Cette double expertise — ingénierie industrielle de haut niveau et
              maîtrise des technologies digitales (IA, automatisation, développement
              web, cloud) — est ce qui me différencie : je ne suis pas un consultant
              qui conseille, je suis un praticien qui conçoit, construit et livre.
            </p>

            {/* Mission / Vision / Valeurs */}
            <dl className="flex flex-col gap-5">
              {values.map((item) => (
                <div
                  key={item.term}
                  className="border-l-2 border-accent pl-4 flex flex-col gap-1"
                >
                  <dt className="font-display text-xl font-bold uppercase tracking-tight text-accent">
                    {item.term}
                  </dt>
                  <dd className="font-sans text-sm text-fg-muted leading-relaxed">
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact">
                <Button variant="primary">Me contacter →</Button>
              </a>
              <a href="/CV_Rachide_Mabila.docx" download="CV_Rachide_Mabila.docx">
                <Button variant="secondary">Télécharger mon CV</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
