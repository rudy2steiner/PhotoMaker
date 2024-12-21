'use client';

import { useLanguageSwitch } from '@/lib/hooks/use-language-switch';
import { languageConfig } from '@/lib/config/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageSwitch() {
  const { currentLocale, switchLanguage } = useLanguageSwitch();
  const currentLanguage = languageConfig.find(lang => lang.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-9 px-3 gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage?.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languageConfig.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={cn(
              "gap-2 cursor-pointer",
              currentLocale === lang.code && "bg-muted"
            )}
          >
            <span>{lang.flag}</span>
            <span className="flex-1">{lang.nativeName}</span>
            <span className="text-xs text-muted-foreground">
              {lang.code.toUpperCase()}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}