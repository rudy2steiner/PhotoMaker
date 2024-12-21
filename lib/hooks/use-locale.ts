'use client';

import { usePathname, useRouter } from '@/lib/navigation';
import { defaultLocale, isValidLocale } from '@/app/i18n/config';

export function useLocale() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Get current locale from pathname, fallback to default
  const currentLocale = pathname.split('/')[1] || defaultLocale;

  const changeLocale = (newLocale: string) => {
    if (isValidLocale(newLocale)) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return {
    currentLocale,
    changeLocale
  };
}