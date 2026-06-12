"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";

const employers = ["GE Energy", "Total E&P", "Wabtec", "Zodiac Aerospace", "Schlumberger", "Flowserve", "Liebherr", "Environnement S.A"];

export function AboutSection() {
  const { tr } = useLanguage();
  const { about } = tr;

  return (
    <section id="about" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6 reveal">
            <div className="relative aspect-[4/3] rounded-2xl bg-surface border border-line-strong overflow-hidden">
              <Image
                src="/images/bureau2.png"
                alt="Rachide Mabila — Ingénieur Chef de Projet & Expert Digital"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <dl className="flex flex-col gap-3 bg-surface border border-line rounded-xl p-5">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex items-start justify-between gap-4">
                  <dt className="font-mono text-label uppercase tracking-widest text-fg-subtle shrink-0">{fact.label}</dt>
                  <dd className="font-sans text-sm text-fg-muted text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-fg-subtle mb-3">{about.experienceLabel}</p>
              <div className="flex flex-wrap gap-2">
                {employers.map((name) => <Badge key={name} variant="default">{name}</Badge>)}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 reveal">
            <SectionHeader label={about.label} heading={about.heading} align="left" className="mb-0" />
            <p className="font-sans text-base text-fg-muted leading-relaxed">{about.bio1}</p>
            <p className="font-sans text-base text-fg-muted leading-relaxed">
              {about.bio2.replace("MAKAV Service Digital", "%%")}
              {about.bio2.includes("MAKAV Service Digital") ? (
                <>
                  {about.bio2.split("MAKAV Service Digital")[0]}
                  <span className="text-fg font-medium">MAKAV Service Digital</span>
                  {about.bio2.split("MAKAV Service Digital")[1]}
                </>
              ) : about.bio2}
            </p>
            <p className="font-sans text-base text-fg-muted leading-relaxed">{about.bio3}</p>
            <dl className="flex flex-col gap-5">
              {about.values.map((item) => (
                <div key={item.term} className="border-l-2 border-accent pl-4 flex flex-col gap-1">
                  <dt className="font-display text-xl font-bold uppercase tracking-tight text-accent">{item.term}</dt>
                  <dd className="font-sans text-sm text-fg-muted leading-relaxed">{item.definition}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact"><Button variant="primary">{about.ctaContact}</Button></a>
              <a href="/CV_Rachide_Mabila.docx" download="CV_Rachide_Mabila.docx">
                <Button variant="secondary">{about.ctaCV}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
