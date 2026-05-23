import type { ReactNode } from 'react';

import { marketingLinks } from '../config/links';
import { Button } from './Button';

interface HeroSectionProps {
  title: ReactNode;
  lead?: ReactNode;
  visual: ReactNode;
  tone?: 'light' | 'white';
  visualTone?: 'brand' | 'soft';
  action?: boolean;
  actionLabel?: string;
  titleWidth?: 'default' | 'narrow';
}

export function HeroSection({
  title,
  lead,
  visual,
  tone = 'light',
  visualTone = 'brand',
  action = false,
  actionLabel = 'Download app',
  titleWidth = 'default',
}: HeroSectionProps) {
  return (
    <section className={`section section--${tone} hero-section`}>
      <div className="section__inner hero-section__inner">
        <div className="hero-section__copy">
          <h1 className={`headline hero-section__title hero-section__title--${titleWidth}`}>
            {title}
          </h1>
          {lead ? <p className="body-copy hero-section__lead">{lead}</p> : null}
          {action ? (
            <div className="hero-section__action">
              <Button href={marketingLinks.appDownload} variant="brand">
                {actionLabel}
              </Button>
            </div>
          ) : null}
        </div>
        <div className={`hero-section__visual hero-section__visual--${visualTone}`}>
          {visual}
        </div>
      </div>
    </section>
  );
}
