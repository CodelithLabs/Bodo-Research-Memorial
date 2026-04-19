import Csrf from 'csrf';
import { cookies } from 'next/headers';

const csrf = new Csrf();

export async function createCsrfToken(): Promise<string> {
  const secret = await csrf.secret();
  const cookieStore = await cookies();
  cookieStore.set('csrfSecret', secret, { httpOnly: true, sameSite: 'strict' });
  return csrf.create(secret);
}

export async function validateCsrfToken(token: string): Promise<boolean> {
  const cookieStore = await cookies();
  const secret = cookieStore.get('csrfSecret')?.value;
  if (!secret) return false;
  return csrf.verify(secret, token);
}
