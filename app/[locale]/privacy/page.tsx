import { unstable_setRequestLocale } from 'next-intl/server';
import { PrivacyContent } from '@/components/legal/PrivacyContent';
import { ContentLayout } from '@/components/layouts/ContentLayout';

interface Props {
  params: { locale: string };
}

export default function PrivacyPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <ContentLayout>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <PrivacyContent />
      </ContentLayout>
    </main>
  );
}