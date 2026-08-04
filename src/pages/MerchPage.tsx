import ctaScribble from '../assets/figma/cta-scribble.svg';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Section } from '../components/Section';
import { marketingLinks } from '../config/links';
import { getMerchProducts } from '../data/merch';
import type { LocaleContent } from '../i18n/content';
import type { Locale } from '../i18n/routing';

interface MerchPageProps {
  content: LocaleContent;
  locale: Locale;
}

const priceLocales: Record<Locale, string> = {
  en: 'en-DK',
  da: 'da-DK',
};

export function MerchPage({ content, locale }: MerchPageProps) {
  const copy = content.merch;
  const products = getMerchProducts(locale);
  const priceFormatter = new Intl.NumberFormat(priceLocales[locale], {
    currency: 'DKK',
    maximumFractionDigits: 0,
    style: 'currency',
  });
  const heroProduct = products[0];

  return (
    <div className="site-page">
      <Header activePage="merch" labels={content.shared.header} locale={locale} />
      <main className="site-main">
        <HeroSection
          lead={copy.heroLead}
          title={copy.heroTitle}
          tone="white"
          visual={(
            <span aria-hidden="true" className="merch-hero-frame">
              <img
                alt=""
                className="merch-hero-image"
                src={heroProduct.images.front.src}
              />
            </span>
          )}
          visualTone="soft"
        />

        <Section kind="merch-section" labelledBy="merch-heading" tone="light">
          <h2 className="headline" id="merch-heading">
            {copy.productsTitle}
          </h2>
          <div className="merch-grid">
            {products.map((product) => {
              const views = [
                { image: product.images.front, label: copy.frontLabel },
                ...(product.images.back
                  ? [{ image: product.images.back, label: copy.backLabel }]
                  : []),
              ];

              return (
                <article className="merch-card" key={product.sku}>
                  <div
                    className={`merch-card__views${
                      views.length === 1 ? ' merch-card__views--single' : ''
                    }`}
                  >
                    {views.map((view) => (
                      <figure className="merch-card__view" key={view.label}>
                        <img alt={view.image.alt} src={view.image.src} />
                        <figcaption className="merch-card__view-label">
                          {view.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <h3 className="merch-card__name">{product.name}</h3>
                  <p className="merch-card__price">
                    {priceFormatter.format(product.priceDkk)}
                  </p>
                  <p className="merch-card__meta">
                    {copy.colorLabel}: {product.color}
                    <br />
                    {copy.sizesLabel}: {product.sizes.join(', ')}
                  </p>
                  <p className="merch-card__body">{product.description}</p>
                  <div className="merch-card__action">
                    <Button
                      href={marketingLinks.merch[product.sku]}
                      variant="secondary"
                    >
                      {copy.buyLabel}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section kind="merch-shipping" labelledBy="shipping-heading" tone="deep">
          <h2 className="headline merch-shipping__title" id="shipping-heading">
            {copy.shippingTitle}
          </h2>
          <p className="merch-shipping__body">{copy.shippingBody}</p>
        </Section>

        <CTASection
          actionLabel={content.shared.header.downloadApp}
          artwork={
            <img
              alt=""
              aria-hidden="true"
              className="cta-section__art"
              src={ctaScribble}
            />
          }
          text={copy.ctaText}
          title={copy.ctaTitle}
        />
      </main>
      <Footer labels={content.shared.footer} />
    </div>
  );
}
