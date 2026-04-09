import { getRequestConfig } from 'next-intl/server';
import en from './en.json';
import bodo from './bodo.json';

const messages = { en, bodo } as const;

export default getRequestConfig(async ({ locale }) => {
  const selected = (messages as Record<string, Record<string, string>>)[locale] ?? messages.en;
  return { messages: selected };
});
