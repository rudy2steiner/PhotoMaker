import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function HelpPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4 prose dark:prose-invert">
      <h1>Help Center</h1>
      
      <section className="mb-8">
        <h2>Getting Started</h2>
        <ul>
          <li>How to upload photos</li>
          <li>Choosing the right style</li>
          <li>Understanding generation settings</li>
          <li>Managing your account</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Troubleshooting</h2>
        <ul>
          <li>Common issues and solutions</li>
          <li>Image quality problems</li>
          <li>Generation errors</li>
          <li>Account access issues</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Contact Support</h2>
        <p>
          Need more help? Our support team is available 24/7 to assist you.
          Contact us through our support portal or email support@photomaker.com
        </p>
      </section>
    </main>
  );
}