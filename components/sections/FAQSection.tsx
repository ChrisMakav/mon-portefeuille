"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";
import { useLanguage } from "@/contexts/LanguageContext";

export function FAQSection() {
  const { tr } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("tarifs");

  return (
    <section id="faq" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={tr.faq.label} heading={tr.faq.heading} />
        <div className="max-w-3xl mx-auto reveal">
          {tr.faq.items.map((entry) => (
            <FAQItem
              key={entry.id}
              question={entry.question}
              answer={entry.answer}
              isOpen={openId === entry.id}
              onToggle={() => setOpenId(openId === entry.id ? null : entry.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
