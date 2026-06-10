# Component Library

All components live in `components/ui/`. They are plain React components — no third-party component library dependency. They consume only design tokens (via Tailwind v4 utility classes) and native HTML.

## Inventory

| Component | File | Type | Description |
|-----------|------|------|-------------|
| `Button` | `Button.tsx` | Client | Primary interactive control |
| `Badge` | `Badge.tsx` | Server | Pill/tag label for categories and status |
| `Card` | `Card.tsx` | Server | Base container surface |
| `Heading` | `Heading.tsx` | Server | Display and semantic headings |
| `Label` | `Label.tsx` | Server | Mono all-caps label above headings |
| `ServiceCard` | `ServiceCard.tsx` | Server | "What I Do" service offering card |
| `ProjectCard` | `ProjectCard.tsx` | Server | Portfolio project thumbnail card |
| `StatCard` | `StatCard.tsx` | Server | Key number + descriptor (e.g. "6+ Years") |
| `TestimonialCard` | `TestimonialCard.tsx` | Server | Client quote with attribution |
| `Nav` | `Nav.tsx` | Client | Top navigation bar with mobile menu |

## Conventions

**Server Components by default.** Components without event handlers, hooks, or browser APIs are Server Components (no `'use client'` directive). Only `Button` and `Nav` require `'use client'`.

**No style props.** Components accept className for extension but do not accept inline `style` props or one-off color/size props. If a variant doesn't exist, add it to the component's variant map.

**Semantic HTML.** Every component renders the correct HTML element: `<button>` for buttons, `<nav>` for navigation, `<article>` for cards, `<section>` for page sections.

**Accessible by default.** Interactive components handle `:focus-visible`, `aria-*` attributes, and keyboard navigation out of the box.

## Extending components

To add a new variant, add it to the component's `variants` object. Do not pass raw Tailwind classes as props to produce one-off visual treatments — that defeats the design system.

```tsx
// ✅ Correct — extend the variant map
const variants = {
  primary: '...',
  secondary: '...',
  destructive: 'bg-danger text-fg ...',  // ← new variant
}

// ❌ Wrong — ad-hoc styling via className
<Button className="bg-red-500 text-white">Delete</Button>
```
