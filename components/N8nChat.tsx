"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
  id: number;
}

let msgCounter = 0;

function mkMsg(role: Message["role"], text: string): Message {
  return { role, text, id: ++msgCounter };
}

const INITIAL: Message[] = [
  mkMsg("bot", "Bonjour 👋 Je suis l'assistant de Rachide Mabila."),
  mkMsg("bot", "Posez-moi vos questions sur ses services, son expertise ou sa disponibilité — je suis là pour vous aider."),
];

// ── Icons ────────────────────────────────────────────────────────────────────

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconMic({ listening }: { listening: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke={listening ? "#ff4d4d" : "currentColor"}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={listening ? { animation: "mic-pulse 0.9s ease-in-out infinite" } : undefined}
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

// ── Typing indicator ──────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "12px 16px", alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#7A8694",
          animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  );
}

// ── Global styles injected once ───────────────────────────────────────────────

const CSS = `
  @keyframes mic-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.4; transform:scale(1.25); }
  }
  @keyframes typing-dot {
    0%,80%,100% { transform:scale(1);   opacity:.4; }
    40%         { transform:scale(1.4); opacity:1;  }
  }
  .makav-chat-window {
    position:fixed; bottom:80px; right:24px; z-index:9999;
    width:380px; height:600px;
    background:#080A0B; border:1px solid #232830; border-radius:16px;
    display:flex; flex-direction:column; overflow:hidden;
    box-shadow:0 8px 32px rgba(0,0,0,.6);
    font-family:'Outfit',system-ui,sans-serif;
    animation:chat-in .18s ease-out;
  }
  @keyframes chat-in {
    from { opacity:0; transform:translateY(12px) scale(.97); }
    to   { opacity:1; transform:none; }
  }
  .makav-chat-toggle {
    position:fixed; bottom:24px; right:24px; z-index:9999;
    width:54px; height:54px; border-radius:50%;
    background:#C1FF2F; border:none; cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    color:#080A0B; box-shadow:0 4px 16px rgba(193,255,47,.3);
    transition:background .2s, transform .15s;
  }
  .makav-chat-toggle:hover { background:#D4FF5C; transform:scale(1.06); }
  .makav-chat-header {
    padding:16px 18px; border-bottom:1px solid #232830;
    background:#111416; flex-shrink:0;
    display:flex; align-items:flex-start; justify-content:space-between;
  }
  .makav-chat-messages {
    flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:10px;
    scrollbar-width:thin; scrollbar-color:#232830 transparent;
  }
  .makav-chat-messages::-webkit-scrollbar { width:4px; }
  .makav-chat-messages::-webkit-scrollbar-thumb { background:#232830; border-radius:4px; }
  .makav-bubble-bot {
    align-self:flex-start; max-width:88%;
    background:#111416; border:1px solid #232830; color:#F2F4F6;
    padding:10px 14px; border-radius:12px 12px 12px 2px;
    font-size:.88rem; line-height:1.55; white-space:pre-wrap;
  }
  .makav-bubble-user {
    align-self:flex-end; max-width:88%;
    background:#C1FF2F; color:#080A0B;
    padding:10px 14px; border-radius:12px 12px 2px 12px;
    font-size:.88rem; line-height:1.55; white-space:pre-wrap;
    font-weight:500;
  }
  .makav-chat-footer {
    border-top:1px solid #232830; background:#111416;
    padding:10px 12px; flex-shrink:0;
    display:flex; align-items:flex-end; gap:6px;
  }
  .makav-chat-textarea {
    flex:1; background:transparent; border:1px solid #232830;
    border-radius:10px; color:#F2F4F6; font-family:inherit;
    font-size:.88rem; padding:9px 12px; resize:none;
    line-height:1.5; outline:none; max-height:120px;
    transition:border-color .2s;
  }
  .makav-chat-textarea:focus { border-color:#C1FF2F; }
  .makav-chat-textarea::placeholder { color:#414D5A; }
  .makav-icon-btn {
    flex-shrink:0; width:36px; height:36px; border-radius:50%;
    border:none; cursor:pointer; display:flex; align-items:center;
    justify-content:center; transition:background .2s, color .2s;
  }
  .makav-btn-mic {
    background:transparent; color:#7A8694;
  }
  .makav-btn-mic:hover { color:#C1FF2F; }
  .makav-btn-send {
    background:#C1FF2F; color:#080A0B;
  }
  .makav-btn-send:hover { background:#D4FF5C; }
  .makav-btn-send:disabled { background:#232830; color:#414D5A; cursor:not-allowed; }
`;

// ── Main component ────────────────────────────────────────────────────────────

export function N8nChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const sessionId = useRef(
    typeof crypto !== "undefined" ? crypto.randomUUID() : Math.random().toString(36)
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  // Inject global CSS once
  useEffect(() => {
    const tag = document.createElement("style");
    tag.id = "makav-chat-css";
    tag.textContent = CSS;
    document.head.appendChild(tag);
    return () => { document.head.removeChild(tag); };
  }, []);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
  }, [input]);

  // ── Send message ──────────────────────────────────────────────────────────

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, mkMsg("user", trimmed)]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: sessionId.current,
          chatInput: trimmed,
        }),
      });
      const data = await res.json();
      const botText =
        data.output ?? data.message ?? data.response ?? data.text ??
        (res.ok ? "..." : "Une erreur est survenue. Veuillez réessayer.");
      setMessages((prev) => [...prev, mkMsg("bot", String(botText))]);
    } catch {
      setMessages((prev) => [...prev, mkMsg("bot", "Impossible de joindre l'assistant. Veuillez réessayer.")]);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  // ── Mic dictation ─────────────────────────────────────────────────────────

  const toggleMic = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    const SR = win.SpeechRecognition ?? win.webkitSpeechRecognition;

    if (!SR) {
      alert(
        document.documentElement.lang === "en"
          ? "Speech recognition is not supported in this browser. Try Chrome or Edge."
          : "La reconnaissance vocale n'est pas supportée dans ce navigateur. Essayez Chrome ou Edge."
      );
      return;
    }

    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      return;
    }

    const rec = new SR();
    recognitionRef.current = rec;
    rec.lang = document.documentElement.lang === "en" ? "en-US" : "fr-FR";
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.continuous = false;

    rec.onstart = () => setListening(true);
    rec.onend   = () => setListening(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onerror = (e: any) => {
      setListening(false);
      if (e.error === "not-allowed" || e.error === "permission-denied") {
        alert(
          document.documentElement.lang === "en"
            ? "Microphone access denied. Please allow it in your browser settings."
            : "Accès au microphone refusé. Autorisez-le dans les paramètres de votre navigateur."
        );
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      // Direct React state update — no DOM manipulation needed
      setInput(transcript);
    };

    rec.start();
    textareaRef.current?.focus();
  }, [listening]);

  // ── Keyboard submit ───────────────────────────────────────────────────────

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Toggle button */}
      <button
        className="makav-chat-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le chat" : "Ouvrir l'assistant"}
        title={open ? "Fermer" : "Assistant MAKAV"}
      >
        {open ? <IconClose /> : <IconChat />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="makav-chat-window" role="dialog" aria-label="Assistant MAKAV">
          {/* Header */}
          <div className="makav-chat-header">
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#F2F4F6", marginBottom: 2 }}>
                Assistant MAKAV
              </div>
              <div style={{ fontSize: ".78rem", color: "#7A8694" }}>
                Disponible 24h/7j pour répondre à vos questions
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#7A8694", padding: 4, lineHeight: 0 }}
              aria-label="Fermer"
            >
              <IconClose />
            </button>
          </div>

          {/* Messages */}
          <div className="makav-chat-messages">
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "makav-bubble-user" : "makav-bubble-bot"}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="makav-bubble-bot" style={{ padding: 0 }}>
                <TypingDots />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="makav-chat-footer">
            <textarea
              ref={textareaRef}
              className="makav-chat-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={listening ? "Dictée en cours…" : "Écrivez votre question..."}
              rows={1}
              disabled={loading}
            />

            {/* Mic button */}
            <button
              type="button"
              className="makav-icon-btn makav-btn-mic"
              onClick={toggleMic}
              title={listening ? "Arrêter la dictée" : "Dicter un message"}
              aria-label={listening ? "Arrêter la dictée" : "Dicter un message"}
            >
              <IconMic listening={listening} />
            </button>

            {/* Send button */}
            <button
              type="button"
              className="makav-icon-btn makav-btn-send"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              title="Envoyer"
              aria-label="Envoyer"
            >
              <IconSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
