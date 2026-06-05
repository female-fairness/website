import wordmark from '../assets/brand/wordmark.svg';
import { marketingLinks } from '../config/links';
import { buildLocalizedPath, type Locale, type PageKey } from '../i18n/routing';
import { Button } from './Button';

interface HeaderProps {
  activePage: PageKey;
  locale: Locale;
  labels: {
    homeAriaLabel: string;
    navAriaLabel: string;
    about: string;
    downloadApp: string;
    languageAriaLabel: string;
    switchToEnglish: string;
    switchToDanish: string;
  };
}

export function Header({ activePage, locale, labels }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a aria-label={labels.homeAriaLabel} href={buildLocalizedPath('home', locale)}>
          <img
            alt="Female Fairness"
            className="site-header__logo"
            src={wordmark}
          />
        </a>
        <nav aria-label={labels.navAriaLabel} className="site-header__actions">
          <div aria-label={labels.languageAriaLabel} className="language-switch">
            <a
              aria-current={locale === 'en' ? 'true' : undefined}
              aria-label={labels.switchToEnglish}
              className="language-switch__link"
              href={buildLocalizedPath(activePage, 'en')}
            >
              EN
            </a>
            <a
              aria-current={locale === 'da' ? 'true' : undefined}
              aria-label={labels.switchToDanish}
              className="language-switch__link"
              href={buildLocalizedPath(activePage, 'da')}
            >
              DA
            </a>
          </div>
          <Button
            current={activePage === 'about'}
            href={buildLocalizedPath('about', locale)}
            variant="secondary"
          >
            {labels.about}
          </Button>
          <Button href={marketingLinks.appDownload} variant="primary">
            {labels.downloadApp}
          </Button>
        </nav>
      </div>
    </header>
  );
}
