"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqEntries } from "@/lib/data/faq";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("tarifs");

  return (
    <section id="faq" className="py-section bg-void">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label="FAQ" heading="Questions Fréquentes" />

        <div className="max-w-3xl mx-auto reveal">
          {faqEntries.map((entry) => (
            <FAQItem
              key={entry.id}
              question={entry.question}
              answer={entry.answer}
              isOpen={openId === entry.id}
              onToggle={() =>
                setOpenId(openId === entry.id ? null : entry.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
