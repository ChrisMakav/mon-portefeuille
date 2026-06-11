"use client";

import { useEffect } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? "";
const CDN = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.24.2/dist";

export function N8nChat() {
  useEffect(() => {
    if (!WEBHOOK_URL) return;

    // CSS via CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${CDN}/style.css`;
    document.head.appendChild(link);

    // Widget loaded as an ES module script — bypasses Next.js bundler entirely
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from '${CDN}/chat.bundle.es.js';
      createChat({
        webhookUrl: "${WEBHOOK_URL}",
        mode: "window",
        showWelcomeScreen: false,
        defaultLanguage: "en",
        loadPreviousSession: true,
        initialMessages: [
          "Bonjour 👋 Je suis l'assistant de Rachide Mabila.",
          "Posez-moi vos questions sur ses services, son expertise ou sa disponibilité — je suis là pour vous aider."
        ],
        i18n: {
          en: {
            title: "Assistant MAKAV",
            subtitle: "Disponible 24h/7j pour répondre à vos questions",
            footer: "",
            getStarted: "Démarrer une conversation",
            inputPlaceholder: "Écrivez votre question...",
            closeButtonTooltip: "Fermer"
          }
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
