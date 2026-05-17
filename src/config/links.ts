export interface MarketingLinkConfig {
  appDownload: string;
  linkedin: string;
  instagram: string;
  contact: string;
  events: string;
  partner: string;
  donation: string;
}

const placeholder = '#';
const appStoreUrl = 'https://apps.apple.com/us/app/female-fairness/id6754598835';
const linkedinUrl = 'https://www.linkedin.com/company/female-fairness/';

export const marketingLinks: MarketingLinkConfig = {
  appDownload: import.meta.env.VITE_APP_DOWNLOAD_URL ?? appStoreUrl,
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? linkedinUrl,
  instagram: import.meta.env.VITE_INSTAGRAM_URL ?? placeholder,
  contact: import.meta.env.VITE_CONTACT_URL ?? placeholder,
  events: import.meta.env.VITE_EVENTS_URL ?? placeholder,
  partner: import.meta.env.VITE_PARTNER_URL ?? placeholder,
  donation: import.meta.env.VITE_DONATION_URL ?? placeholder,
};
