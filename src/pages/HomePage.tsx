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
import {
  communityFeatures,
  homeImages,
  productFeatures,
  testimonials,
} from '../data/marketing';

export function HomePage() {
  const communityCards = communityFeatures({
    events: marketingLinks.events,
    partner: marketingLinks.partner,
    donation: marketingLinks.donation,
  });

  return (
    <div className="site-page">
      <Header activePage="home" />
      <main className="site-main">
        <HeroSection
          action
          lead={
            <span className="italic">
              What if you could have that money back?
            </span>
          }
          title={
            <>
              Women spend <span className="no-break">1-2M</span> dkk more on
              health over a lifetime compared to men.
            </>
          }
          titleWidth="narrow"
          visual={<ExpenseOrbit />}
        />

        <Section kind="stats-band" tone="deep">
          <div className="stats-band__items">
            <div className="stat-item">
              <img alt="" src={clinicIcon} />
              <p className="body-copy">
                In Denmark, women are diagnosed{' '}
                <span className="italic">4 years later than men.</span>
              </p>
            </div>
            <div className="stat-item">
              <img alt="" src={tintIcon} />
              <p className="body-copy">
                <span className="italic">1 in 4 women</span> struggle to afford
                menstrual products.
              </p>
            </div>
            <div className="stat-item">
              <img alt="" src={calendarIcon} />
              <p className="body-copy">
                Women <span className="italic">lose 30-50 workdays</span> on
                average due to pregnancy appointments, nausea and complications.
              </p>
            </div>
          </div>
          <h2 className="headline stats-band__headline">
            It&apos;s not a choice.
            <br />
            It&apos;s biology and lack of support.
          </h2>
        </Section>

        <section className="section section--beige split-section">
          <div className="split-section__copy">
            <h2 className="headline">
              We want to
              <br />
              change that.
            </h2>
            <p className="body-copy split-section__text">
              Female health shouldn&apos;t be a luxury,{' '}
              <span className="italic">it should be a right.</span>
              <br />
              We want to give women clarity over their hidden health expenses.
              With our community and tools, we turn financial pain into
              empowerment with one click.
            </p>
          </div>
          <div className="split-section__visual split-section__visual--home-phone">
            <img alt="Female Fairness mobile app screen" src={homeImages.homePhone} />
          </div>
        </section>

        <Section
          kind="card-section"
          labelledBy="product-heading"
          tone="white"
        >
          <div className="card-section__intro">
            <h2 className="headline" id="product-heading">
              Your health, your numbers, your power
            </h2>
            <p className="body-copy">
              Track, compare, and understand your real health costs — from
              period to menopause.{' '}
              <span className="italic">
                Get clarity, control, and fairness in one click.
              </span>
            </p>
          </div>
          <div className="feature-grid">
            <FeatureCard card={productFeatures[0]}>
              <MiniChart />
            </FeatureCard>
            <FeatureCard card={productFeatures[1]}>
              <MiniCalendar />
            </FeatureCard>
            <FeatureCard card={productFeatures[2]} />
          </div>
        </Section>

        <section className="section section--light split-section">
          <div className="split-section__copy">
            <h2 className="headline">
              Get informed.
              <br />
              Get empowered.
            </h2>
            <p className="body-copy split-section__text">
              We cannot take action without clear information on the gender gap.
              On our article section, you can read transparent and actionable
              data on the gender health gap, women&apos;s health discoveries,
              finances, and more.
            </p>
          </div>
          <div className="split-section__visual">
            <img
              alt="Female Fairness article shown on a mobile phone"
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
            Join our community
          </h2>
          <div className="feature-grid">
            <FeatureCard card={communityCards[0]}>
              <EventBanner />
            </FeatureCard>
            <FeatureCard card={communityCards[1]} />
            <FeatureCard card={communityCards[2]} />
          </div>
        </Section>

        <Section
          kind="testimonial-section"
          labelledBy="impact-heading"
          tone="beige"
        >
          <h2 className="headline" id="impact-heading">
            Real women, real impact
          </h2>
          <TestimonialGrid testimonials={testimonials} />
        </Section>

        <CTASection
          size="home"
          text="Join us in creating a world where health costs don't discriminate. Where transparency replaces invisibility."
          title="Ready to close the gap?"
        />
      </main>
      <Footer />
    </div>
  );
}
