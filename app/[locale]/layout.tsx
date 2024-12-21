import { Inter } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { I18nProvider } from '@/app/i18n/provider';
import { locales, isValidLocale } from '@/app/i18n/config';
import { Metadata } from 'next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://photomaker.ai'),
  title: {
    default: 'PhotoMaker - AI Photo Generation',
    template: '%s | PhotoMaker'
  },
  description: 'Transform your photos with AI magic. Create stunning portraits and artistic transformations.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://photomaker.ai',
    title: 'PhotoMaker - AI Photo Generation',
    description: 'Transform your photos with AI magic. Create stunning portraits and artistic transformations.',
    siteName: 'PhotoMaker'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhotoMaker - AI Photo Generation',
    description: 'Transform your photos with AI magic. Create stunning portraits and artistic transformations.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider locale={locale} messages={messages} timeZone="UTC">
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}