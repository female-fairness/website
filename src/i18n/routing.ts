export const locales = ['en', 'da'] as const;

export const pageSegments = {
  home: '',
  about: 'about',
  merch: 'merch',
} as const;

export type Locale = (typeof locales)[number];
export type PageKey = keyof typeof pageSegments;

const localeSet = new Set<string>(locales);

const pageBySegment = new Map<string, PageKey>(
  (Object.keys(pageSegments) as PageKey[])
    .filter((page) => pageSegments[page])
    .map((page) => [pageSegments[page], page]),
);

export interface ResolvedRoute {
  locale: Locale;
  page: PageKey;
  explicitLocale: boolean;
}

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && localeSet.has(value));
}

export function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const languages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  return languages.some((language) => language.toLowerCase().startsWith('da'))
    ? 'da'
    : 'en';
}

export function resolveRoute(pathname: string): ResolvedRoute {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const explicitLocale = isLocale(firstSegment);
  const locale = explicitLocale ? firstSegment : getBrowserLocale();
  const pageSegment = explicitLocale ? segments[1] : segments[0];

  return {
    locale,
    page: (pageSegment && pageBySegment.get(pageSegment)) || 'home',
    explicitLocale,
  };
}

export function buildLocalizedPath(page: PageKey, locale: Locale): string {
  const segment = pageSegments[page];
  const suffix = segment ? `/${segment}` : '';

  return `/${locale}${suffix}`;
}
