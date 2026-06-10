# Form Elements

Used in the contact section. Three elements: `<Input>`, `<Textarea>`, and `<FormField>` (label + input + error wrapper).

---

## Input

Single-line text entry.

```tsx
<Input type="text" placeholder="Your name" />
<Input type="email" placeholder="your@email.com" />
<Input type="text" placeholder="Subject" error="Subject is required" />
```

### Visual

- Background: `bg-surface border border-line rounded-lg px-4 py-3`
- Placeholder: `text-fg-subtle`
- Text: `font-sans text-base text-fg`
- Focus: `border-line-focus ring-1 ring-line-focus outline-none`
- Error: `border-danger ring-1 ring-danger`
- Height: 48px (`h-12`)

---

## Textarea

Multi-line text entry for message content.

```tsx
<Textarea placeholder="Tell me about your project…" rows={5} />
```

- Same visual rules as Input
- `resize-none` — vertical resize only or no resize (prevents layout breakage)
- Minimum height: 120px

---

## FormField

Wrapper that composes a `<label>`, an input (any type), and an optional error message.

```tsx
<FormField label="Your Name" htmlFor="name" error={errors.name}>
  <Input id="name" type="text" placeholder="John Doe" />
</FormField>
```

### Anatomy

```
Your Name                    ← label: font-sans text-sm text-fg-muted mb-1
┌──────────────────────────┐
│  John Doe                │ ← input
└──────────────────────────┘
⚠ Name is required          ← error: font-sans text-xs text-danger mt-1
```

---

## Props

```ts
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

interface FormFieldProps {
  label:     string
  htmlFor:   string
  error?:    string
  children:  React.ReactNode
  required?: boolean
}
```

---

## Contact form layout

The contact section uses a single-column form on mobile, two-column on desktop:

```
┌──────────────┐  ┌──────────────┐
│  Your Name   │  │  Your Email  │  ← row 1: 2 cols
└──────────────┘  └──────────────┘
┌─────────────────────────────────┐
│  Subject                        │  ← row 2: full width
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  Message                        │  ← row 3: textarea, full width
│                                 │
└─────────────────────────────────┘
              [Send Message →]       ← row 4: right-aligned CTA
```

---

## Accessibility

- Every input has a `<label>` associated via `htmlFor` / `id`.
- Error messages use `aria-describedby` linking the input to the error element.
- Required fields have `required` attribute and a visual `*` indicator.
- Do not use `placeholder` as a substitute for `<label>`.
