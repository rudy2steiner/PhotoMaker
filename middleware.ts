import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames, localePrefix } from '@/app/i18n/config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix: 'as-needed' // Change from 'always' to 'as-needed'
});

export const config = {
  matcher: [
    // Match all paths except api, _next, static files
    '/((?!api|_next|_vercel|.*\\.|favicon.ico).*)',
    // Match root path
    '/'
  ]
};