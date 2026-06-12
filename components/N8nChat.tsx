"use client";

import { useEffect } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CHAT_WEBHOOK_URL ?? "";
const CDN = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.24.2/dist";

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

  /* ── Dictaphone button ── */
  #makav-mic-btn {
    flex-shrink: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0 8px;
    color: #7A8694;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: color 0.2s ease;
    margin-right: 2px;
    line-height: 0;
  }
  #makav-mic-btn:hover {
    color: #C1FF2F;
  }
  #makav-mic-btn.listening {
    color: #ff4d4d;
    animation: mic-pulse 0.9s ease-in-out infinite;
  }
  @keyframes mic-pulse {
    0%, 100% { opacity: 1;   transform: scale(1);    }
    50%       { opacity: 0.5; transform: scale(1.2);  }
  }
`;

const MIC_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`;

export function N8nChat() {
  // ── n8n CDN widget ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!WEBHOOK_URL) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${CDN}/style.css`;
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.innerHTML = STYLE_OVERRIDES;
    document.head.appendChild(style);

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

  // ── Dictaphone injection ────────────────────────────────────────────────────
  useEffect(() => {
    if (!WEBHOOK_URL) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type SR = any;
    type WinExt = Window & { SpeechRecognition?: new () => SR; webkitSpeechRecognition?: new () => SR };

    let recognition: SR = null;
    let isListening = false;

    // Always re-query to avoid stale references after Vue re-renders
    function getField(): HTMLTextAreaElement | HTMLInputElement | null {
      const inputArea = document.querySelector<HTMLElement>('[class*="chat-input"]');
      if (!inputArea) return null;
      return (
        inputArea.querySelector<HTMLTextAreaElement>("textarea") ??
        inputArea.querySelector<HTMLInputElement>('input[type="text"]') ??
        inputArea.querySelector<HTMLInputElement>("input") ??
        null
      );
    }

    // Insert transcript using execCommand (works with Vue/React/contenteditable)
    // then falls back to native setter if execCommand isn't available
    function applyTranscript(text: string) {
      const field = getField();
      if (!field) return;

      field.focus();

      // Select all existing content so we replace it with the transcript
      field.setSelectionRange(0, field.value.length);

      // execCommand goes through the browser's native input pipeline —
      // Vue's v-model @input handler will pick it up correctly
      const inserted = document.execCommand("insertText", false, text);

      if (!inserted) {
        // Fallback: native setter + synthetic InputEvent
        const proto = field instanceof HTMLTextAreaElement
          ? HTMLTextAreaElement.prototype
          : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, "value")?.set?.call(field, text);
        field.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    function injectMicButton() {
      if (document.getElementById("makav-mic-btn")) return;

      const inputArea = document.querySelector<HTMLElement>('[class*="chat-input"]');
      if (!inputArea) return;
      if (!getField()) return;

      const sendBtn = inputArea.querySelector<HTMLButtonElement>("button");

      const micBtn = document.createElement("button");
      micBtn.id = "makav-mic-btn";
      micBtn.type = "button";
      const isEn = document.documentElement.lang === "en";
      micBtn.title = isEn ? "Dictate a message" : "Dicter un message";
      micBtn.setAttribute("aria-label", micBtn.title);
      micBtn.innerHTML = MIC_SVG;

      if (sendBtn) {
        sendBtn.parentNode?.insertBefore(micBtn, sendBtn);
      } else {
        inputArea.appendChild(micBtn);
      }

      micBtn.addEventListener("click", () => {
        const win = window as WinExt;
        const SRCtor = win.SpeechRecognition ?? win.webkitSpeechRecognition;

        if (!SRCtor) {
          alert(
            document.documentElement.lang === "en"
              ? "Speech recognition is not supported in this browser. Try Chrome or Edge."
              : "La reconnaissance vocale n'est pas supportée dans ce navigateur. Essayez Chrome ou Edge."
          );
          return;
        }

        if (isListening && recognition) {
          recognition.stop();
          return;
        }

        recognition = new SRCtor();
        recognition.lang = document.documentElement.lang === "en" ? "en-US" : "fr-FR";
        recognition.interimResults = true;  // show partial results in real time
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        recognition.onstart = () => {
          isListening = true;
          micBtn.classList.add("listening");
        };

        recognition.onend = () => {
          isListening = false;
          micBtn.classList.remove("listening");
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onerror = (e: any) => {
          isListening = false;
          micBtn.classList.remove("listening");
          if (e.error === "not-allowed" || e.error === "permission-denied") {
            alert(
              document.documentElement.lang === "en"
                ? "Microphone access was denied. Please allow microphone access in your browser settings."
                : "L'accès au microphone a été refusé. Autorisez l'accès au microphone dans les paramètres du navigateur."
            );
          }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          // Build the current best transcript (final + last interim)
          let transcript = "";
          for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          if (transcript) applyTranscript(transcript);
        };

        recognition.start();
      });
    }

    const observer = new MutationObserver(() => injectMicButton());
    observer.observe(document.body, { childList: true, subtree: true });
    injectMicButton();

    return () => {
      observer.disconnect();
      recognition?.abort();
      document.getElementById("makav-mic-btn")?.remove();
    };
  }, []);

  return null;
}
