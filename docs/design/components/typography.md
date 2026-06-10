# Typography Components

Three lightweight wrapper components that enforce the type scale and pairing rules: `Heading`, `Label`, and `Body` (informal — `Body` is just `<p>` with correct default classes applied via globals.css).

---

## Heading

A semantic heading element (`h1`–`h6`) with automatic font, weight, size, and tracking applied by level.

```tsx
<Heading level={1}>Rachide Mabila</Heading>
<Heading level={2}>What I Do</Heading>
<Heading level={3}>Design Skills</Heading>
```

### Level → visual mapping

| Level | Font | Size | Weight | Case | Tracking |
|-------|------|------|--------|------|----------|
| `h1` | Display | `text-display` | 800 | uppercase | `-0.02em` |
| `h2` | Display | `text-7xl` | 800 | uppercase | `-0.02em` |
| `h3` | Display | `text-4xl` | 700 | uppercase | `-0.01em` |
| `h4` | Sans | `text-2xl` | 600 | sentence | `0` |
| `h5` | Sans | `text-xl` | 500 | sentence | `0` |
| `h6` | Mono | `text-sm` | 400 | uppercase | `0.08em` |

### Override via className

```tsx
<Heading level={2} className="text-accent">
  Portfolio
</Heading>
```

The `level` prop controls the DOM element and default styles. `className` merges on top. Do not use `level={1}` for every heading just because you want large text — use the correct semantic level and override the size via `className` if needed.

### Props

```ts
interface HeadingProps {
  level:     1 | 2 | 3 | 4 | 5 | 6
  children:  React.ReactNode
  className?: string
  id?:        string  // for in-page anchor links
}
```

---

## Label

A mono, uppercase, wide-tracked label — used above headings to introduce a section context.

```tsx
<Label>Hello, I Am</Label>
<Label>My Services</Label>
<Label variant="accent">Available for Freelance</Label>
```

Renders as `<p>` with `aria-hidden` by default (the heading below provides the accessible label). Pass `aria-hidden={false}` if the label contains unique information not repeated elsewhere.

### Variants

| Variant | Color | Border-left |
|---------|-------|-------------|
| `default` | `text-fg-muted` | none |
| `accent` | `text-accent` | `border-l-2 border-accent pl-3` |

### Props

```ts
interface LabelProps {
  variant?:   'default' | 'accent'
  children:   React.ReactNode
  className?: string
  'aria-hidden'?: boolean
}
```

---

## Body text (globals.css defaults)

There is no `<Body>` component — apply these classes directly:

| Use | Classes |
|-----|---------|
| Default body | `font-sans text-base text-fg-muted leading-relaxed` |
| Large body | `font-sans text-lg text-fg-muted leading-relaxed` |
| Small body | `font-sans text-sm text-fg-muted leading-normal` |
| Inline accent | `text-accent` (on a `<span>` inside a body paragraph) |

---

## Section header anatomy

Every major page section uses the same structure:

```tsx
<div className="text-center mb-16">
  <Label variant="accent">My Services</Label>
  <Heading level={2} className="mt-2">What I Do</Heading>
</div>
```

The label is always accent-colored and 8px above the heading. The heading is always the section's `h2`.
