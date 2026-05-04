import { cookies } from 'next/headers';
import { createCSRFToken } from 'next-auth/core/lib/csrf-token';
import { defaultCookies } from 'next-auth/core/lib/cookie';
import { authOptions } from '@/lib/auth-options';

type CsrfCookieConfig = {
  name: string;
  options: {
    httpOnly: boolean;
    sameSite: 'lax' | 'strict' | 'none';
    path: string;
    secure: boolean;
    maxAge?: number;
  };
};

function getCsrfCookieConfig(): CsrfCookieConfig {
  const useSecureCookies = authOptions.useSecureCookies
    ?? (process.env.NEXTAUTH_URL?.startsWith('https://') ?? false);
  const baseCookies = defaultCookies(useSecureCookies);
  return authOptions.cookies?.csrfToken ?? baseCookies.csrfToken;
}

function getCsrfSecret(): string {
  const secret = authOptions.secret ?? process.env.NEXTAUTH_SECRET;
  if (!secret) {
    throw new Error('NEXTAUTH_SECRET is not set');
  }
  return secret;
}

export async function createCsrfToken(): Promise<string> {
  const cookieStore = cookies();
  const csrfCookie = getCsrfCookieConfig();
  const existingCookie = cookieStore.get(csrfCookie.name)?.value;

  const { cookie, csrfToken } = createCSRFToken({
    options: { secret: getCsrfSecret() },
    cookieValue: existingCookie,
    isPost: false,
    bodyValue: undefined,
  });

  if (cookie) {
    cookieStore.set(csrfCookie.name, cookie, csrfCookie.options);
  }

  return csrfToken;
}

export async function validateCsrfToken(token?: string | null): Promise<boolean> {
  if (!token) return false;

  const cookieStore = cookies();
  const csrfCookie = getCsrfCookieConfig();
  const existingCookie = cookieStore.get(csrfCookie.name)?.value;

  const { csrfTokenVerified } = createCSRFToken({
    options: { secret: getCsrfSecret() },
    cookieValue: existingCookie,
    isPost: true,
    bodyValue: token,
  });

  return Boolean(csrfTokenVerified);
}
