'use client';

import { useTranslations } from 'next-intl';
import { Camera } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { NavItem } from '@/components/navigation/NavItem';
import { LanguageSwitch } from '@/components/navigation/LanguageSwitch';
import { navigationConfig } from '@/lib/config/navigation';
import Image from "next/image";

export function Navigation() {
  const t = useTranslations();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center">
        {/* Logo - Left */}
        <div className="flex-none">
          <Link href="/" className="flex items-center space-x-2">
            <Image className="h-8 w-auto" src="/maker.png" alt="photo maker" width={6} height={6}/>
            <span className="font-bold text-xl">{t('common.title')}</span>
          </Link>
        </div>

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center space-x-1">
            {navigationConfig.mainNav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={t(item.label)}
              />
            ))}
          </div>
        </div>

        {/* Language Selector - Right */}
        <div className="flex-none">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}