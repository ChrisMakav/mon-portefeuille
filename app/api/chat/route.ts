import { NextRequest } from "next/server";

const N8N_URL = process.env.N8N_WEBHOOK_URL!;

export async function POST(request: NextRequest) {
  const body = await request.json();

  const upstream = await fetch(N8N_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await upstream.json();
  return Response.json(data, { status: upstream.status });
}
