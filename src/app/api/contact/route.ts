import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}][\p{L}\s.'-]*$/u;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const requestsByClient = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(request: Request) {
  return (
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown-client"
  );
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = requestsByClient.get(clientKey);

  if (!current || current.resetAt <= now) {
    requestsByClient.set(clientKey, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaxRequests;
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
  }

  if (isRateLimited(getRateLimitKey(request))) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: { name?: unknown; email?: unknown; phone?: unknown; subject?: unknown; message?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid form submission." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length < 2 || name.length > 120 || !namePattern.test(name) || !emailPattern.test(email) || email.length > 254 || !phone || phone.length > 40 || !subject || subject.length < 3 || subject.length > 200 || !message || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please complete all fields with valid information." }, { status: 400 });
  }

  const supabaseRestUrl = supabaseUrl.replace(/\/$/, "");
  const supabaseHeaders = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };
  const submission = { p_name: name, p_email: email, p_phone: phone, p_subject: subject, p_message: message };

  let response = await fetch(`${supabaseRestUrl}/rest/v1/rpc/submit_contact_submission`, {
    method: "POST",
    headers: supabaseHeaders,
    body: JSON.stringify(submission),
  });

  if (!response.ok && response.status === 404) {
    response = await fetch(`${supabaseRestUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: supabaseHeaders,
      body: JSON.stringify({ name, email, phone, subject, message }),
    });
  }

  if (!response.ok) {
    console.error("Supabase contact submission failed", await response.text());
    return NextResponse.json({ error: "We could not save your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}