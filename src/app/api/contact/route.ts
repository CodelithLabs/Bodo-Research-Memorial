import { NextRequest, NextResponse } from 'next/server';

// Example handler for /api/contact
// This stub currently just logs the submission and returns 200. Replace
// the `sendMail` logic with your preferred provider (SendGrid, Mailgun,
// Nodemailer, etc.) or forward the payload to a form service.

async function sendMail({ name, email, message }: { name: string; email: string; message: string; }) {
  // placeholder - implement with real mail service
  console.log('sending contact form email:', { name, email, message });
  // e.g. await fetch("https://api.sendgrid.com/v3/mail/send", {...})
}

// simple in-memory rate limiter (per IP, max 5 requests per minute)
const rateMap: Record<string, { count: number; firstTimestamp: number }> = {};

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateMap[ip];
  if (!entry || now - entry.firstTimestamp > 60000) {
    rateMap[ip] = { count: 1, firstTimestamp: now };
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const data = await req.json();
    const { name, email, message, hp } = data;

    // honeypot should be empty
    if (hp) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await sendMail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('contact route error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
