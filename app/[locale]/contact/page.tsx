import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function ContactPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-4">
              Have questions or feedback? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p>Email: support@photomaker.com</p>
              <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Office Location</h2>
            <div className="space-y-2">
              <p>PhotoMaker AI</p>
              <p>123 AI Boulevard</p>
              <p>Tech City, TC 12345</p>
              <p>United States</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}