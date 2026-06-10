# Style Guide

This guide explains **how** to apply the design tokens, not just what they are. Read the rules before reaching for a token.

---

## Color

### Palette

| Swatch | Token | Hex | Role |
|--------|-------|-----|------|
| ⬛ | `--color-void` | `#080A0B` | Page root |
| 🟫 | `--color-surface` | `#111416` | Card, panel |
| 🟫 | `--color-surface-raised` | `#181C1F` | Elevated card, dropdown |
| 🟫 | `--color-overlay` | `#1F2428` | Modal tray, tooltip |
| 🟩 | `--color-accent` | `#C1FF2F` | Primary CTA, active state, highlight |
| 🟩 | `--color-accent-hover` | `#D4FF5C` | Hover on accent elements |
| 🟩 | `--color-accent-active` | `#A8E81A` | Active/pressed on accent |
| ⬜ | `--color-fg` | `#F2F4F6` | Headings, key UI labels |
| 🩶 | `--color-fg-muted` | `#7A8694` | Body copy, secondary labels |
| 🩶 | `--color-fg-subtle` | `#414D5A` | Placeholders, disabled |
| ⬛ | `--color-fg-inverse` | `#080A0B` | Text on accent-filled backgrounds |
| 🟩 | `--color-success` | `#34D399` | Success states |
| 🟡 | `--color-warning` | `#FBBF24` | Warning states |
| 🔴 | `--color-danger` | `#F87171` | Error states |
| 🔵 | `--color-info` | `#60A5FA` | Informational |

### Usage rules

**Accent is one-per-section.** On any given visual section, the accent color appears at most once as a dominant element. For example: a section may have its CTA button in accent, or an underline decoration in accent — not both. When overused, the accent loses its ability to direct attention.

**Text hierarchy is strict.** Use `--color-fg` for headings and critical UI labels. Use `--color-fg-muted` for body copy and secondary information. Use `--color-fg-subtle` only for genuinely subordinate information (timestamps, disabled labels). Never use `--color-fg-subtle` as body copy.

**No pure black or white.** Use `--color-void` (not `#000000`) and `--color-fg` (not `#ffffff`). The slight warmth prevents harsh contrast and makes the palette feel designed, not default.

**Tints over solid fills.** When placing an icon or label against the accent to signal category (not as a CTA), use `bg-accent-tint` + `text-accent` rather than a solid `bg-accent`. This prevents over-saturation.

---

## Typography

### Typefaces

| Role | Font | Weights Available |
|------|------|-------------------|
| Display | **Barlow Condensed** | 400, 600, 700, 800 |
| Body / UI | **Outfit** | 300, 400, 500, 600 |
| Labels / Mono | **Space Mono** | 400, 700 |

Loaded via `next/font/google`. CSS variables: `--font-display`, `--font-sans`, `--font-mono`.

### Type scale

| Step | Size | Font | Weight | Tracking | Leading | Use |
|------|------|------|--------|----------|---------|-----|
| `display` | `clamp(5rem, 14vw, 11rem)` | Display | 800 | -0.02em | 0.88 | Hero name, giant section break |
| `text-7xl` | 4.5rem (72px) | Display | 800 | -0.02em | 0.9 | Section headers (PORTFOLIO, CONTACT) |
| `text-6xl` | 3.75rem (60px) | Display | 700 | -0.015em | 0.92 | Subsection titles |
| `text-4xl` | 2.25rem (36px) | Display | 700 | -0.01em | 1.0 | Card headings |
| `text-2xl` | 1.5rem (24px) | Sans | 600 | 0 | 1.25 | Sub-headings |
| `text-xl` | 1.25rem (20px) | Sans | 500 | 0 | 1.4 | Large body |
| `text-base` | 1rem (16px) | Sans | 400 | 0 | 1.6 | Default body |
| `text-sm` | 0.875rem (14px) | Sans | 400 | 0 | 1.5 | Small body, form labels |
| `text-label` | 0.6875rem (11px) | Mono | 400 | 0.12em | 1.4 | All-caps tags, category labels |
| `text-caption` | 0.75rem (12px) | Mono | 400 | 0.06em | 1.4 | Timestamps, metadata |

### Typography rules

**Display text is always uppercase.** Barlow Condensed at display sizes reads best in uppercase. Apply `uppercase tracking-wide` when using `font-display` at `text-4xl` and above.

**Body text is never display font.** Barlow Condensed below `text-2xl` looks cramped and amateurish. Use `font-sans` for everything at reading size.

**Label text is always mono.** The Space Mono labels for categories, tags, and timestamps give the UI a technical precision that contrasts pleasantly with the bold display type. Apply `uppercase tracking-widest` to all label text.

**Pair scales intentionally.** When a display heading sits next to body text, leave at least 3 type scale steps between them. A `text-7xl` section title pairs with `text-base` or `text-lg` body — never with `text-2xl` body.

---

## Spacing

### Scale

The standard Tailwind spacing scale (4px base unit) is used for component internals.

| Token | Value | Use |
|-------|-------|-----|
| `--spacing-section` | `clamp(4rem, 10vw, 8rem)` | Vertical padding for page sections |
| `--spacing-container` | `clamp(1.5rem, 5vw, 4rem)` | Horizontal container inset |

### Spacing rules

**Sections breathe.** Between major page sections, use `py-section` (the fluid spacing token). This prevents the page from feeling cluttered even on large screens.

**Card internals are 24–32px.** Padding inside cards should be `p-6` (24px) or `p-8` (32px). Never below `p-4` (16px) — even compact cards need room.

**Related elements cluster tightly.** An icon and its label: `gap-2` (8px). A heading and its subtext: `gap-3` (12px). A card group: `gap-6` (24px). Unrelated groups: `gap-12` (48px) or more.

---

## Grid & Layout

### Container

Max width: `max-w-7xl` (1280px) centered with `mx-auto px-container`.

### Columns

| Breakpoint | Grid |
|------------|------|
| Mobile (`< 768px`) | 1 column |
| Tablet (`768px–1024px`) | 2 columns |
| Desktop (`> 1024px`) | 3 columns |

Use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` for card grids.

### Asymmetry

For hero sections, use a 60/40 or 55/45 split rather than 50/50. The off-center composition creates tension and visual interest (referencing the editorial aesthetic of reference 2).

---

## Borders & Surfaces

**Cards always have a border.** Use `border border-line` for subtle cards, `border border-line-strong` for cards that need more definition. Never a card with `bg-surface` but no border on `bg-void` — the border provides structure.

**Border radius is consistent per component type.** Cards: `rounded-xl` (18px). Buttons: `rounded-pill` (9999px). Badges/tags: `rounded-md` (8px). Inputs: `rounded-lg` (12px). Never mix radius sizes within a component group.

**Hover states lift.** When a card or interactive element is hovered, transition its border from `border-line` to `border-accent` with `transition-colors`. This is more refined than a background color change.

---

## Motion

### Philosophy

Transitions exist to make state changes legible, not to entertain. Every animation must serve comprehension. If you'd never notice it was gone, remove it.

### Duration ladder

| Use case | Duration token | Value |
|----------|---------------|-------|
| Instant feedback (click, check) | `--duration-fast` | 100ms |
| Hover states, focus rings | `--duration-base` | 200ms |
| Panel reveals, card lifts | `--duration-slow` | 350ms |
| Page-load stagger reveals | `--duration-slower` | 550ms |

### Easing

- **All hover and focus transitions**: `--ease-out-expo` — feels snappy and responsive
- **Page-load reveals**: `--ease-out-expo` with `translate-y` from 20px to 0
- **Spring effects** (scale on click): `--ease-spring` — one-time use for delight moments

### CSS-only animation patterns

```css
/* Fade + slide on load — stagger with animation-delay */
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: reveal 550ms var(--ease-out-expo) both;
}

/* Stagger children */
.reveal:nth-child(1) { animation-delay: 0ms; }
.reveal:nth-child(2) { animation-delay: 80ms; }
.reveal:nth-child(3) { animation-delay: 160ms; }
```

### What NOT to animate

- Do not animate layout-affecting properties (width, height, margin, padding) — use transforms instead
- Do not animate text content (counters/number tickers) as the primary feature — use them as subtle polish after the main content has settled
- Do not add `transition-all` — always specify the property being transitioned

---

## Accessibility

### Color contrast

- `--color-fg` on `--color-void`: **15.4:1** — exceeds AAA
- `--color-accent` on `--color-void`: **12.1:1** — exceeds AAA
- `--color-fg-muted` on `--color-void`: **4.8:1** — passes AA for normal text
- `--color-fg-inverse` on `--color-accent`: **12.1:1** — exceeds AAA

### Focus

All interactive elements must display a `ring-2 ring-line-focus ring-offset-2 ring-offset-void` focus ring when keyboard-focused. Never suppress `:focus-visible` without providing an equally visible alternative.

### Motion

Respect `prefers-reduced-motion`. Wrap all animations in:

```css
@media (prefers-reduced-motion: no-preference) {
  /* animation here */
}
```

Or use the Tailwind `motion-safe:` variant.
