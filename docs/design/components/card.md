# Card

The base container for all panel-style content groupings. Four semantic variants: the generic `Card`, and three opinionated wrappers — `ServiceCard`, `ProjectCard`, and `StatCard` — that own their own internal layout.

## Base Card

A neutral container. Use when no semantic wrapper fits.

```tsx
<Card>
  <p>Custom content</p>
</Card>

<Card variant="raised">
  <p>Higher elevation content</p>
</Card>
```

### Variants

| Variant | Background | Border | Shadow | Use |
|---------|------------|--------|--------|-----|
| `default` | `bg-surface` | `border-line` | `shadow-sm` | Most cards |
| `raised` | `bg-surface-raised` | `border-line-strong` | `shadow-md` | Emphasised cards, featured items |
| `overlay` | `bg-overlay` | `border-line-strong` | `shadow-lg` | Modals, drawers, tooltips |

### Hover behavior

Cards that are interactive (wrapped in `<a>` or `<button>`) display a hover state:
- Border transitions from `border-line` → `border-accent`
- `translateY(-2px)` lift with `transition-transform`
- Duration: `--duration-base` (200ms), easing: `--ease-out-expo`

Non-interactive cards (pure display) have no hover state.

## ServiceCard

Displays a single service offering. Contains an icon, a name, a short description, and a "Say Hello →" ghost action.

```tsx
<ServiceCard
  icon={<FigmaIcon />}
  title="Design Skills"
  description="Proficient in Figma, creating sleek user interfaces…"
/>
```

Layout:
- Icon (24px, `text-accent`) top-left
- Title: `font-display text-2xl uppercase` below icon
- Description: `font-sans text-sm text-fg-muted` 3–4 lines
- Ghost CTA at bottom: "Say Hello →"

## ProjectCard

Displays a portfolio project with a thumbnail image, category tag, title, and a "See Project →" ghost action.

```tsx
<ProjectCard
  image="/images/project-1.jpg"
  imageAlt="Lab Test Equipment website screenshot"
  category="WordPress"
  title="WordPress Theme Development"
  href="https://example.com"
/>
```

Layout:
- Thumbnail image: 16:9 aspect ratio, `object-cover`, slight scale on hover
- Category badge (top-left absolute, or above title)
- Title: `font-display text-xl uppercase`
- CTA: "See Project →" ghost button

## StatCard

Displays a single key number.

```tsx
<StatCard value="6+" label="Years of Experience" />
<StatCard value="100+" label="Completed Projects" />
```

Layout:
- Value: `font-display text-5xl text-accent` — large, accent-colored
- Label: `font-sans text-sm text-fg-muted uppercase tracking-widest`

## TestimonialCard

Displays a client testimonial with quote, name, avatar, and role.

```tsx
<TestimonialCard
  quote="He is a very nice guy to work with…"
  author="mhdevboston"
  role="Designer"
  avatarSrc="/images/avatar-1.jpg"
/>
```

Layout:
- Quote: `font-sans text-sm text-fg-muted italic` (no quotation mark glyph needed)
- Avatar: 40px circle, `rounded-full`
- Author: `text-accent text-sm font-mono` (username style)
- Role: `text-fg-subtle text-xs uppercase tracking-widest`

## Spacing inside cards

| Card type | Padding |
|-----------|---------|
| Base Card | `p-6` (24px) |
| ServiceCard | `p-6` |
| ProjectCard | `p-0` image, `p-5` content area |
| StatCard | `p-6` |
| TestimonialCard | `p-6` |

## Border radius

All cards: `rounded-xl` (18px). Never mix radius values within a card grid.

## Accessibility

- Interactive cards (links to project pages) must use `<a>` or `<Link>` wrapping with an accessible name on the anchor, not `onClick` on a `<div>`.
- Images require descriptive `alt` text.
- Testimonial quotes are wrapped in `<blockquote>` with `<cite>` for the attribution.
