/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DOWNLOAD_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_CONTACT_URL?: string;
  readonly VITE_EVENTS_URL?: string;
  readonly VITE_PARTNER_URL?: string;
  readonly VITE_DONATION_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
