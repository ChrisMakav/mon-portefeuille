# Button

The single interactive control for all user actions: CTAs, form submits, navigation triggers.

## Variants

### Primary
The dominant action on any given surface. Uses the accent fill.

```tsx
<Button variant="primary">Contact Me</Button>
<Button variant="primary" size="lg">Download CV</Button>
```

Visual: `bg-accent text-fg-inverse` → chartreuse fill, dark text. On hover: `bg-accent-hover` + `shadow-glow`. Pill-shaped.

### Secondary
Supporting action. Appears next to or below a primary button.

```tsx
<Button variant="secondary">See Project</Button>
```

Visual: `bg-surface-raised border border-line-strong text-fg`. On hover: `border-accent text-accent`.

### Ghost
Minimal action, embedded in text areas or toolbars.

```tsx
<Button variant="ghost">Say Hello →</Button>
```

Visual: No background, no border. `text-fg-muted`. On hover: `text-fg bg-surface`.

### Link
Inline text action. Behaves like a link but is triggered programmatically.

```tsx
<Button variant="link">See all projects</Button>
```

Visual: `text-accent`. On hover: underline. Zero padding, height auto.

## Sizes

| Size | Height | Padding | Font size |
|------|--------|---------|-----------|
| `sm` | 32px (`h-8`) | `px-4` | `text-sm` |
| `md` | 44px (`h-11`) | `px-6` | `text-base` |
| `lg` | 56px (`h-14`) | `px-8` | `text-lg` |

Default size is `md`.

## States

| State | Visual treatment |
|-------|-----------------|
| Default | Variant base styles |
| Hover | Lightened fill or border-accent switch |
| Active | `scale-[0.97]` + slightly darker fill |
| Focus | `ring-2 ring-line-focus ring-offset-2 ring-offset-void` |
| Loading | Spinner replaces leading icon; text unchanged; disabled |
| Disabled | `opacity-40 cursor-not-allowed`; pointer-events removed |

## Props

```ts
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?:    'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean  // future — renders as Slot if true
}
```

## Usage rules

- One primary button per visual section. If you need two competing primary actions, one of them is wrong.
- Use `size="lg"` only in hero sections. Elsewhere use `md`.
- The arrow glyph `→` in ghost buttons is a text character, not an SVG icon. Do not use `<svg>` for the arrow.
- Buttons do not contain other block elements (`<div>`, `<p>`). Label text only.

## Accessibility

- Always provide a text label. If icon-only, add `aria-label`.
- `loading` state sets `aria-busy="true"` and `disabled` so screen readers announce the busy state.
- Do not use `<a>` styled as a button to trigger actions — use `<button>`. For navigation, use `<a>` or Next.js `<Link>`.

## Do / Don't

| Do | Don't |
|----|-------|
| `<Button variant="primary">Contact Me</Button>` | `<Button className="bg-green-500">` |
| One primary per section | Two primary buttons side by side |
| Use `loading` prop for async actions | Disable and re-enable manually |
