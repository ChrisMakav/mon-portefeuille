"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import { Card } from "@/components/ui/Card";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  { label: "Email", value: "contact.makav@gmail.com", href: "mailto:contact.makav@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/jeannico-chris-mabila-4b687985", href: "https://www.linkedin.com/in/jeannico-chris-mabila-4b687985" },
  { label: "Disponibilité", value: "Ouvert aux nouvelles missions", href: null },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Votre nom est requis.";
  if (!data.email.trim()) {
    errors.email = "Votre email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Veuillez entrer un email valide.";
  }
  if (!data.subject.trim()) errors.subject = "Le sujet est requis.";
  if (!data.message.trim()) errors.message = "Votre message est requis.";
  else if (data.message.trim().length < 20)
    errors.message = "Votre message doit contenir au moins 20 caractères.";
  return errors;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info + CTA */}
          <div className="flex flex-col gap-8 reveal">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">
                Contact
              </p>
              <h2
                className="font-display font-black uppercase text-fg leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.9,
                }}
              >
                Démarrons
                <br />
                un Projet
              </h2>
            </div>

            <p className="font-sans text-base text-fg-muted leading-relaxed">
              Un projet en tête ? Une question sur mes services ? Réservez un
              appel de découverte gratuit de 30 minutes ou envoyez-moi un
              message — je vous réponds sous 24h.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="font-mono text-label uppercase tracking-widest text-fg-subtle w-24 shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-sans text-sm text-fg-muted hover:text-accent transition-colors duration-[200ms]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-fg-muted">
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* TODO: Replace href with your real Calendly or booking link */}
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Réserver un appel gratuit →
              </Button>
            </a>
          </div>

          {/* Right — Form */}
          <div className="reveal">
            {status === "success" ? (
              <Card variant="raised" className="text-center py-12">
                <div className="text-accent text-4xl mb-4" aria-hidden="true">
                  ✓
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-fg mb-2">
                  Message Envoyé !
                </h3>
                <p className="font-sans text-sm text-fg-muted">
                  Merci pour votre message. Je vous réponds sous 24 heures.
                </p>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {status === "error" && (
                  <p className="font-sans text-sm text-danger bg-danger/10 border border-danger/20 rounded-lg px-4 py-3">
                    Une erreur est survenue. Veuillez réessayer ou m&apos;écrire
                    directement par email.
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Votre nom" htmlFor="name" error={errors.name} required>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      autoComplete="name"
                    />
                  </FormField>

                  <FormField label="Votre email" htmlFor="email" error={errors.email} required>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean@entreprise.fr"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      autoComplete="email"
                    />
                  </FormField>
                </div>

                <FormField label="Sujet" htmlFor="subject" error={errors.subject} required>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Projet de transformation digitale"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                </FormField>

                <FormField label="Message" htmlFor="message" error={errors.message} required>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet, vos besoins et vos contraintes..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                </FormField>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === "sending"}
                  >
                    Envoyer le message →
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
