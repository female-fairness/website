import type { ReactNode } from 'react';

import aboutEye from '../assets/figma/about-eye.svg';
import articlesPhone from '../assets/figma/articles-phone.jpg';
import donationCells from '../assets/figma/donation-cells.svg';
import homePhone from '../assets/figma/home-phone.png';
import moneyStack from '../assets/figma/money-stack.svg';
import partnerBranch from '../assets/figma/partner-branch.svg';
import teamGorm from '../assets/figma/team-gorm.jpg';
import teamMarcella from '../assets/figma/team-marcella.jpg';
import teamMaria from '../assets/figma/team-maria.jpg';
import type { Locale } from '../i18n/routing';

export interface FeatureCardData {
  title: string;
  body: ReactNode;
  tone: 'light' | 'brand' | 'blue' | 'purple' | 'deep' | 'red' | 'coral';
  action?: {
    label: string;
    href: string;
    disabled?: boolean;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  imageVariant?: 'gorm' | 'maria';
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const homeImages = {
  homePhone,
  articlesPhone,
  moneyStack,
  partnerBranch,
  donationCells,
};

export const aboutImages = {
  aboutEye,
};

interface MarketingLinks {
  events: string;
  partner: string;
  donation: string;
}

interface MarketingContent {
  productFeatures: FeatureCardData[];
  communityFeatures: FeatureCardData[];
  aboutMathFeatures: FeatureCardData[];
  teamMembers: TeamMember[];
  testimonials: Testimonial[];
}

export function getMarketingContent(
  locale: Locale,
  links: MarketingLinks,
): MarketingContent {
  if (locale === 'da') {
    return {
      productFeatures: [
        {
          title: 'Track dine sundhedsudgifter',
          body: (
            <>
              Track din menstruationscyklus, symptomer, fysisk aktivitet,
              humørbalance og mere. Tag kontrol over din sundhed, og få hurtigere
              klarhed.
            </>
          ),
          tone: 'light',
        },
        {
          title: 'Track dine sundhedsdata',
          body: (
            <>
              Track din menstruationscyklus, symptomer, fysisk aktivitet,
              humørbalance og mere.
            </>
          ),
          tone: 'light',
        },
        {
          title: 'Få penge tilbage',
          body: (
            <>
              Vi arbejder på måder at lukke kønsgabet og give dig noget af
              pengene tilbage. Du bør ikke bruge mere på din sundhed, bare fordi
              du har en kvindekrop.
            </>
          ),
          tone: 'blue',
          image: {
            src: moneyStack,
            alt: 'Illustreret stak penge.',
          },
        },
      ],
      communityFeatures: [
        {
          title: 'Deltag i vores events',
          body: (
            <>
              Mød en ny bølge af forandring.
              <br />
              Oplev bevægelsen på tæt hold.
            </>
          ),
          tone: 'light',
          action: {
            label: 'Kommer snart',
            href: links.events,
            disabled: true,
          },
        },
        {
          title: 'Bliv vores partner',
          body: (
            <>
              Samarbejd med os om at gøre sundhedsøkonomi fair. Bliv en del af
              de virksomheder og organisationer, der skaber reel forandring.
            </>
          ),
          tone: 'brand',
          action: {
            label: 'Bliv partner',
            href: links.partner,
          },
          image: {
            src: partnerBranch,
            alt: 'Abstrakt forgrenet illustration.',
          },
        },
        {
          title: 'Doner til vores økosystem',
          body: (
            <>
              Støt kvinder i nød gennem vores kvartalsvise donationer. Gør
              fairness mulig.
            </>
          ),
          tone: 'purple',
          action: {
            label: 'Kommer snart',
            href: links.donation,
            disabled: true,
          },
          image: {
            src: donationCells,
            alt: 'Abstrakt illustration af et donationsøkosystem.',
          },
        },
      ],
      aboutMathFeatures: [
        {
          title: 'Vi kvantificerer',
          body: (
            <>
              Vi sætter hårde tal på de biologiske og samfundsmæssige
              omkostninger, kvinder bærer.
            </>
          ),
          tone: 'deep',
        },
        {
          title: 'Vi forbinder',
          body: (
            <>
              Vi forbinder personlige sundhedsdata med strukturel økonomisk
              ulighed.
            </>
          ),
          tone: 'red',
          image: {
            src: aboutEye,
            alt: 'Øjeillustration, der repræsenterer synlighed.',
          },
        },
        {
          title: 'Vi handler',
          body: (
            <>
              Vi bygger værktøjer og B2B-partnerskaber, så kvinder endelig
              bliver kompenseret, støttet og behandlet fair.
            </>
          ),
          tone: 'coral',
        },
      ],
      teamMembers: [
        {
          name: 'Maria Olsen',
          role: 'Stifter og CEO',
          bio: 'Maria startede Female Fairness efter at have indset, hvor meget kvinder bruger på sundhed uden nogensinde at have et klart overblik. Hun er drevet af at gøre de udgifter synlige og nemme at forstå.',
          image: teamMaria,
          imageVariant: 'maria',
        },
        {
          name: 'Gorm Frederiksen',
          role: 'CTO & medstifter',
          bio: 'Gorm leder teknologien bag Female Fairness. Han fokuserer på at bygge enkle og stabile systemer, der gør produktet nemt at bruge og klar til at skalere.',
          image: teamGorm,
          imageVariant: 'gorm',
        },
        {
          name: 'Anders',
          role: 'Softwareudvikler',
          bio: 'Hjælper med softwaresiden af tingene.',
        },
        {
          name: 'Marcella Fagundes',
          role: 'Branddesigner',
          bio: 'Marcella er ansvarlig for Female Fairness visuelle identitet. Hun forener design og kreativitet for at skabe en ren, intuitiv og menneskelig oplevelse.',
          image: teamMarcella,
        },
      ],
      testimonials: [
        {
          quote:
            'Jeg havde aldrig indset, hvor meget jeg brugte bare på at holde mig sund. Værktøjet åbnede mine øjne.',
          name: 'Sarah M.',
          location: 'København',
        },
        {
          quote:
            'Vi bruger så meget på sundhedsprodukter, og jeg havde aldrig tænkt, at jeg kunne få noget af det tilbage! Wow',
          name: 'Maya K.',
          location: 'Aarhus',
        },
        {
          quote:
            'Jeg har aldrig haft så tydelig information om kønssundhedsgabet. Det åbnede mine øjne.',
          name: 'Anne H.',
          location: 'København',
        },
      ],
    };
  }

  return {
    productFeatures: [
      {
        title: 'Track your health expenses',
        body: (
          <>
            Track your menstrual cycle, symptoms, physical activity, mood
            balance, and more. Take control of your health and speed up
            diagnosis.
          </>
        ),
        tone: 'light',
      },
      {
        title: 'Track your health data',
        body: (
          <>
            Track your menstrual cycle, symptoms, physical activity, mood
            balance, and more.
          </>
        ),
        tone: 'light',
      },
      {
        title: 'Get paid back',
        body: (
          <>
            We are working on ways to fill the gender gap and get you some of
            the money back. You shouldn&apos;t spend more on your health simply
            for having a female body.
          </>
        ),
        tone: 'blue',
        image: {
          src: moneyStack,
          alt: 'Illustrated stack of money.',
        },
      },
    ],
    communityFeatures: [
      {
        title: 'Join our events',
        body: (
          <>
            Connect with a new wave of change.
            <br />
            Experience the movement firsthand.
          </>
        ),
        tone: 'light',
        action: {
          label: 'Coming soon',
          href: links.events,
          disabled: true,
        },
      },
      {
        title: 'Be our partner',
        body: (
          <>
            Collaborate to make health finance fair. Join companies and
            organizations creating real change.
          </>
        ),
        tone: 'brand',
        action: {
          label: 'Partner up',
          href: links.partner,
        },
        image: {
          src: partnerBranch,
          alt: 'Abstract branching illustration.',
        },
      },
      {
        title: 'Donate to our ecosystem',
        body: (
          <>
            Support women in need through our quarterly donations. Make fairness
            possible.
          </>
        ),
        tone: 'purple',
        action: {
          label: 'Coming soon',
          href: links.donation,
          disabled: true,
        },
        image: {
          src: donationCells,
          alt: 'Abstract donation ecosystem illustration.',
        },
      },
    ],
    aboutMathFeatures: [
      {
        title: 'We quantify',
        body: (
          <>
            We put hard numbers on the biological and societal costs women
            carry.
          </>
        ),
        tone: 'deep',
      },
      {
        title: 'We connect',
        body: (
          <>We link personal health data to structural financial inequality.</>
        ),
        tone: 'red',
        image: {
          src: aboutEye,
          alt: 'Eye illustration representing visibility.',
        },
      },
      {
        title: 'We take action',
        body: (
          <>
            We build tools and B2B partnerships to ensure women are finally
            compensated, supported, and treated fairly.
          </>
        ),
        tone: 'coral',
      },
    ],
    teamMembers: [
      {
        name: 'Maria Olsen',
        role: 'Founder and CEO',
        bio: 'Maria started Female Fairness after realizing how much women spend on health without ever having a clear overview. She is driven to make those costs visible and easy to understand.',
        image: teamMaria,
        imageVariant: 'maria',
      },
      {
        name: 'Gorm Frederiksen',
        role: 'CTO & Co-founder',
        bio: 'Gorm leads the technology behind Female Fairness. He focuses on building simple, reliable systems that make the product easy to use and ready to scale.',
        image: teamGorm,
        imageVariant: 'gorm',
      },
      {
        name: 'Anders',
        role: 'Software developer',
        bio: 'Helps out with the software side of things',
      },
      {
        name: 'Marcella Fagundes',
        role: 'Brand Designer',
        bio: 'Marcella is responsible for the visual identity of Female Fairness. She brings together design and creativity to create a clean, intuitive, and human experience.',
        image: teamMarcella,
      },
    ],
    testimonials: [
      {
        quote:
          'I never realized how much I spent just to stay healthy. This tool opened my eyes.',
        name: 'Sarah M.',
        location: 'Copenhagen',
      },
      {
        quote:
          "We spend so much on health products, I never thought I'd get paid some of that money back! Wow",
        name: 'Maya K.',
        location: 'Aarhus',
      },
      {
        quote:
          'I never had such clear information on gender health gap. This opened my eyes.',
        name: 'Anne H.',
        location: 'Copenhagen',
      },
    ],
  };
}
