import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

export default function NotFound() {
  const t = useTranslations('error');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">{t('notFound.title')}</h2>
      <p className="text-muted-foreground mb-6">{t('notFound.description')}</p>
      <Link 
        href="/"
        className="text-primary hover:underline"
      >
        {t('notFound.returnHome')}
      </Link>
    </div>
  );
}