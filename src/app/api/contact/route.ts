import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function sanitise(value: string): string {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, service, message, date } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const safeName = sanitise(name);

  // Format the notification email body
  const text = [
    "New enquiry from GNC Financial website",
    "",
    `Name:    ${safeName}`,
    `Email:   ${email}`,
    phone    ? `Phone:   ${sanitise(phone)}`   : null,
    service  ? `Service: ${sanitise(service)}` : null,
    date     ? `Date:    ${sanitise(date)}`    : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  // ─── SMTP configuration via environment variables ─────────────────────────
  // Set these in .env.local (or your hosting provider's env settings):
  //   SMTP_HOST      e.g. smtp.gmail.com
  //   SMTP_PORT      e.g. 587
  //   SMTP_USER      e.g. youraddress@gmail.com
  //   SMTP_PASS      App password (not your normal login password)
  //   CONTACT_EMAIL_TO  e.g. admin@gncfinancial.com.au (defaults to SMTP_USER)
  // ─────────────────────────────────────────────────────────────────────────

  const smtpConfigured =
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (smtpConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT ?? 587) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const to = process.env.CONTACT_EMAIL_TO ?? process.env.SMTP_USER!;

      await transporter.sendMail({
        from: `"GNC Financial Website" <${process.env.SMTP_USER}>`,
        to,
        replyTo: email,
        subject: `New enquiry from ${safeName} – GNC Financial`,
        text,
      });
    } catch (err) {
      console.error("[contact/route] SMTP send failed:", err);
      return NextResponse.json(
        { error: "Sorry, there was a problem sending your message. Please call us directly." },
        { status: 500 }
      );
    }
  } else {
    // SMTP not yet configured — log submission so nothing is lost in development
    console.log("[contact/route] SMTP not configured. Submission received:\n", text);
  }

  return NextResponse.json({ ok: true });
}
