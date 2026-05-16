import { useEffect } from 'react';

import { contentByLocale } from './i18n/content';
import { resolveRoute } from './i18n/routing';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  const route = resolveRoute(window.location.pathname.replace(/\/+$/, '') || '/');
  const content = contentByLocale[route.locale];

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
