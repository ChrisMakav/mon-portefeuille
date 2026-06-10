# Mon Portefeuille — Design System

**Aesthetic direction**: Dark Editorial  
**Version**: 1.0  
**Stack**: Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript  

---

## Concept

Two references shaped this system. The first is a dark, card-driven portfolio with a strong single accent color and clear grid structure. The second is an editorial light portfolio defined by massive, ultra-condensed display typography and generous white space. The synthesis is a **Dark Editorial** identity:

- A near-black void as the canvas, with layered surface elevations for depth
- Ultra-condensed, bold display type that commands entire screen widths at large sizes
- A single electric accent — **chartreuse lime (#C1FF2F)** — used sparingly for maximum contrast and recall
- Clean geometric body type for everything at reading size
- Minimal but intentional motion

The result feels like a high-end creative studio, not a generic developer CV.

---

## File Structure

```
docs/design/
├── README.md               ← this file — overview and principles
├── tokens.css              ← design tokens (@theme source of truth)
├── style-guide.md          ← color, typography, spacing, motion rules
└── components/
    ├── README.md           ← component inventory and usage principles
    ├── button.md           ← Button spec
    ├── card.md             ← Card variants spec
    ├── badge.md            ← Badge / Tag spec
    ├── navigation.md       ← Navigation spec
    ├── typography.md       ← Heading / Label / Body spec
    └── form.md             ← Input / Textarea / Form spec

components/ui/
├── index.ts                ← barrel exports
├── Button.tsx
├── Card.tsx
├── Badge.tsx
├── Heading.tsx
├── Label.tsx
├── ServiceCard.tsx
├── ProjectCard.tsx
├── StatCard.tsx
├── TestimonialCard.tsx
└── Nav.tsx
```

---

## Design Principles

### 1. Void first
The near-black background (#080A0B) is not a dark mode fallback — it is the primary canvas. All surface elevations (`surface`, `surface-raised`, `overlay`) build upward from it. Never invert to a white-based layout without intentional design work.

### 2. One accent, used sparingly
`--color-accent` (#C1FF2F) appears in one place per screen section — a single button label, an underline, an icon fill. If everything is lime, nothing is lime.

### 3. Type as architecture
Display text (`font-display`, Barlow Condensed) functions like structural beams — massive, weight-bearing, impossible to ignore. Body text (`font-sans`, Outfit) is the infill that lives between them. Never mix them at similar scales.

### 4. Surface, not shadow
Depth is expressed through background color steps (`surface` → `surface-raised` → `overlay`), not by stacking complex `box-shadow` values. Shadows are used only for the glow effect on interactive primary elements.

### 5. Proportion over decoration
Before reaching for an animation or a decorative element, check whether proportion and whitespace can do the same work. Motion is reserved for meaningful state changes and page-load reveals.

---

## Quick Reference

| Token               | Value       | Use for                        |
|---------------------|-------------|--------------------------------|
| `--color-void`      | `#080A0B`   | Page background                |
| `--color-surface`   | `#111416`   | Card / panel backgrounds       |
| `--color-accent`    | `#C1FF2F`   | Primary CTA, highlights        |
| `--color-fg`        | `#F2F4F6`   | Headings, primary text         |
| `--color-fg-muted`  | `#7A8694`   | Body copy, descriptions        |
| `--font-display`    | Barlow Condensed | Hero titles, section headers |
| `--font-sans`       | Outfit      | All body and UI text           |
| `--font-mono`       | Space Mono  | Labels, tags, timestamps       |
