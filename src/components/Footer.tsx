import type { ReactNode } from 'react';

import wordmark from '../assets/brand/wordmark.svg';
import { marketingLinks } from '../config/links';
import { buildLocalizedPath, type Locale } from '../i18n/routing';

interface FooterProps {
  locale: Locale;
  labels: {
    survey: string;
    tagline: string;
    address: ReactNode;
    linksAriaLabel: string;
    contact: string;
  };
}

export function Footer({ labels, locale }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <img alt="Female Fairness" className="site-footer__logo" src={wordmark} />
        <p className="site-footer__text">{labels.tagline}</p>
        <p className="site-footer__text">{labels.address}</p>
        <nav aria-label={labels.linksAriaLabel} className="site-footer__links">
          <a href={buildLocalizedPath('survey', locale)}>{labels.survey}</a>
          <a href={marketingLinks.linkedin}>Linkedin</a>
          <a href={marketingLinks.instagram}>Instagram</a>
          <a href={marketingLinks.contact}>{labels.contact}</a>
        </nav>
      </div>
    </footer>
  );
}
