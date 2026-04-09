import { NextResponse, type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { getToken } from 'next-auth/jwt';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'bodo'],
  defaultLocale: 'en',
  localePrefix: 'never',
  localeDetection: false,
});

export async function middleware(request: NextRequest) {
  const leadersOnlyRedirects = [
    '/culture',
    '/religion',
    '/movements',
    '/organizations',
    '/archive',
    '/timeline',
    '/history',
    '/research',
  ];

  const isLeadersOnlyPath = leadersOnlyRedirects.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isLeadersOnlyPath) {
    const url = request.nextUrl.clone();
    url.pathname = '/leaders';
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token || token.role !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
