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

export const productFeatures: FeatureCardData[] = [
  {
    title: 'Track your health expenses',
    body: (
      <>
        Track your menstrual cycle, symptoms, physical activity, mood balance,
        and more. Take control of your health and speed up diagnosis.
      </>
    ),
    tone: 'light',
  },
  {
    title: 'Track your health data',
    body: (
      <>
        Track your menstrual cycle, symptoms, physical activity, mood balance,
        and more.
      </>
    ),
    tone: 'light',
  },
  {
    title: 'Get paid back',
    body: (
      <>
        We are working on ways to fill the gender gap and get you some of the
        money back. You shouldn&apos;t spend more on your health simply for
        having a female body.
      </>
    ),
    tone: 'blue',
    image: {
      src: moneyStack,
      alt: 'Illustrated stack of money.',
    },
  },
];

export const communityFeatures = (links: {
  events: string;
  partner: string;
  donation: string;
}): FeatureCardData[] => [
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
      label: 'See events',
      href: links.events,
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
];

export const aboutMathFeatures: FeatureCardData[] = [
  {
    title: 'We quantify',
    body: (
      <>
        We put hard numbers on the biological and societal costs women carry.
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
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Maria Olsen',
    role: 'Co-founder & CEO',
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
];

export const testimonials: Testimonial[] = [
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
];
