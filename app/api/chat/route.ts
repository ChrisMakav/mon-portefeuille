import { NextRequest } from "next/server";

const N8N_URL = process.env.N8N_WEBHOOK_URL!;

export async function POST(request: NextRequest) {
  const body = await request.json();

  let upstream: Response;
  try {
    upstream = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error("[chat proxy] fetch error:", err);
    return Response.json(
      { error: "Impossible de joindre le serveur n8n.", detail: String(err) },
      { status: 502 }
    );
  }

  const text = await upstream.text();

  if (!upstream.ok) {
    console.error(`[chat proxy] n8n returned ${upstream.status}:`, text);
    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { parsed = text; }
    return Response.json(
      { error: "Erreur workflow n8n", status: upstream.status, detail: parsed },
      { status: upstream.status }
    );
  }

  try {
    return Response.json(JSON.parse(text), { status: upstream.status });
  } catch {
    return new Response(text, {
      status: upstream.status,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
