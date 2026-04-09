import { getRequestConfig } from 'next-intl/server';
import en from './en.json';
import bodo from './bodo.json';

const messages = { en, bodo } as const;

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale ?? 'en';
  const selected = messages[resolvedLocale as keyof typeof messages] ?? messages.en;
  return { locale: resolvedLocale, messages: selected };
});
