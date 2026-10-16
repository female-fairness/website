import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import type { LocaleContent } from '../i18n/content';
import type { Locale } from '../i18n/routing';

const surveyUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScLc6IlIeRx6nc0b_jAUEPWO32a5l2Ujj9P7iaj8dTUDAIVpQ/viewform';

interface SurveyPageProps {
  content: LocaleContent;
  locale: Locale;
}

export function SurveyPage({ content, locale }: SurveyPageProps) {
  const copy = content.survey;

  return (
    <div className="site-page">
      <Header activePage="survey" labels={content.shared.header} locale={locale} />
      <main className="site-main">
        <Section kind="survey-section" labelledBy="survey-heading" tone="light">
          <div className="survey-section__intro">
            <h1 className="headline" id="survey-heading">{copy.title}</h1>
            <p className="body-copy body-copy--small">{copy.intro}</p>
            <a className="survey-section__link" href={surveyUrl} target="_blank" rel="noopener noreferrer">
              {copy.openForm}
            </a>
          </div>
          <iframe
            className="survey-section__form"
            src={`${surveyUrl}?embedded=true`}
            title={content.shared.footer.survey}
            width="640"
            height="4746"
          >
            {copy.loading}
          </iframe>
        </Section>
      </main>
      <Footer labels={content.shared.footer} locale={locale} />
    </div>
  );
}
