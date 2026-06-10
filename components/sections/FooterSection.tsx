import { Globe, Link, Mail } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À Propos", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "Méthode", href: "#methode" },
  { label: "Résultats", href: "#resultats" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  // TODO: Replace hrefs with your real social URLs
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeannico-chris-mabila-4b687985", icon: Globe },
  { label: "GitHub", href: "https://github.com", icon: Link },
  { label: "Email", href: "#contact", icon: Mail },
];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-line py-16">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-display text-3xl font-black uppercase text-fg leading-none tracking-tight">
                Rachide Mabila
              </p>
              <p className="font-mono text-label uppercase tracking-widest text-accent mt-1">
                MAKAV Service Digital
              </p>
            </div>
            <p className="font-sans text-sm text-fg-muted leading-relaxed max-w-xs">
              Consultant &amp; Expert Digital — Transformation, IA, Automatisation, Web.
              Basé en France, disponible à distance.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-raised border border-line text-fg-muted hover:text-accent hover:border-accent transition-all duration-[200ms]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-label uppercase tracking-widest text-fg-subtle mb-4">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-fg-muted hover:text-accent transition-colors duration-[200ms]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-label uppercase tracking-widest text-fg-subtle mb-0">
              Coordonnées
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact.makav@gmail.com"
                className="font-sans text-sm text-fg-muted hover:text-accent transition-colors duration-[200ms]"
              >
                contact.makav@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jeannico-chris-mabila-4b687985"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-fg-muted hover:text-accent transition-colors duration-[200ms]"
              >
                linkedin.com/in/jeannico-chris-mabila-4b687985
              </a>
              <p className="font-sans text-sm text-fg-muted">France · Remote-first</p>
            </div>

            <div className="mt-auto">
              <span className="inline-flex items-center gap-1.5 font-mono text-label uppercase tracking-widest px-3 py-1.5 rounded-full bg-accent-tint border border-accent/20 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Disponible pour missions
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-label text-fg-subtle">
            © {year} Rachide Mabila · MAKAV Service Digital
          </p>
          <p className="font-mono text-label text-fg-subtle">
            Conçu &amp; développé avec soin
          </p>
        </div>
      </div>
    </footer>
  );
}
