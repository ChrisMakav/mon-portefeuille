"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";

type FormStatus = "idle" | "sending" | "success" | "error";
interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }

export function ContactSection() {
  const { tr } = useLanguage();
  const f = tr.contact.form;
  const c = tr.contact;

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validate(data: FormData): FormErrors {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = f.errors.name;
    if (!data.email.trim()) e.email = f.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = f.errors.emailInvalid;
    if (!data.subject.trim()) e.subject = f.errors.subject;
    if (!data.message.trim()) e.message = f.errors.message;
    else if (data.message.trim().length < 20) e.message = f.errors.messageMin;
    return e;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const contactInfo = [
    { label: "Email", value: "contact.makav@gmail.com", href: "mailto:contact.makav@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/jeannico-chris-mabila-4b687985", href: "https://www.linkedin.com/in/jeannico-chris-mabila-4b687985" },
    { label: tr.contact.label, value: c.availability, href: null },
  ];

  return (
    <section id="contact" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8 reveal">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">{c.label}</p>
              <h2 className="font-display font-black uppercase text-fg leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
                {c.heading1}<br />{c.heading2}
              </h2>
            </div>
            <p className="font-sans text-base text-fg-muted leading-relaxed">{c.intro}</p>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="font-mono text-label uppercase tracking-widest text-fg-subtle w-24 shrink-0">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="font-sans text-sm text-fg-muted hover:text-accent transition-colors duration-[200ms]">{item.value}</a>
                  ) : (
                    <span className="font-sans text-sm text-fg-muted">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <a href="https://n8n.srv1644260.hstgr.cloud/form/e6fa0f2e-dc0f-4eaa-9149-8d30be210a33" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">{c.bookCta}</Button>
            </a>
          </div>

          <div className="reveal">
            {status === "success" ? (
              <Card variant="raised" className="text-center py-12">
                <div className="text-accent text-4xl mb-4" aria-hidden="true">✓</div>
                <h3 className="font-display text-3xl font-bold uppercase text-fg mb-2">{f.successTitle}</h3>
                <p className="font-sans text-sm text-fg-muted">{f.successSub}</p>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {status === "error" && (
                  <p className="font-sans text-sm text-danger bg-danger/10 border border-danger/20 rounded-lg px-4 py-3">{f.errorMsg}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label={f.name} htmlFor="name" error={errors.name} required>
                    <Input id="name" name="name" type="text" placeholder={f.namePlaceholder} value={formData.name} onChange={handleChange} error={errors.name} autoComplete="name" />
                  </FormField>
                  <FormField label={f.email} htmlFor="email" error={errors.email} required>
                    <Input id="email" name="email" type="email" placeholder={f.emailPlaceholder} value={formData.email} onChange={handleChange} error={errors.email} autoComplete="email" />
                  </FormField>
                </div>
                <FormField label={f.subject} htmlFor="subject" error={errors.subject} required>
                  <Input id="subject" name="subject" type="text" placeholder={f.subjectPlaceholder} value={formData.subject} onChange={handleChange} error={errors.subject} />
                </FormField>
                <FormField label={f.message} htmlFor="message" error={errors.message} required>
                  <Textarea id="message" name="message" placeholder={f.messagePlaceholder} rows={5} value={formData.message} onChange={handleChange} error={errors.message} />
                </FormField>
                <div className="flex justify-end">
                  <Button type="submit" variant="primary" size="lg" loading={status === "sending"}>
                    {status === "sending" ? f.sending : f.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
