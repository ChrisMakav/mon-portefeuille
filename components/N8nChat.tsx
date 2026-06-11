"use client";

import { useEffect } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? "";
const CDN = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.24.2/dist";

// CSS overrides injected AFTER the CDN stylesheet so our variables win
const STYLE_OVERRIDES = `
  :root {
    --chat--color--primary:             #C1FF2F;
    --chat--color--primary-shade-50:    #D4FF5C;
    --chat--color--primary--shade-100:  #A8E81A;
    --chat--color--secondary:           #C1FF2F;
    --chat--color-secondary-shade-50:   #D4FF5C;
    --chat--color-dark:                 #080A0B;
    --chat--color-light:                #F2F4F6;
    --chat--color-light-shade-50:       #232830;
    --chat--color-light-shade-100:      #363D47;
    --chat--color-medium:               #363D47;
    --chat--color-white:                #111416;
    --chat--color-typing:               #7A8694;
    --chat--color-disabled:             #363D47;

    --chat--header--background:         #111416;
    --chat--header--color:              #F2F4F6;
    --chat--header--border-bottom:      1px solid #232830;
    --chat--heading--font-size:         1.15em;
    --chat--subtitle--font-size:        0.8em;

    --chat--body--background:           #080A0B;
    --chat--footer--background:         #111416;
    --chat--footer--color:              #414D5A;

    --chat--message--bot--background:   #111416;
    --chat--message--bot--color:        #F2F4F6;
    --chat--message--bot--border:       1px solid #232830;
    --chat--message--user--background:  #C1FF2F;
    --chat--message--user--color:       #080A0B;
    --chat--message--pre--background:   rgba(193,255,47,0.08);
    --chat--message--font-size:         0.9rem;

    --chat--toggle--background:         #C1FF2F;
    --chat--toggle--hover--background:  #D4FF5C;
    --chat--toggle--active--background: #A8E81A;
    --chat--toggle--color:              #080A0B;
    --chat--toggle--size:               54px;
    --chat--toggle--border-radius:      50%;

    --chat--window--width:              380px;
    --chat--window--height:             600px;
    --chat--window--border:             1px solid #232830;
    --chat--window--border-radius:      16px;

    --chat--input--background:          #111416;
    --chat--input--text-color:          #F2F4F6;
    --chat--input--border:              1px solid #232830;
    --chat--input--border-active:       1px solid #C1FF2F;
    --chat--input--padding:             0.75rem 1rem;
    --chat--input--send--button--background:       transparent;
    --chat--input--send--button--color:            #C1FF2F;
    --chat--input--send--button--background-hover: transparent;
    --chat--input--send--button--color-hover:      #D4FF5C;

    --chat--button--background--primary:        #C1FF2F;
    --chat--button--color--primary:             #080A0B;
    --chat--button--background--primary--hover: #D4FF5C;
    --chat--button--color--primary--hover:      #080A0B;

    --chat--border-radius:   10px;
    --chat--spacing:         1rem;
    --chat--font-family:     'Outfit', system-ui, sans-serif;
    --chat--transition-duration: 0.2s;
  }

  /* Force input area visible and accessible */
  .chat-input,
  [class*="chat-input"],
  [class*="chat__input"] {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    background: #111416 !important;
    border-top: 1px solid #232830 !important;
    min-height: 56px !important;
  }
  [class*="chat-input"] textarea,
  [class*="chat-input"] input {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    color: #F2F4F6 !important;
    background: transparent !important;
    min-height: 40px !important;
  }
  [class*="chat-input"] textarea::placeholder,
  [class*="chat-input"] input::placeholder {
    color: #414D5A !important;
  }
  /* Ensure message list doesn't overflow and crush the input */
  [class*="chat-messages"],
  [class*="chat__messages"] {
    flex: 1 1 auto !important;
    overflow-y: auto !important;
    max-height: calc(var(--chat--window--height) - 180px) !important;
  }
`;

export function N8nChat() {
  useEffect(() => {
    if (!WEBHOOK_URL) return;

    // 1. CDN stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${CDN}/style.css`;
    document.head.appendChild(link);

    // 2. Our overrides come AFTER the CDN CSS in DOM order → they win
    const style = document.createElement("style");
    style.innerHTML = STYLE_OVERRIDES;
    document.head.appendChild(style);

    // 3. ES module script — loads widget from CDN, no webpack involved
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from '${CDN}/chat.bundle.es.js';
      createChat({
        webhookUrl: "${WEBHOOK_URL}",
        mode: "window",
        showWelcomeScreen: false,
        defaultLanguage: "en",
        loadPreviousSession: false,
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
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
