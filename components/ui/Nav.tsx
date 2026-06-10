"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

interface NavLink {
  label: string;
  href: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export interface NavProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  brandName?: string;
}

export function Nav({
  links = defaultLinks,
  ctaLabel = "Contact",
  ctaHref = "#contact",
  brandName = "R.M.",
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={[
          "fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-[350ms]",
          scrolled
            ? "bg-void/95 backdrop-blur-md border-b border-line"
            : "bg-transparent",
        ]
          .filter(Boolean)
          .join(" ")}
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
            {links.map((link) => (
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

          <div className="flex items-center gap-4">
            <a href={ctaHref} className="hidden md:block">
              <Button variant="primary" size="sm">
                {ctaLabel} →
              </Button>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 text-fg-muted hover:text-fg transition-colors duration-[200ms]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-[200ms] ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
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
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <ul className="flex flex-col gap-2 list-none m-0 p-0 flex-1">
          {links.map((link) => (
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

        <a href={ctaHref} onClick={() => setMenuOpen(false)}>
          <Button variant="primary" size="lg" className="w-full">
            {ctaLabel} →
          </Button>
        </a>
      </div>
    </>
  );
}
