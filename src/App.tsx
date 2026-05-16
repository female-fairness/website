import { useEffect, useState } from 'react';

import { contentByLocale } from './i18n/content';
import { resolveRoute } from './i18n/routing';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

export default function App() {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );
  const route = resolveRoute(pathname);
  const content = contentByLocale[route.locale];

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePathname(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href]',
      );

      if (
        !anchor ||
        anchor.target ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('rel') === 'external'
      ) {
        return;
      }

      const url = new URL(anchor.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', url);
      setPathname(normalizePathname(url.pathname));
      window.scrollTo({ top: 0 });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = route.locale;
    document.title = content.shared.metaTitle;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content = content.shared.metaDescription;
    }
  }, [content, route.locale]);

  if (route.page === 'about') {
    return <AboutPage content={content} locale={route.locale} />;
  }

  return <HomePage content={content} locale={route.locale} />;
}
