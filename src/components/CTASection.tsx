import type { ReactNode } from 'react';

import { marketingLinks } from '../config/links';
import ctaScribble from '../assets/figma/cta-scribble.svg';
import ctaWatermark from '../assets/figma/cta-watermark.png';
import { Button } from './Button';

interface CTASectionProps {
  title: string;
  text: string;
  artwork?: ReactNode;
  size?: 'default' | 'home';
}

export function CTASection({
  title,
  text,
  artwork,
  size = 'default',
}: CTASectionProps) {
  return (
    <section className={`section section--brand cta-section cta-section--${size}`}>
      <div className="section__inner cta-section__content">
        <h2 className="headline">{title}</h2>
        <p className="body-copy cta-section__text">{text}</p>
        <div className="cta-section__action">
          <Button href={marketingLinks.appDownload} variant="primary">
            Download app
          </Button>
        </div>
      </div>
      {artwork ?? (
        <img
          alt=""
          aria-hidden="true"
          className="cta-section__art"
          src={size === 'home' ? ctaWatermark : ctaScribble}
        />
      )}
    </section>
  );
}
