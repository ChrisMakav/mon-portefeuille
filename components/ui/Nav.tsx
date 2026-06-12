"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Nav({ brandName = "R.M." }: { brandName?: string }) {
  const { lang, toggle, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={[
          "fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-[350ms]",
          scrolled ? "bg-void/95 backdrop-blur-md border-b border-line" : "bg-transparent",
        ].join(" ")}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-container">
          <a
            href="#home"
            className="font-display text-xl font-black uppercase tracking-tight text-fg hover:text-accent transition-colors duration-[200ms]"
          >
            {brandName}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {tr.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-fg-muted hover:text-fg transition-colors duration-[200ms]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
              className="hidden md:flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-md border border-line text-fg-muted hover:border-accent hover:text-accent transition-all duration-[200ms] cursor-pointer bg-transparent"
            >
              <span className={lang === "fr" ? "text-accent font-bold" : "opacity-40"}>FR</span>
              <span className="text-fg-subtle opacity-40">/</span>
              <span className={lang === "en" ? "text-accent font-bold" : "opacity-40"}>EN</span>
            </button>

            <a href={tr.nav.links[tr.nav.links.length - 1] ? "#contact" : "#contact"} className="hidden md:block">
              <Button variant="primary" size="sm">
                {tr.nav.cta} →
              </Button>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 text-fg-muted hover:text-fg transition-colors duration-[200ms]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? tr.nav.closeMenu : tr.nav.openMenu}
            >
              <span className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 z-40 bg-void flex flex-col px-container pt-24 pb-12 md:hidden transition-all duration-[350ms]",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-2 list-none m-0 p-0 flex-1">
          {tr.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-6xl font-black uppercase text-fg hover:text-accent transition-colors duration-[200ms] block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          {/* Language toggle mobile */}
          <button
            onClick={toggle}
            className="flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-widest px-4 py-3 rounded-lg border border-line text-fg-muted hover:border-accent hover:text-accent transition-all duration-[200ms] bg-transparent w-full cursor-pointer"
          >
            <span className={lang === "fr" ? "text-accent font-bold" : "opacity-40"}>Français</span>
            <span className="text-fg-subtle opacity-40">/</span>
            <span className={lang === "en" ? "text-accent font-bold" : "opacity-40"}>English</span>
          </button>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" size="lg" className="w-full">
              {tr.nav.cta} →
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
