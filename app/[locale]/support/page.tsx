import { unstable_setRequestLocale } from 'next-intl/server';
import { SupportContent } from '@/components/support/SupportContent';
import { ContentLayout } from '@/components/layouts/ContentLayout';

interface Props {
  params: { locale: string };
}

export default function SupportPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  return (
    <main className="container mx-auto py-12 px-4">
      <ContentLayout>
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        <SupportContent />
      </ContentLayout>
    </main>
  );
}