# Female Fairness Website

Standalone Vite React marketing website for the Figma website designs.

## Local Development

```bash
npm install
npm run dev
```

Routes:

- `/` - Homepage, auto-localized from browser language
- `/about` - About page, auto-localized from browser language
- `/en`, `/en/about` - English pages
- `/da`, `/da/about` - Danish pages

External destinations are centralized in `src/config/links.ts` and can be overridden with `VITE_*` environment variables.
