import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return Response.json({ ok: false, error: "Server misconfiguration" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"MAKAV Service Digital" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Contact] ${subject} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="color:#111;margin-top:0;">Nouveau message via le site</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;">Nom</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#111;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Sujet</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;">
          <p style="color:#666;margin-bottom:8px;">Message :</p>
          <p style="background:#fff;padding:16px;border-radius:4px;border:1px solid #e0e0e0;white-space:pre-wrap;">${message}</p>
          <p style="color:#aaa;font-size:12px;margin-top:24px;">
            Envoyé depuis le formulaire de contact de ton portfolio.<br>
            Pour répondre, utilise directement l'adresse : ${email}
          </p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
