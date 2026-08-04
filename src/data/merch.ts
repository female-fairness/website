import capNavyFront from '../assets/merch/cap-navy-front.jpg';
import printCapWordmarkWhite from '../assets/merch/print-cap-wordmark-white.jpg';
import printKidsWordmark from '../assets/merch/print-kids-wordmark.jpg';
import printScribble from '../assets/merch/print-scribble.jpg';
import printSloganFairFromTheStart from '../assets/merch/print-slogan-fair-from-the-start.jpg';
import printSloganNeverOutOfStyle from '../assets/merch/print-slogan-never-out-of-style.jpg';
import printWordmark from '../assets/merch/print-wordmark.jpg';
import teeAdultSloganBack from '../assets/merch/tee-adult-slogan-back.jpg';
import teeAdultSloganFront from '../assets/merch/tee-adult-slogan-front.jpg';
import teeAdultWordmarkBack from '../assets/merch/tee-adult-wordmark-back.jpg';
import teeAdultWordmarkFront from '../assets/merch/tee-adult-wordmark-front.jpg';
import teeKidsSloganBack from '../assets/merch/tee-kids-slogan-back.jpg';
import teeKidsWordmarkFront from '../assets/merch/tee-kids-wordmark-front.jpg';
import type { Locale } from '../i18n/routing';

export interface MerchImage {
  src: string;
  alt: string;
}

export interface MerchProduct {
  /** Spreadshirt article number from order 300747805-1100717865. */
  sku: string;
  name: string;
  description: string;
  /** Garment colour as printed on the order confirmation. */
  color: string;
  /** Sizes available for this garment. */
  sizes: string[];
  /** Price per unit in DKK, incl. VAT. */
  priceDkk: number;
  images: {
    front: MerchImage;
    back?: MerchImage;
    /** Close-ups of the artwork itself. */
    prints: MerchImage[];
  };
}

const products: Record<Locale, MerchProduct[]> = {
  en: [
    {
      sku: '26019547986700',
      name: "Premium organic T-shirt – Scribble",
      description:
        'Premium organic cotton tee with the Female Fairness wordmark on the chest and the scribble mark printed large across the back. Direct digital print, front and back.',
      color: 'White',
      sizes: ['S', 'M'],
      priceDkk: 267,
      images: {
        front: {
          src: teeAdultWordmarkFront,
          alt: 'White organic T-shirt with the Female Fairness wordmark across the chest',
        },
        back: {
          src: teeAdultWordmarkBack,
          alt: 'Back of the white T-shirt with the large black scribble mark',
        },
        prints: [
          { src: printWordmark, alt: 'Close-up of the Female Fairness wordmark print' },
          { src: printScribble, alt: 'Close-up of the black scribble mark print' },
        ],
      },
    },
    {
      sku: '26019695056151',
      name: 'Premium organic T-shirt – Never out of style',
      description:
        'The same premium organic cotton tee, with the wordmark on the chest and “Fairness never goes out of style” above the scribble mark on the back. Direct digital print, front and back.',
      color: 'White',
      sizes: ['S', 'M', 'L'],
      priceDkk: 267,
      images: {
        front: {
          src: teeAdultSloganFront,
          alt: 'White organic T-shirt with the Female Fairness wordmark across the chest',
        },
        back: {
          src: teeAdultSloganBack,
          alt: 'Back of the white T-shirt reading “Fairness never goes out of style” above the scribble mark',
        },
        prints: [
          { src: printWordmark, alt: 'Close-up of the Female Fairness wordmark print' },
          {
            src: printSloganNeverOutOfStyle,
            alt: 'Close-up of the “Fairness never goes out of style” print',
          },
        ],
      },
    },
    {
      sku: '26019749901583',
      name: 'Organic baseball cap',
      description:
        'Navy organic cotton baseball cap with the Female Fairness wordmark printed in white across the front. One size, direct-to-film print.',
      color: 'Navy',
      sizes: ['One size'],
      priceDkk: 189,
      images: {
        front: {
          src: capNavyFront,
          alt: 'Navy baseball cap with the Female Fairness wordmark in white',
        },
        prints: [
          {
            src: printCapWordmarkWhite,
            alt: 'Close-up of the white Female Fairness wordmark print on navy',
          },
        ],
      },
    },
    {
      sku: '26019894207626',
      name: "Kids' T-shirt",
      description:
        'Kids’ tee from Russell with the wordmark on the chest and “Fair from the start” above the scribble mark on the back. Direct digital print, front and back.',
      color: 'White',
      sizes: ['110/116 (5–6 yrs)'],
      priceDkk: 211,
      images: {
        front: {
          src: teeKidsWordmarkFront,
          alt: "White kids' T-shirt with the Female Fairness wordmark across the chest",
        },
        back: {
          src: teeKidsSloganBack,
          alt: "Back of the white kids' T-shirt reading “Fair from the start” above the scribble mark",
        },
        prints: [
          { src: printKidsWordmark, alt: 'Close-up of the Female Fairness wordmark print' },
          {
            src: printSloganFairFromTheStart,
            alt: 'Close-up of the “Fair from the start” print',
          },
        ],
      },
    },
  ],
  da: [
    {
      sku: '26019547986700',
      name: 'Premium økologisk T-shirt – Scribble',
      description:
        'Premium økologisk T-shirt med Female Fairness-wordmarket på brystet og det store scribble-mærke trykt på ryggen. Direkte digitaltryk for og bag.',
      color: 'Hvid',
      sizes: ['S', 'M'],
      priceDkk: 267,
      images: {
        front: {
          src: teeAdultWordmarkFront,
          alt: 'Hvid økologisk T-shirt med Female Fairness-wordmarket på brystet',
        },
        back: {
          src: teeAdultWordmarkBack,
          alt: 'Ryggen af den hvide T-shirt med det store sorte scribble-mærke',
        },
        prints: [
          { src: printWordmark, alt: 'Nærbillede af Female Fairness-wordmarket' },
          { src: printScribble, alt: 'Nærbillede af det sorte scribble-mærke' },
        ],
      },
    },
    {
      sku: '26019695056151',
      name: 'Premium økologisk T-shirt – Never out of style',
      description:
        'Samme premium økologiske T-shirt med wordmarket på brystet og “Fairness never goes out of style” over scribble-mærket på ryggen. Direkte digitaltryk for og bag.',
      color: 'Hvid',
      sizes: ['S', 'M', 'L'],
      priceDkk: 267,
      images: {
        front: {
          src: teeAdultSloganFront,
          alt: 'Hvid økologisk T-shirt med Female Fairness-wordmarket på brystet',
        },
        back: {
          src: teeAdultSloganBack,
          alt: 'Ryggen af den hvide T-shirt med “Fairness never goes out of style” over scribble-mærket',
        },
        prints: [
          { src: printWordmark, alt: 'Nærbillede af Female Fairness-wordmarket' },
          {
            src: printSloganNeverOutOfStyle,
            alt: 'Nærbillede af trykket “Fairness never goes out of style”',
          },
        ],
      },
    },
    {
      sku: '26019749901583',
      name: 'Øko-baseballcap',
      description:
        'Marineblå økologisk baseballcap med Female Fairness-wordmarket trykt i hvidt på forsiden. One size, direct-to-film-tryk.',
      color: 'Marineblå',
      sizes: ['One size'],
      priceDkk: 189,
      images: {
        front: {
          src: capNavyFront,
          alt: 'Marineblå baseballcap med Female Fairness-wordmarket i hvidt',
        },
        prints: [
          {
            src: printCapWordmarkWhite,
            alt: 'Nærbillede af det hvide Female Fairness-wordmark på marineblå',
          },
        ],
      },
    },
    {
      sku: '26019894207626',
      name: 'Børne-T-shirt',
      description:
        'Børne-T-shirt fra Russell med wordmarket på brystet og “Fair from the start” over scribble-mærket på ryggen. Direkte digitaltryk for og bag.',
      color: 'Hvid',
      sizes: ['110/116 (5–6 år)'],
      priceDkk: 211,
      images: {
        front: {
          src: teeKidsWordmarkFront,
          alt: 'Hvid børne-T-shirt med Female Fairness-wordmarket på brystet',
        },
        back: {
          src: teeKidsSloganBack,
          alt: 'Ryggen af den hvide børne-T-shirt med “Fair from the start” over scribble-mærket',
        },
        prints: [
          { src: printKidsWordmark, alt: 'Nærbillede af Female Fairness-wordmarket' },
          {
            src: printSloganFairFromTheStart,
            alt: 'Nærbillede af trykket “Fair from the start”',
          },
        ],
      },
    },
  ],
};

export function getMerchProducts(locale: Locale): MerchProduct[] {
  return products[locale];
}
