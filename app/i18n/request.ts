import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is configured
  if (!locales.includes(locale as any)) {
    return {
      messages: {},
      timeZone: 'UTC',
      now: new Date()
    };
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: 'UTC',
    now: new Date()
  };
});