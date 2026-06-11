"use client";

import { useEffect } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? "";

export function N8nChat() {
  useEffect(() => {
    if (!WEBHOOK_URL) return;

    // Dynamically import the CSS and the widget to keep it purely client-side
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.24.2/dist/style.css";
    document.head.appendChild(link);

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: WEBHOOK_URL,
        mode: "window",
        showWelcomeScreen: false,
        defaultLanguage: "en",
        loadPreviousSession: true,
        initialMessages: [
          "Bonjour 👋 Je suis l'assistant de Rachide Mabila.",
          "Posez-moi vos questions sur ses services, son expertise ou sa disponibilité — je suis là pour vous aider.",
        ],
        i18n: {
          en: {
            title: "Assistant MAKAV",
            subtitle: "Disponible 24h/7j pour répondre à vos questions",
            footer: "",
            getStarted: "Démarrer une conversation",
            inputPlaceholder: "Écrivez votre question...",
            closeButtonTooltip: "Fermer",
          },
        },
      });
    });
  }, []);

  return null;
}
