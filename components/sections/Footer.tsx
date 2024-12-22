'use client';

import { useTranslations } from 'next-intl';
import { Camera } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { languageConfig } from '@/lib/config/navigation';
import Image from "next/image";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image className="h-8 w-auto" src="/maker.png" alt="photo maker" width={6} height={6}/>
              <span className="font-bold text-xl">{t('common.title')}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('common.description')}
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.features')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.examples')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.pricing')}
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.helpCenter')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.contact')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/community" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.community')}
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.privacy')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.terms')}
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0" asChild>
                  <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                    {t('footer.cookies')}
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Language Selector & Copyright */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {languageConfig.map((lang) => (
                <Button key={lang.code} variant="link" className="h-auto p-0" asChild>
                  <Link
                    href="/"
                    locale={lang.code}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {lang.nativeName}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} {t('common.title')}. {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}