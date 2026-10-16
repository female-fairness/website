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
- `/survey` - Google Forms survey, auto-localized website copy
- `/en/survey`, `/da/survey` - Survey with English or Danish website copy (the embedded form uses Google's own language/content)

External destinations are centralized in `src/config/links.ts` and can be overridden with `VITE_*` environment variables.
