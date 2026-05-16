import clinicIcon from '../assets/figma/clinic-medical-solid.svg';
import tintIcon from '../assets/figma/tint-solid.svg';
import calendarIcon from '../assets/figma/calendar.svg';
import { CTASection } from '../components/CTASection';
import { FeatureCard } from '../components/FeatureCard';
import {
  EventBanner,
  ExpenseOrbit,
  MiniCalendar,
  MiniChart,
} from '../components/FigmaIllustrations';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Section } from '../components/Section';
import { TestimonialGrid } from '../components/TestimonialGrid';
import { marketingLinks } from '../config/links';
import { getMarketingContent, homeImages } from '../data/marketing';
import type { LocaleContent } from '../i18n/content';
import type { Locale } from '../i18n/routing';

interface HomePageProps {
  content: LocaleContent;
  locale: Locale;
}

export function HomePage({ content, locale }: HomePageProps) {
  const copy = content.home;
  const marketing = getMarketingContent(locale, {
    events: marketingLinks.events,
    partner: marketingLinks.partner,
    donation: marketingLinks.donation,
  });

  return (
    <div className="site-page">
      <Header activePage="home" labels={content.shared.header} locale={locale} />
      <main className="site-main">
        <HeroSection
          action
          actionLabel={content.shared.header.downloadApp}
          lead={copy.heroLead}
          title={copy.heroTitle}
          titleWidth="narrow"
          visual={<ExpenseOrbit copy={content.illustrations.expenseOrbit} />}
        />

        <Section kind="stats-band" tone="deep">
          <div className="stats-band__items">
            <div className="stat-item">
              <img alt="" src={clinicIcon} />
              <p className="body-copy">{copy.stats[0]}</p>
            </div>
            <div className="stat-item">
              <img alt="" src={tintIcon} />
              <p className="body-copy">{copy.stats[1]}</p>
            </div>
            <div className="stat-item">
              <img alt="" src={calendarIcon} />
              <p className="body-copy">{copy.stats[2]}</p>
            </div>
          </div>
          <h2 className="headline stats-band__headline">{copy.statsHeadline}</h2>
        </Section>

        <section className="section section--beige split-section">
          <div className="split-section__copy">
            <h2 className="headline">{copy.changeTitle}</h2>
            <p className="body-copy split-section__text">{copy.changeText}</p>
          </div>
          <div className="split-section__visual split-section__visual--home-phone">
            <img alt={copy.homePhoneAlt} src={homeImages.homePhone} />
          </div>
        </section>

        <Section
          kind="card-section"
          labelledBy="product-heading"
          tone="white"
        >
          <div className="card-section__intro">
            <h2 className="headline" id="product-heading">
              {copy.productTitle}
            </h2>
            <p className="body-copy">{copy.productText}</p>
          </div>
          <div className="feature-grid">
            <FeatureCard card={marketing.productFeatures[0]}>
              <MiniChart copy={content.illustrations.miniChart} />
            </FeatureCard>
            <FeatureCard card={marketing.productFeatures[1]}>
              <MiniCalendar copy={content.illustrations.miniCalendar} />
            </FeatureCard>
            <FeatureCard card={marketing.productFeatures[2]} />
          </div>
        </Section>

        <section className="section section--light split-section">
          <div className="split-section__copy">
            <h2 className="headline">{copy.informedTitle}</h2>
            <p className="body-copy split-section__text">{copy.informedText}</p>
          </div>
          <div className="split-section__visual">
            <img
              alt={copy.articlesPhoneAlt}
              className="article-visual"
              src={homeImages.articlesPhone}
            />
          </div>
        </section>

        <Section
          kind="community-section"
          labelledBy="community-heading"
          tone="white"
        >
          <h2 className="headline" id="community-heading">
            {copy.communityTitle}
          </h2>
          <div className="feature-grid">
            <FeatureCard card={marketing.communityFeatures[0]}>
              <EventBanner copy={content.illustrations.eventBanner} />
            </FeatureCard>
            <FeatureCard card={marketing.communityFeatures[1]} />
            <FeatureCard card={marketing.communityFeatures[2]} />
          </div>
        </Section>

        <Section
          kind="testimonial-section"
          labelledBy="impact-heading"
          tone="beige"
        >
          <h2 className="headline" id="impact-heading">
            {copy.impactTitle}
          </h2>
          <TestimonialGrid testimonials={marketing.testimonials} />
        </Section>

        <CTASection
          actionLabel={content.shared.header.downloadApp}
          size="home"
          text={copy.ctaText}
          title={copy.ctaTitle}
        />
      </main>
      <Footer labels={content.shared.footer} />
    </div>
  );
}
