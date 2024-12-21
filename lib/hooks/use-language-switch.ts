'use client';

import { useRouter, usePathname } from '@/lib/navigation';
import { locales, type Locale } from '@/app/i18n/config';

export function useLanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] as Locale;

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale !== currentLocale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return {
    currentLocale,
    switchLanguage,
    isValidLocale: (locale: string): locale is Locale => locales.includes(locale as Locale)
  };
}