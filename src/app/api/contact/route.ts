import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { validateCsrfToken } from '@/lib/csrf';
import { rateLimitContact } from '@/lib/ratelimit';

// Example handler for /api/contact
// This stub currently just logs the submission and returns 200. Replace
// the `sendMail` logic with your preferred provider (SendGrid, Mailgun,
// Nodemailer, etc.) or forward the payload to a form service.

async function sendMail({ name, email, message }: { name: string; email: string; message: string; }) {
  // placeholder - implement with real mail service
  console.log('sending contact form email:', { name, email, message });
  // e.g. await fetch("https://api.sendgrid.com/v3/mail/send", {...})
}

export async function POST(req: NextRequest) {
  try {
    const headerList = await headers();
    const ip = headerList.get('x-forwarded-for') ?? '127.0.0.1';
    const { success, limit, remaining } = await rateLimitContact.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(limit),
            'X-RateLimit-Remaining': String(remaining),
          },
        }
      );
    }

    const data = await req.json();
    const { name, email, message, hp, csrfToken } = data;

    const csrfValid = await validateCsrfToken(csrfToken);
    if (!csrfValid) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 403 });
    }

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
