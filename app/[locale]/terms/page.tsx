import { unstable_setRequestLocale } from 'next-intl/server';
import { TermsContent } from '@/components/legal/TermsContent';
import { ContentLayout } from '@/components/layouts/ContentLayout';

interface Props {
  params: { locale: string };
}

export default function TermsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <ContentLayout>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <TermsContent />
      </ContentLayout>
    </main>
  );
}