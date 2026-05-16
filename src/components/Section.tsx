import type { ReactNode } from 'react';

type SectionTone = 'light' | 'beige' | 'deep' | 'white' | 'brand';

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  labelledBy?: string;
  kind?: string;
}

export function Section({
  children,
  tone = 'white',
  labelledBy,
  kind,
}: SectionProps) {
  const classes = ['section', `section--${tone}`, kind].filter(Boolean).join(' ');

  return (
    <section aria-labelledby={labelledBy} className={classes}>
      <div className="section__inner">{children}</div>
    </section>
  );
}
