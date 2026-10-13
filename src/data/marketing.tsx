import type { ReactNode } from 'react';

import aboutEye from '../assets/figma/about-eye.svg';
import articlesPhone from '../assets/figma/articles-phone.jpg';
import donationCells from '../assets/figma/donation-cells.svg';
import homePhone from '../assets/figma/home-phone.png';
import moneyStack from '../assets/figma/money-stack.svg';
import partnerBranch from '../assets/figma/partner-branch.svg';
import teamAnders from '../assets/figma/team-anders.jpg';
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
  imageVariant?: 'anders' | 'gorm' | 'maria';
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
          title: 'Følg dine sundhedsudgifter',
          body: (
            <>
              Følg din cyklus, dine symptomer, din aktivitet og dit humør.
              Lær din krop bedre at kende, og få mere overblik over din sundhed.
            </>
          ),
          tone: 'light',
        },
        {
          title: 'Hold styr på din sundhed',
          body: (
            <>
              Hold styr på din cyklus, dine symptomer, din aktivitet og dit
              humør – ét sted.
            </>
          ),
          tone: 'light',
        },
        {
          title: 'Få penge tilbage',
          body: (
            <>
              Vi arbejder på løsninger, der mindsker uligheden i
              sundhedsudgifter og giver dig nogle af pengene tilbage.
              Det skal ikke koste ekstra at have en kvindekrop.
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
          title: 'Deltag i vores arrangementer',
          body: (
            <>
              Mød andre, der vil skabe forandring.
              <br />
              Bliv en del af bevægelsen.
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
          title: 'Bliv partner',
          body: (
            <>
              Vær med til at gøre sundhedsudgifter mere retfærdige.
              Sammen med virksomheder og organisationer skaber vi
              forandring, der kan mærkes.
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
          title: 'Støt vores arbejde',
          body: (
            <>
              Hjælp kvinder i nød gennem vores donationer hvert kvartal.
              Din støtte er med til at skabe mere lighed.
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
            alt: 'Abstrakt illustration af fællesskabet bag donationerne.',
          },
        },
      ],
      aboutMathFeatures: [
        {
          title: 'Vi sætter tal på',
          body: (
            <>
              Vi sætter tal på de udgifter, kvinder står med på grund af
              deres biologi og den måde, samfundet er indrettet på.
            </>
          ),
          tone: 'deep',
        },
        {
          title: 'Vi viser sammenhængen',
          body: (
            <>
              Vi kobler den enkelte kvindes sundhedsdata til den økonomiske
              ulighed i samfundet.
            </>
          ),
          tone: 'red',
          image: {
            src: aboutEye,
            alt: 'Illustration af et øje som symbol på synlighed.',
          },
        },
        {
          title: 'Vi handler',
          body: (
            <>
              Vi udvikler værktøjer og samarbejder med virksomheder, så kvinder
              endelig bliver kompenseret, støttet og behandlet retfærdigt.
            </>
          ),
          tone: 'coral',
        },
      ],
      teamMembers: [
        {
          name: 'Maria Olsen',
          role: 'Stifter og CEO',
          bio: 'Maria stiftede Female Fairness, da hun opdagede, hvor meget kvinder bruger på sundhed uden at have overblik over udgifterne. Hun brænder for at gøre dem synlige og lette at forstå.',
          image: teamMaria,
          imageVariant: 'maria',
        },
        {
          name: 'Gorm Frederiksen',
          role: 'CTO og medstifter',
          bio: 'Gorm står for teknologien bag Female Fairness. Han bygger enkle, stabile systemer, der gør platformen nem at bruge og kan vokse med virksomheden.',
          image: teamGorm,
          imageVariant: 'gorm',
        },
        {
          name: 'Anders',
          role: 'Teknisk bidragyder',
          bio: 'Anders er med til at udvikle Female Fairness. Han bygger videre på teknologien bag platformen og sørger for, at den følger med, når platformen vokser.',
          image: teamAnders,
          imageVariant: 'anders',
        },
        {
          name: 'Marcella Fagundes',
          role: 'Branddesigner',
          bio: 'Marcella står bag Female Fairness’ visuelle identitet. Med kreativitet og blik for design skaber hun et enkelt udtryk og en oplevelse, der føles naturlig og imødekommende.',
          image: teamMarcella,
        },
      ],
      testimonials: [
        {
          quote:
            'Jeg havde aldrig tænkt over, hvor mange penge jeg brugte bare på at holde mig sund. Værktøjet åbnede mine øjne.',
          name: 'Sarah M.',
          location: 'København',
        },
        {
          quote:
            'Vi bruger så meget på sundhedsprodukter, og jeg havde aldrig forestillet mig, at jeg kunne få nogle af pengene tilbage! Wow!',
          name: 'Maya K.',
          location: 'Aarhus',
        },
        {
          quote:
            'Jeg har aldrig før fået uligheden i sundhed mellem kvinder og mænd forklaret så klart. Det åbnede mine øjne.',
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
        role: 'Technical Contributor',
        bio: 'Anders contributes to the development of Female Fairness, helping shape and support the technology behind the platform as it grows.',
        image: teamAnders,
        imageVariant: 'anders',
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
