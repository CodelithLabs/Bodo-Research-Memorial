import { NextResponse } from 'next/server';
import { createCsrfToken } from '@/lib/csrf';

export async function GET() {
  const csrfToken = await createCsrfToken();
  return NextResponse.json({ csrfToken, token: csrfToken });
}
