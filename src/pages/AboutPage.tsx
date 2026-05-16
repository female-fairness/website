import aboutCtaScribble from '../assets/figma/about-cta-scribble.svg';
import { CTASection } from '../components/CTASection';
import { FeatureCard } from '../components/FeatureCard';
import { ExpenseOrbit, GapActionVisual } from '../components/FigmaIllustrations';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Section } from '../components/Section';
import { TeamGrid } from '../components/TeamGrid';
import { aboutMathFeatures, teamMembers } from '../data/marketing';

export function AboutPage() {
  return (
    <div className="site-page">
      <Header activePage="about" />
      <main className="site-main">
        <HeroSection
          lead="87% of women want a fair financial overview, but they don't have a tool. So we decided to create that."
          tone="white"
          title="We exist to close the hidden health cost gap."
          visual={<div aria-hidden="true" className="about-placeholder" />}
          visualTone="soft"
        />

        <Section kind="about-story" tone="deep">
          <h2 className="headline about-story__title">
            Inequality shouldn&apos;t be a personal monthly expense.
          </h2>
          <p className="about-story__body">
            Women spend more on pharmacy aisles, specialist waiting rooms, and
            lost career hours compared to men. That is called the &quot;Gender
            Health-Wealth Gap.&quot; For decades, we&apos;ve been told to
            &quot;just pay it.&quot; We&apos;ve treated systemic inequality as a
            personal monthly expense.
            <br />
            <br />
            If we think about how hormonal contraception was invented, it&apos;s
            clear: we are the ones being pushed to take in medication, change
            our natural cycles and have all the symptoms as a consequence to
            that. Those collateral effects and extra health expenses aren&apos;t
            accounted for. But how much more is it that we spend? Why do women
            die more of cardiac disease if they are less affected by it than
            men? Where are the actual numbers? That information isn&apos;t out
            there, and we didn&apos;t have yet a way to measure the individual
            expenses for each woman.
            <br />
            <br />
            That&apos;s where Female Fairness was born, as a solution to the
            Gender Health-Wealth Gap problem.
            <br />
            We aren&apos;t just another health brand. We are a Femtech-Fintech
            powerhouse dedicated to making the invisible, visible.
          </p>
        </Section>

        <Section kind="about-math" labelledBy="math-heading" tone="white">
          <h2 className="headline" id="math-heading">
            We&apos;re changing the math.
          </h2>
          <p className="body-copy about-math__lead">
            <span className="italic">
              No pinkwashing. No assumptions. Just data-driven fairness.
            </span>
            <br />
            Whether you&apos;re an employer looking to lead in health equity or
            a woman ready to take control of her lifetime expenses—the era of
            &quot;just paying&quot; is over.
          </p>
          <div className="feature-grid">
            <FeatureCard card={aboutMathFeatures[0]}>
              <ExpenseOrbit tone="brand" />
            </FeatureCard>
            <FeatureCard card={aboutMathFeatures[1]} />
            <FeatureCard card={aboutMathFeatures[2]}>
              <GapActionVisual />
            </FeatureCard>
          </div>
        </Section>

        <Section kind="team-section" labelledBy="team-heading" tone="light">
          <h2 className="headline" id="team-heading">
            Meet the team
          </h2>
          <TeamGrid members={teamMembers} />
        </Section>

        <CTASection
          artwork={
            <img
              alt=""
              aria-hidden="true"
              className="cta-section__art"
              src={aboutCtaScribble}
            />
          }
          text="Join thousands of women making financial fairness possible."
          title="Let's close the gap"
        />
      </main>
      <Footer />
    </div>
  );
}
