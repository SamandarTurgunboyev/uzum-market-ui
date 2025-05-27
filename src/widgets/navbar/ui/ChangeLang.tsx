// components/ChangeLang.tsx
'use client';

import * as React from 'react';
import { GlobeIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { languages } from '../lib/data';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useLanguageStore } from '@/shared/hooks/languageStore';
import { useEffect } from 'react';
import { LanguageRoutes } from '@/shared/config/i18n/types';

export function ChangeLang() {
  const { language, setLanguage } = useLanguageStore();
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  // URLdagi locale bilan Zustand holatini sinxronlashtirish
  useEffect(() => {
    if (locale && locale !== language) {
      // setLanguage(locale as string);
      setLanguage(language as LanguageRoutes);
      const segments = pathname.split('/');
      segments[1] = language;
      const newPath = segments.join('/');
      setLanguage(language);
      router.push(newPath);
    }
  }, [locale, language, setLanguage]);

  const changeLocale = (newLocale: LanguageRoutes) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    setLanguage(newLocale);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GlobeIcon />
          <span>
            {languages.find((e) => e.key === language)?.name || 'Oʻzbek'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((e, i) => (
          <DropdownMenuItem key={i} onClick={() => changeLocale(e.key)}>
            {e.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
