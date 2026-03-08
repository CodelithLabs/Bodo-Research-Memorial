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

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

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
