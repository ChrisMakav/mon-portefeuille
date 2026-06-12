"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Label } from "@/components/ui/Label";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n/translations";

export function HeroSection() {
  const { tr, lang } = useLanguage();
  const heroStats = tr.stats.slice(0, 3);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-void relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — Text block */}
          <div className="lg:col-span-3 flex flex-col gap-6 reveal-stagger">
            <div>
              <Label variant="accent">MAKAV Service Digital</Label>
              <h1
                className="font-display font-black uppercase text-fg leading-none mt-3"
                style={{ fontSize: "clamp(4rem, 12vw, 10rem)", letterSpacing: "-0.02em", lineHeight: 0.88 }}
              >
                Rachide
                <br />
                Mabila
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-accent leading-tight">
                {tr.hero.role}
              </p>
              <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-xl">
                {tr.hero.bio}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a href="#contact">
                <Button variant="primary" size="lg">{tr.hero.ctaPrimary}</Button>
              </a>
              <a href="#portfolio">
                <Button variant="secondary" size="lg">{tr.hero.ctaSecondary}</Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-line">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-display text-3xl md:text-4xl font-black text-accent leading-none">
                    {stat.value}
                  </span>
                  <span className="font-mono text-label uppercase tracking-widest text-fg-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="lg:col-span-2 flex flex-col items-center gap-4 order-first lg:order-last reveal">
            <div className="relative w-full max-w-sm lg:max-w-full">
              <div className="relative aspect-[4/5] rounded-2xl bg-surface-raised border border-line-strong overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/portrait.jpg"
                  alt="Rachide Mabila — Consultant & Expert Digital"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-2xl" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-2xl" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <Badge variant="accent" dot size="md">{tr.hero.available}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
