import Csrf from 'csrf';
import { cookies } from 'next/headers';

const csrf = new Csrf();
const SECRET_KEY = process.env.CSRF_SECRET ?? process.env.JWT_SECRET!;

export async function createCsrfToken(): Promise<string> {
  const secret = await csrf.secret();
  cookies().set('csrfSecret', secret, { httpOnly: true, sameSite: 'strict' });
  return csrf.create(secret);
}

export async function validateCsrfToken(token: string): Promise<boolean> {
  const secret = cookies().get('csrfSecret')?.value;
  if (!secret) return false;
  return csrf.verify(secret, token);
}
