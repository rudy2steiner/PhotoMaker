import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

// Define all localized routes
export const pathnames = {
  '/': '/',
  '/gallery': '/gallery',
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]'
} satisfies Pathnames<typeof locales>;

// Configure locale prefix strategy
export const localePrefix = 'as-needed'; // Change from 'always' to 'as-needed'

// Validate locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}