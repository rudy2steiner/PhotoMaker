'use client';

import { ReactNode } from 'react';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface I18nProviderProps {
  locale: string;
  messages: AbstractIntlMessages;
  timeZone: string;
  children: ReactNode;
}

export function I18nProvider({ locale, messages, timeZone, children }: I18nProviderProps) {
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone={timeZone}
      now={new Date()}
    >
      {children}
    </NextIntlClientProvider>
  );
}