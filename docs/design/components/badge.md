# Badge

Small inline label for categories, technologies, and status indicators. Always reads as secondary information — it supports context, never competes with headings.

## Variants

### Default
Neutral tint — for technology tags and generic categories.

```tsx
<Badge>WordPress</Badge>
<Badge>React</Badge>
<Badge>TypeScript</Badge>
```

Visual: `bg-surface-raised border border-line text-fg-muted font-mono text-label uppercase tracking-widest`

### Accent
Highlights the primary category or featured tag.

```tsx
<Badge variant="accent">Featured</Badge>
```

Visual: `bg-accent-tint border border-accent/20 text-accent font-mono text-label uppercase tracking-widest`

### Status

```tsx
<Badge variant="success">Available</Badge>
<Badge variant="warning">In Progress</Badge>
<Badge variant="danger">Sold Out</Badge>
```

Visual: Tint + text in corresponding status color.

## Sizes

| Size | Padding | Font size |
|------|---------|-----------|
| `sm` | `px-2 py-0.5` | `text-label` (11px) |
| `md` | `px-3 py-1` | `text-caption` (12px) |

Default: `sm`.

## Anatomy

```
┌──────────────────┐
│  · WORDPRESS     │
└──────────────────┘
  ↑ optional dot   ↑ label text
```

The optional leading dot (`·`) can be replaced with a status indicator (a filled circle in the status color) for availability badges.

## Usage rules

- Badge labels are always uppercase. Apply `uppercase tracking-widest` in the component — never rely on the consumer to add these.
- Maximum 2 badges per card. If more are needed, show 2 + a "+3 more" overflow badge.
- Do not use badges as buttons. If a badge needs to be clickable (e.g. to filter), wrap it in `<Link>` but style with the badge visual — do not add `onClick` directly to a `<span>`.

## Props

```ts
interface BadgeProps {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  size?:    'sm' | 'md'
  dot?:     boolean  // shows a status dot before the label
  children: React.ReactNode
  className?: string
}
```

## Accessibility

Badges are presentational by default. When a badge conveys important status information (e.g. "Available for hire"), add `aria-label` to the parent element or include the badge text in the surrounding accessible name.
