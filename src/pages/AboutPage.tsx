import aboutHero from '../assets/figma/about-hero.jpg';
import aboutCtaScribble from '../assets/figma/about-cta-scribble.svg';
import { CTASection } from '../components/CTASection';
import { FeatureCard } from '../components/FeatureCard';
import { ExpenseOrbit, GapActionVisual } from '../components/FigmaIllustrations';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Section } from '../components/Section';
import { TeamGrid } from '../components/TeamGrid';
import { marketingLinks } from '../config/links';
import { getMarketingContent } from '../data/marketing';
import type { LocaleContent } from '../i18n/content';
import type { Locale } from '../i18n/routing';

interface AboutPageProps {
  content: LocaleContent;
  locale: Locale;
}

export function AboutPage({ content, locale }: AboutPageProps) {
  const copy = content.about;
  const marketing = getMarketingContent(locale, {
    events: marketingLinks.events,
    partner: marketingLinks.partner,
    donation: marketingLinks.donation,
  });

  return (
    <div className="site-page">
      <Header activePage="about" labels={content.shared.header} locale={locale} />
      <main className="site-main">
        <HeroSection
          lead={copy.heroLead}
          tone="white"
          title={copy.heroTitle}
          visual={(
            <span aria-hidden="true" className="about-hero-frame">
              <img alt="" className="about-hero-image" src={aboutHero} />
            </span>
          )}
          visualTone="soft"
        />

        <Section kind="about-story" tone="deep">
          <h2 className="headline about-story__title">
            {copy.storyTitle}
          </h2>
          <p className="about-story__body">{copy.storyBody}</p>
        </Section>

        <Section kind="about-math" labelledBy="math-heading" tone="white">
          <h2 className="headline" id="math-heading">
            {copy.mathTitle}
          </h2>
          <p className="body-copy about-math__lead">{copy.mathLead}</p>
          <div className="feature-grid">
            <FeatureCard card={marketing.aboutMathFeatures[0]}>
              <ExpenseOrbit copy={content.illustrations.expenseOrbit} tone="brand" />
            </FeatureCard>
            <FeatureCard card={marketing.aboutMathFeatures[1]} />
            <FeatureCard card={marketing.aboutMathFeatures[2]}>
              <GapActionVisual copy={content.illustrations.gapAction} />
            </FeatureCard>
          </div>
        </Section>

        <Section kind="team-section" labelledBy="team-heading" tone="light">
          <h2 className="headline" id="team-heading">
            {copy.teamTitle}
          </h2>
          <TeamGrid members={marketing.teamMembers} />
        </Section>

        <CTASection
          actionLabel={content.shared.header.downloadApp}
          artwork={
            <img
              alt=""
              aria-hidden="true"
              className="cta-section__art"
              src={aboutCtaScribble}
            />
          }
          text={copy.ctaText}
          title={copy.ctaTitle}
        />
      </main>
      <Footer labels={content.shared.footer} />
    </div>
  );
}
