"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!,
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
