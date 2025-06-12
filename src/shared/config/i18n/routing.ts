import { defineRouting } from 'next-intl/routing';
import { LanguageRoutes } from './types';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LanguageRoutes.UZ, LanguageRoutes.EN, LanguageRoutes.KI],

  // Used when no locale matches
  defaultLocale: LanguageRoutes.UZ,
  localeDetection: false,
});
