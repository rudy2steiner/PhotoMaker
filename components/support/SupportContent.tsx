'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Phone, FileText, Clock, Users } from 'lucide-react';

export function SupportContent() {
  const t = useTranslations('support');

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-semibold mb-6">{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <Mail className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('contact.email.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.email.description')}
            </p>
            <Button variant="outline" className="w-full">
              {t('contact.email.button')}
            </Button>
          </Card>
          
          <Card className="p-6">
            <MessageCircle className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('contact.chat.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.chat.description')}
            </p>
            <Button variant="outline" className="w-full">
              {t('contact.chat.button')}
            </Button>
          </Card>

          <Card className="p-6">
            <Phone className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('contact.phone.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('contact.phone.description')}
            </p>
            <Button variant="outline" className="w-full">
              {t('contact.phone.button')}
            </Button>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">{t('resources.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <FileText className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('resources.docs.title')}</h3>
            <p className="text-muted-foreground">
              {t('resources.docs.description')}
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('resources.status.title')}</h3>
            <p className="text-muted-foreground">
              {t('resources.status.description')}
            </p>
          </Card>

          <Card className="p-6">
            <Users className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">{t('resources.community.title')}</h3>
            <p className="text-muted-foreground">
              {t('resources.community.description')}
            </p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">{t('enterprise.title')}</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t('enterprise.subtitle')}</h3>
            <p className="text-muted-foreground">
              {t('enterprise.description')}
            </p>
            <Button>{t('enterprise.button')}</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}