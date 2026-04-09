import { NextResponse } from 'next/server';
import { createCsrfToken } from '@/lib/csrf';

export async function GET() {
  const token = await createCsrfToken();
  return NextResponse.json({ token });
}
