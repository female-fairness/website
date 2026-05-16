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
        'Female Fairness lukker det skjulte sundhedsomkostningsgab med gennemsigtige værktøjer, data og fællesskab.',
      header: {
        homeAriaLabel: 'Female Fairness forside',
        navAriaLabel: 'Hovednavigation',
        about: 'Om os',
        downloadApp: 'Download app',
        languageAriaLabel: 'Sprog',
        switchToEnglish: 'Switch to English',
        switchToDanish: 'Skift til dansk',
      },
      footer: {
        tagline: 'Hvor lighed bliver til handling.',
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
          Kvinder bruger <span className="no-break">1-2M</span> kr. mere på
          sundhed gennem livet sammenlignet med mænd.
        </>
      ),
      stats: [
        <>
          I Danmark bliver kvinder diagnosticeret{' '}
          <span className="italic">4 år senere end mænd.</span>
        </>,
        <>
          <span className="italic">1 ud af 4 kvinder</span> har svært ved at få
          råd til menstruationsprodukter.
        </>,
        <>
          Kvinder <span className="italic">mister i gennemsnit 30-50 arbejdsdage</span>{' '}
          på grund af graviditetsaftaler, kvalme og komplikationer.
        </>,
      ],
      statsHeadline: (
        <>
          Det er ikke et valg.
          <br />
          Det er biologi og mangel på støtte.
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
          Kvinders sundhed bør ikke være en luksus,{' '}
          <span className="italic">det bør være en ret.</span>
          <br />
          Vi vil give kvinder klarhed over deres skjulte sundhedsudgifter. Med
          vores fællesskab og værktøjer forvandler vi økonomisk smerte til
          handlekraft med ét klik.
        </>
      ),
      productTitle: 'Din sundhed, dine tal, din styrke',
      productText: (
        <>
          Track, sammenlign og forstå dine reelle sundhedsomkostninger - fra
          menstruation til overgangsalder.{' '}
          <span className="italic">
            Få klarhed, kontrol og fairness med ét klik.
          </span>
        </>
      ),
      informedTitle: (
        <>
          Bliv klogere.
          <br />
          Bliv styrket.
        </>
      ),
      informedText:
        'Vi kan ikke handle uden klar information om kønsgabet. I vores artikelsektion kan du læse gennemsigtige og handlingsrettede data om kønssundhedsgabet, nye indsigter i kvinders sundhed, økonomi og mere.',
      communityTitle: 'Bliv en del af fællesskabet',
      impactTitle: 'Rigtige kvinder, reel effekt',
      ctaTitle: 'Klar til at lukke gabet?',
      ctaText:
        'Vær med til at skabe en verden, hvor sundhedsomkostninger ikke diskriminerer. Hvor gennemsigtighed erstatter usynlighed.',
      homePhoneAlt: 'Female Fairness mobilapp-skærm',
      articlesPhoneAlt: 'Female Fairness artikel vist på en mobiltelefon',
    },
    about: {
      heroLead:
        '87% af kvinder ønsker et fair økonomisk overblik, men de har ikke et værktøj. Derfor besluttede vi at skabe det.',
      heroTitle:
        'Vi findes for at lukke det skjulte gab i sundhedsomkostninger.',
      storyTitle: 'Ulighed bør ikke være en personlig månedlig udgift.',
      storyBody: (
        <>
          Kvinder bruger mere i apotekets gange, hos specialister og i tabte
          karrieretimer sammenlignet med mænd. Det kaldes &quot;Gender
          Health-Wealth Gap.&quot; I årtier har vi fået at vide, at vi bare må
          betale. Vi har behandlet systemisk ulighed som en personlig månedlig
          udgift.
          <br />
          <br />
          Hvis vi ser på, hvordan hormonel prævention blev opfundet, er det
          tydeligt: Det er os, der bliver skubbet til at tage medicin, ændre
          vores naturlige cyklusser og bære alle symptomerne som konsekvens.
          De bivirkninger og ekstra sundhedsudgifter bliver ikke regnet med.
          Men hvor meget mere bruger vi egentlig? Hvorfor dør kvinder oftere af
          hjertesygdomme, hvis de er mindre ramt af dem end mænd? Hvor er de
          faktiske tal? Den information findes ikke tydeligt, og vi havde endnu
          ikke en måde at måle de individuelle udgifter for hver kvinde.
          <br />
          <br />
          Det var her Female Fairness blev født, som en løsning på problemet
          Gender Health-Wealth Gap.
          <br />
          Vi er ikke bare endnu et sundhedsbrand. Vi er en Femtech-Fintech
          drivkraft dedikeret til at gøre det usynlige synligt.
        </>
      ),
      mathTitle: 'Vi ændrer regnestykket.',
      mathLead: (
        <>
          <span className="italic">
            Ingen pinkwashing. Ingen antagelser. Kun datadrevet fairness.
          </span>
          <br />
          Uanset om du er en arbejdsgiver, der vil gå forrest i sundhedslighed,
          eller en kvinde, der er klar til at tage kontrol over livets
          udgifter, er tiden med bare at betale forbi.
        </>
      ),
      teamTitle: 'Mød teamet',
      ctaTitle: 'Lad os lukke gabet',
      ctaText: 'Bliv en del af de tusinder af kvinder, der gør økonomisk fairness mulig.',
    },
    illustrations: {
      expenseOrbit: {
        ariaLabel: 'Sammenligning af årlige sundhedsomkostninger',
        amountYearLabel: 'kr. /år',
        yours: 'Dine',
        expenses: [
          'Menstruationsprodukter',
          'Fertilitet',
          'Sundhedsdiagnose',
          'Smertestillende',
          'Prævention',
          'Hormoner',
        ],
        averageMan: 'En gennemsnitlig mand',
      },
      miniChart: {
        ariaLabel: 'Mockup af månedlige udgifter',
        title: (
          <>
            Månedlige <span className="italic">udgifter</span>
          </>
        ),
        savings: 'Potentiel besparelse: 150 kr.',
        labels: {
          contraception: 'Prævention',
          painkillers: 'Smertestillende',
          other: 'Andet',
          menstrualProducts: 'Menstruationsprodukter',
        },
      },
      miniCalendar: {
        ariaLabel: 'Mockup af sundhedskalender',
        title: (
          <>
            Cyklus <span className="italic">tracker</span>
          </>
        ),
        month: 'Marts',
        weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        legend: {
          menstrual: 'Menstruationsfase',
          follicular: 'Follikulær fase',
          luteal: 'Lutealfase',
          ovulation: 'Ægløsning',
        },
      },
      eventBanner: {
        ariaLabel: 'Mockup af eventbanner',
        title: 'Den økonomiske effekt af kvinders livsfaser',
        location: 'København',
        date: '22. marts',
        link: 'Læs mere og tilmeld dig via link',
      },
      gapAction: {
        ariaLabel: 'Mockup af belønninger der lukker gabet',
        title: (
          <>
            Luk <span className="italic">gabet</span>
          </>
        ),
        intro:
          'Vi arbejder på måder, der kan hjælpe dig med at spare penge på sundhedsudgifter.',
        tiles: [
          {
            label: 'Byg med os',
            copy: 'Du er blandt de første, der former et nyt økonomisk system for kvinder',
            active: true,
          },
          {
            label: 'Kommer snart',
            copy: 'Rabatter på tilbagevendende sundhedsprodukter.',
          },
          {
            label: 'Kommer snart',
            copy: 'Partnerskaber med lokale apoteker om lavere priser på medicin.',
          },
          {
            label: 'Kommer snart',
            copy: 'Udfyld en undersøgelse om kvinders sundhed, og vi betaler dig for det.',
          },
        ],
      },
    },
  },
};
