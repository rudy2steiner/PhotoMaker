'use client';

import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale, pathnames, localePrefix } from './config';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale,
  pathnames,
  localePrefix
});