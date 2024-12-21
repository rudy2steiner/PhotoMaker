import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function CookiesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4 prose dark:prose-invert">
      <h1>Cookie Policy</h1>
      
      <section className="mb-8">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit
          our website. They help us provide you with a better experience.
        </p>
      </section>

      <section className="mb-8">
        <h2>2. How We Use Cookies</h2>
        <p>
          We use cookies to understand how you interact with our website, remember your
          preferences, and provide you with a personalized experience.
        </p>
      </section>

      <section className="mb-8">
        <h2>3. Types of Cookies We Use</h2>
        <ul>
          <li>Essential cookies for website functionality</li>
          <li>Analytics cookies to understand usage</li>
          <li>Preference cookies to remember your settings</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>4. Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies
          that are already on your computer and you can set most browsers to prevent them
          from being placed.
        </p>
      </section>
    </main>
  );
}