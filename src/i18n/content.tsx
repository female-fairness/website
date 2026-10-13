import type { ReactNode } from 'react';

import type { Locale } from './routing';

interface HeaderCopy {
  homeAriaLabel: string;
  navAriaLabel: string;
  about: string;
  downloadApp: string;
  languageAriaLabel: string;
  switchToEnglish: string;
  switchToDanish: string;
}

interface FooterCopy {
  tagline: string;
  address: ReactNode;
  linksAriaLabel: string;
  contact: string;
}

interface SharedCopy {
  metaTitle: string;
  metaDescription: string;
  header: HeaderCopy;
  footer: FooterCopy;
}

interface HomeCopy {
  heroLead: ReactNode;
  heroTitle: ReactNode;
  stats: ReactNode[];
  statsHeadline: ReactNode;
  changeTitle: ReactNode;
  changeText: ReactNode;
  productTitle: string;
  productText: ReactNode;
  informedTitle: ReactNode;
  informedText: string;
  communityTitle: string;
  impactTitle: string;
  ctaTitle: string;
  ctaText: string;
  homePhoneAlt: string;
  articlesPhoneAlt: string;
}

interface AboutCopy {
  heroLead: string;
  heroTitle: string;
  storyTitle: string;
  storyBody: ReactNode;
  mathTitle: string;
  mathLead: ReactNode;
  teamTitle: string;
  ctaTitle: string;
  ctaText: string;
}

interface MerchCopy {
  heroLead: string;
  heroTitle: string;
  productsTitle: string;
  buyLabel: string;
  colorLabel: string;
  sizesLabel: string;
  frontLabel: string;
  backLabel: string;
  shippingTitle: string;
  shippingBody: ReactNode;
  ctaTitle: string;
  ctaText: string;
}

export interface IllustrationCopy {
  expenseOrbit: {
    ariaLabel: string;
    amountYearLabel: string;
    yours: string;
    expenses: string[];
    averageMan: string;
  };
  miniChart: {
    ariaLabel: string;
    title: ReactNode;
    savings: string;
    labels: {
      contraception: string;
      painkillers: string;
      other: string;
      menstrualProducts: string;
    };
  };
  miniCalendar: {
    ariaLabel: string;
    title: ReactNode;
    month: string;
    weekdays: string[];
    legend: {
      menstrual: string;
      follicular: string;
      luteal: string;
      ovulation: string;
    };
  };
  eventBanner: {
    ariaLabel: string;
    title: string;
    location: string;
    date: string;
    link: string;
  };
  gapAction: {
    ariaLabel: string;
    title: ReactNode;
    intro: string;
    tiles: Array<{
      label: string;
      copy: string;
      active?: boolean;
    }>;
  };
}

export interface LocaleContent {
  shared: SharedCopy;
  home: HomeCopy;
  about: AboutCopy;
  merch: MerchCopy;
  illustrations: IllustrationCopy;
}

export const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    shared: {
      metaTitle: 'Female Fairness',
      metaDescription:
        'Female Fairness closes the hidden health cost gap with transparent tools, data, and community.',
      header: {
        homeAriaLabel: 'Female Fairness home',
        navAriaLabel: 'Main navigation',
        about: 'About',
        downloadApp: 'Download app',
        languageAriaLabel: 'Language',
        switchToEnglish: 'Switch to English',
        switchToDanish: 'Skift til dansk',
      },
      footer: {
        tagline: 'Where equality becomes action.',
        address: (
          <>
            Address
            <br />
            Company number
          </>
        ),
        linksAriaLabel: 'Social and contact links',
        contact: 'Contact us',
      },
    },
    home: {
      heroLead: (
        <span className="italic">What if you could have that money back?</span>
      ),
      heroTitle: (
        <>
          Women spend <span className="no-break">1-2M</span> dkk more on health
          over a lifetime compared to men.
        </>
      ),
      stats: [
        <>
          In Denmark, women are diagnosed{' '}
          <span className="italic">4 years later than men.</span>
        </>,
        <>
          <span className="italic">1 in 4 women</span> struggle to afford
          menstrual products.
        </>,
        <>
          Women <span className="italic">lose 30-50 workdays</span> on average
          due to pregnancy appointments, nausea and complications.
        </>,
      ],
      statsHeadline: (
        <>
          It&apos;s not a choice.
          <br />
          It&apos;s biology and lack of support.
        </>
      ),
      changeTitle: (
        <>
          We want to
          <br />
          change that.
        </>
      ),
      changeText: (
        <>
          Female health shouldn&apos;t be a luxury,{' '}
          <span className="italic">it should be a right.</span>
          <br />
          We want to give women clarity over their hidden health expenses. With
          our community and tools, we turn financial pain into empowerment with
          one click.
        </>
      ),
      productTitle: 'Your health, your numbers, your power',
      productText: (
        <>
          Track, compare, and understand your real health costs - from period to
          menopause.{' '}
          <span className="italic">
            Get clarity, control, and fairness in one click.
          </span>
        </>
      ),
      informedTitle: (
        <>
          Get informed.
          <br />
          Get empowered.
        </>
      ),
      informedText:
        "We cannot take action without clear information on the gender gap. On our article section, you can read transparent and actionable data on the gender health gap, women's health discoveries, finances, and more.",
      communityTitle: 'Join our community',
      impactTitle: 'Real women, real impact',
      ctaTitle: 'Ready to close the gap?',
      ctaText:
        "Join us in creating a world where health costs don't discriminate. Where transparency replaces invisibility.",
      homePhoneAlt: 'Female Fairness mobile app screen',
      articlesPhoneAlt: 'Female Fairness article shown on a mobile phone',
    },
    about: {
      heroLead:
        "87% of women want a fair financial overview, but they don't have a tool. So we decided to create that.",
      heroTitle: 'We exist to close the hidden health cost gap.',
      storyTitle: "Inequality shouldn't be a personal monthly expense.",
      storyBody: (
        <>
          Women spend more on pharmacy aisles, specialist waiting rooms, and
          lost career hours compared to men. That is called the &quot;Gender
          Health-Wealth Gap.&quot; For decades, we&apos;ve been told to
          &quot;just pay it.&quot; We&apos;ve treated systemic inequality as a
          personal monthly expense.
          <br />
          <br />
          If we think about how hormonal contraception was invented, it&apos;s
          clear: we are the ones being pushed to take in medication, change our
          natural cycles and have all the symptoms as a consequence to that.
          Those collateral effects and extra health expenses aren&apos;t
          accounted for. But how much more is it that we spend? Why do women die
          more of cardiac disease if they are less affected by it than men?
          Where are the actual numbers? That information isn&apos;t out there,
          and we didn&apos;t have yet a way to measure the individual expenses
          for each woman.
          <br />
          <br />
          That&apos;s where Female Fairness was born, as a solution to the
          Gender Health-Wealth Gap problem.
          <br />
          We aren&apos;t just another health brand. We are a Femtech-Fintech
          powerhouse dedicated to making the invisible, visible.
        </>
      ),
      mathTitle: "We're changing the math.",
      mathLead: (
        <>
          <span className="italic">
            No pinkwashing. No assumptions. Just data-driven fairness.
          </span>
          <br />
          Whether you&apos;re an employer looking to lead in health equity or a
          woman ready to take control of her lifetime expenses-the era of
          &quot;just paying&quot; is over.
        </>
      ),
      teamTitle: 'Meet the team',
      ctaTitle: "Let's close the gap",
      ctaText: 'Join thousands of women making financial fairness possible.',
    },
    merch: {
      heroLead:
        'Organic cotton, printed front and back, and every purchase supports the work of making the invisible visible.',
      heroTitle: 'Wear the message.',
      productsTitle: 'The collection',
      buyLabel: 'Buy',
      colorLabel: 'Colour',
      sizesLabel: 'Sizes',
      frontLabel: 'Front',
      backLabel: 'Back',
      shippingTitle: 'Packed and posted by us',
      shippingBody: (
        <>
          We pack and send every order ourselves from Copenhagen. Checkout is
          handled securely by Stripe, and you will get a confirmation by email
          as soon as your order is on its way.
          <br />
          <br />
          Questions about sizes, delivery, or anything else? Write to us at
          maria@femalefairness.org.
        </>
      ),
      ctaTitle: 'Fairness never goes out of style',
      ctaText: 'Track the gap in the app while you wear the message.',
    },
    illustrations: {
      expenseOrbit: {
        ariaLabel: 'Annual health cost comparison',
        amountYearLabel: 'kr. /year',
        yours: 'Yours',
        expenses: [
          'Menstrual products',
          'Fertility',
          'Health diagnosis',
          'Painkillers',
          'Contraception',
          'Hormones',
        ],
        averageMan: 'An average man',
      },
      miniChart: {
        ariaLabel: 'Monthly spending chart mockup',
        title: (
          <>
            Monthly <span className="italic">spending</span>
          </>
        ),
        savings: 'Potential savings: 150 kr.',
        labels: {
          contraception: 'Contraception',
          painkillers: 'Painkillers',
          other: 'Other',
          menstrualProducts: 'Menstrual products',
        },
      },
      miniCalendar: {
        ariaLabel: 'Health tracking calendar mockup',
        title: (
          <>
            Cycle <span className="italic">tracker</span>
          </>
        ),
        month: 'March',
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        legend: {
          menstrual: 'Menstrual phase',
          follicular: 'Follicular phase',
          luteal: 'Luteal phase',
          ovulation: 'Ovulation phase',
        },
      },
      eventBanner: {
        ariaLabel: 'Event banner mockup',
        title: "The financial impact of women's life phases",
        location: 'Copenhagen',
        date: 'March 22',
        link: 'Read more & sign up in link',
      },
      gapAction: {
        ariaLabel: 'Filling the gap rewards mockup',
        title: (
          <>
            Filling <span className="italic">the gap</span>
          </>
        ),
        intro:
          "We're working on ways to help you save money with health expenses.",
        tiles: [
          {
            label: 'Build with us',
            copy: "You're among the first shaping a new financial system for women",
            active: true,
          },
          {
            label: 'Coming soon',
            copy: 'Discounts on recurring health products.',
          },
          {
            label: 'Coming soon',
            copy: 'Partnerships with local pharmacies for lower prices on medication.',
          },
          {
            label: 'Coming soon',
            copy: 'Fill out a survey on female health, we give you money for it.',
          },
        ],
      },
    },
  },
  da: {
    shared: {
      metaTitle: 'Female Fairness',
      metaDescription:
        'Female Fairness gør kvinders skjulte sundhedsudgifter synlige. Med viden, værktøjer og fællesskab arbejder vi for økonomisk ligestilling.',
      header: {
        homeAriaLabel: 'Female Fairness – forside',
        navAriaLabel: 'Hovednavigation',
        about: 'Om os',
        downloadApp: 'Hent appen',
        languageAriaLabel: 'Sprog',
        switchToEnglish: 'Switch to English',
        switchToDanish: 'Skift til dansk',
      },
      footer: {
        tagline: 'Her bliver ligestilling til handling.',
        address: (
          <>
            Adresse
            <br />
            CVR-nummer
          </>
        ),
        linksAriaLabel: 'Sociale medier og kontaktlinks',
        contact: 'Kontakt os',
      },
    },
    home: {
      heroLead: (
        <span className="italic">Hvad hvis du kunne få pengene tilbage?</span>
      ),
      heroTitle: (
        <>
          Kvinder bruger <span className="no-break">1–2 mio.</span> kr. mere på
          sundhed i løbet af livet end mænd.
        </>
      ),
      stats: [
        <>
          I Danmark bliver kvinder diagnosticeret{' '}
          <span className="italic">4 år senere end mænd.</span>
        </>,
        <>
          <span className="italic">1 ud af 4 kvinder</span> har svært ved at finde
          råd til menstruationsprodukter.
        </>,
        <>
          Kvinder <span className="italic">mister i gennemsnit 30–50 arbejdsdage</span>{' '}
          på grund af graviditetsundersøgelser, kvalme og komplikationer.
        </>,
      ],
      statsHeadline: (
        <>
          Det er ikke et valg.
          <br />
          Det handler om biologi og manglende støtte.
        </>
      ),
      changeTitle: (
        <>
          Det vil vi
          <br />
          ændre.
        </>
      ),
      changeText: (
        <>
          Kvinders sundhed skal ikke være en luksus –{' '}
          <span className="italic">men en rettighed.</span>
          <br />
          Vi gør dine skjulte sundhedsudgifter synlige. Med vores værktøjer og
          fællesskab får du overblik og bedre mulighed for at gøre noget ved
          de udgifter, der belaster din økonomi.
        </>
      ),
      productTitle: 'Din sundhed, dine tal, din styrke',
      productText: (
        <>
          Hold styr på dine sundhedsudgifter, sammenlign dem, og forstå, hvad
          din sundhed koster – fra
          menstruation til overgangsalder.{' '}
          <span className="italic">
            Få overblik, og tag det første skridt mod mere økonomisk lighed.
          </span>
        </>
      ),
      informedTitle: (
        <>
          Bliv klogere.
          <br />
          Stå stærkere.
        </>
      ),
      informedText:
        'Forandring begynder med viden. I vores artikler sætter vi tal på uligheden mellem kvinder og mænd og gør dig klogere på kvinders sundhed, ny forskning og økonomi. Viden, du kan bruge til at stå stærkere.',
      communityTitle: 'Bliv en del af fællesskabet',
      impactTitle: 'Kvinders erfaringer. Mærkbar forskel.',
      ctaTitle: 'Klar til at mindske uligheden?',
      ctaText:
        'Vær med til at gøre de skjulte sundhedsudgifter synlige og skabe en verden, hvor regningen ikke afhænger af dit køn.',
      homePhoneAlt: 'Skærmbillede fra Female Fairness-appen',
      articlesPhoneAlt: 'Artikel fra Female Fairness vist på en mobiltelefon',
    },
    about: {
      heroLead:
        '87 % af kvinder ønsker et klart overblik over deres økonomi, men mangler et værktøj, der kan give dem det. Derfor skabte vi Female Fairness.',
      heroTitle:
        'Vi vil gøre op med den skjulte ulighed i kvinders og mænds sundhedsudgifter.',
      storyTitle: 'Ulighed skal ikke være en fast post i dit budget.',
      storyBody: (
        <>
          Kvinder betaler mere end mænd – på apoteket, hos speciallægen og i
          form af tabt arbejdstid. Det kaldes &quot;Gender Health-Wealth
          Gap&quot; – uligheden mellem kønnene i sundhed og økonomi. I årtier har
          vi fået at vide, at vi bare må betale. På den måde er strukturel
          ulighed blevet til en regning, den enkelte kvinde selv må stå med.
          <br />
          <br />
          Hormonel prævention er et tydeligt eksempel. Det er os, der
          forventes at tage medicin, ændre vores naturlige cyklus og leve med
          bivirkningerne. Men hverken bivirkningerne eller de ekstra
          sundhedsudgifter bliver regnet med. Hvor meget mere betaler vi egentlig?
          Hvorfor dør kvinder oftere af hjertesygdomme, når de rammes sjældnere
          end mænd? Hvor er tallene? Den viden er svær at finde, og vi
          manglede et værktøj, der kunne give den enkelte kvinde overblik over
          sine udgifter.
          <br />
          <br />
          Derfor skabte vi Female Fairness – for at gøre noget ved uligheden
          mellem kønnene i sundhed og økonomi.
          <br />
          Vi forener teknologi til kvinders sundhed med økonomiske værktøjer.
          Sammen gør vi de usynlige udgifter synlige.
        </>
      ),
      mathTitle: 'Vi ændrer regnestykket.',
      mathLead: (
        <>
          <span className="italic">
            Ingen pinkwashing. Intet gætværk. Ligestilling med afsæt i fakta.
          </span>
          <br />
          Som arbejdsgiver kan du gå forrest i arbejdet for lighed i sundhed.
          Som kvinde kan du tage styringen over dine sundhedsudgifter gennem
          livet. Sammen gør vi op med tanken om, at kvinder bare må betale.
        </>
      ),
      teamTitle: 'Mød teamet',
      ctaTitle: 'Lad os mindske uligheden',
      ctaText: 'Vær med, når tusindvis af kvinder går sammen om at skabe økonomisk ligestilling.',
    },
    merch: {
      heroLead:
        'Økologisk bomuld med tryk på både for- og bagsiden. Med dit køb hjælper du os med at gøre de skjulte sundhedsudgifter synlige.',
      heroTitle: 'Bær budskabet.',
      productsTitle: 'Kollektionen',
      buyLabel: 'Køb',
      colorLabel: 'Farve',
      sizesLabel: 'Størrelser',
      frontLabel: 'Forside',
      backLabel: 'Bagside',
      shippingTitle: 'Pakket og sendt af os',
      shippingBody: (
        <>
          Vi pakker selv din ordre og sender den fra København. Du betaler
          sikkert via Stripe og får en mail, så snart din pakke er på vej.
          <br />
          <br />
          Har du spørgsmål om størrelser, levering eller andet? Skriv til os
          på maria@femalefairness.org.
        </>
      ),
      ctaTitle: 'Ligestilling går aldrig af mode',
      ctaText: 'Bær budskabet, og få overblik over dine sundhedsudgifter i appen.',
    },
    illustrations: {
      expenseOrbit: {
        ariaLabel: 'Sammenligning af årlige sundhedsudgifter',
        amountYearLabel: 'kr. om året',
        yours: 'Dine udgifter',
        expenses: [
          'Menstruationsprodukter',
          'Fertilitet',
          'Udredning',
          'Smertestillende',
          'Prævention',
          'Hormoner',
        ],
        averageMan: 'En gennemsnitlig mand',
      },
      miniChart: {
        ariaLabel: 'Eksempel på en oversigt over månedlige udgifter',
        title: (
          <>
            Månedlige <span className="italic">udgifter</span>
          </>
        ),
        savings: 'Mulig besparelse: 150 kr.',
        labels: {
          contraception: 'Prævention',
          painkillers: 'Smertestillende',
          other: 'Andet',
          menstrualProducts: 'Menstruationsprodukter',
        },
      },
      miniCalendar: {
        ariaLabel: 'Eksempel på en cykluskalender',
        title: (
          <>
            Følg din <span className="italic">cyklus</span>
          </>
        ),
        month: 'Marts',
        weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        legend: {
          menstrual: 'Menstruationsfase',
          follicular: 'Follikelfase',
          luteal: 'Lutealfase',
          ovulation: 'Ægløsning',
        },
      },
      eventBanner: {
        ariaLabel: 'Eksempel på et banner for et arrangement',
        title: 'Sådan påvirker kvinders livsfaser økonomien',
        location: 'København',
        date: '22. marts',
        link: 'Læs mere, og tilmeld dig via linket',
      },
      gapAction: {
        ariaLabel: 'Eksempel på fordele, der mindsker uligheden i sundhedsudgifter',
        title: (
          <>
            Mindsk <span className="italic">uligheden</span>
          </>
        ),
        intro:
          'Vi arbejder på løsninger, der kan sænke dine sundhedsudgifter.',
        tiles: [
          {
            label: 'Vær med fra starten',
            copy: 'Vær blandt de første til at forme et nyt økonomisk system for kvinder.',
            active: true,
          },
          {
            label: 'Kommer snart',
            copy: 'Rabat på de sundhedsprodukter, du køber igen og igen.',
          },
          {
            label: 'Kommer snart',
            copy: 'Lavere medicinpriser gennem samarbejde med lokale apoteker.',
          },
          {
            label: 'Kommer snart',
            copy: 'Få betaling for at besvare et spørgeskema om kvinders sundhed.',
          },
        ],
      },
    },
  },
};
