# Navigation

The top navigation bar. Fixed to the top of the viewport, spans full width, contains the logo/name, nav links, and a primary CTA button.

## Structure

```
┌────────────────────────────────────────────────────────────────┐
│  RACHIDE M.          Home  About  Projects  Blog   [Contact →] │
└────────────────────────────────────────────────────────────────┘
```

- **Left**: Brand mark — the portfolio owner's name in `font-display uppercase` at `text-lg`
- **Center** (desktop): Navigation links in `font-sans text-sm text-fg-muted`
- **Right**: Primary CTA `<Button variant="primary" size="sm">Contact</Button>` + hamburger on mobile

## Behavior

| State | Treatment |
|-------|-----------|
| Top of page | `bg-transparent` or `bg-void/80 backdrop-blur-sm` |
| Scrolled past 60px | `bg-void/95 backdrop-blur-md border-b border-line` |
| Active link | `text-fg` (vs muted for inactive) with a 2px bottom accent underline |
| Mobile menu open | Full-screen overlay `bg-void` with stacked links |

The scroll-triggered backdrop is applied via a `useEffect` + `window.scroll` listener. Because this requires `useState` and `useEffect`, Nav is a Client Component (`'use client'`).

## Layout

```tsx
<nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center px-container">
  <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
    <BrandMark />
    <DesktopLinks />
    <div className="flex items-center gap-4">
      <Button variant="primary" size="sm">Contact</Button>
      <HamburgerButton />  {/* mobile only */}
    </div>
  </div>
</nav>
```

## Link items

```ts
const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
]
```

## Mobile menu

At `< md` (768px), desktop links are hidden. A hamburger icon (3 lines → X) toggles a full-screen mobile menu:

```
┌─────────────────────────┐
│  RACHIDE M.         ✕   │
│                         │
│  Home                   │
│  About                  │
│  Projects               │
│  Services               │
│                         │
│  [Contact Me]           │
└─────────────────────────┘
```

Mobile menu links: `font-display text-6xl uppercase` — oversized for dramatic effect and easy tap targets.

## Props

```ts
interface NavProps {
  links?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}
```

## Accessibility

- `<nav>` element with `aria-label="Main navigation"`
- Active link has `aria-current="page"`
- Hamburger button has `aria-expanded` and `aria-controls` pointing to the mobile menu panel
- Mobile menu has `role="dialog"` and traps focus while open
- `Escape` key closes the mobile menu
