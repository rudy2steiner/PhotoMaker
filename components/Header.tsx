'use client';

import { useTranslations } from 'next-intl';
import { Camera } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Header() {
  const t = useTranslations('common');

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <Image className="h-8 w-auto" src="/maker.png" alt="photo maker" width={32} height={32}/>
          <span className="font-bold text-xl">{t('title')}</span>
        </Link>
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/en">EN</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/zh">中文</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}