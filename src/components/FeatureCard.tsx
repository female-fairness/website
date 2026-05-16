import type { ReactNode } from 'react';

import type { FeatureCardData } from '../data/marketing';
import { Button } from './Button';

interface FeatureCardProps {
  card: FeatureCardData;
  children?: ReactNode;
}

export function FeatureCard({ card, children }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className={`feature-card__media feature-card__media--${card.tone}`}>
        {children ??
          (card.image ? <img alt={card.image.alt} src={card.image.src} /> : null)}
      </div>
      <div>
        <h3 className="feature-card__title">{card.title}</h3>
        <p className="feature-card__body">{card.body}</p>
        {card.action ? (
          <div className="feature-card__action">
            <Button
              href={card.action.href}
              variant={card.action.disabled ? 'disabled' : 'secondary'}
            >
              {card.action.label}
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
