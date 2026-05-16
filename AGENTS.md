# Website Agent Instructions

These instructions apply to work under `website/`.

## Website Implementation Rules

- The website is a React, TypeScript, and Vite app.
- Follow the website's own component, styling, routing, responsiveness, and accessibility conventions.
- Do not apply `mobile/AGENTS.md` or the mobile Figma mapping rules to website work.
- When mapping a Figma design to the website, preserve the design intent while using reusable website components and web-appropriate styling.
- Keep website implementation responsive across desktop and mobile web viewports.
- Verify website changes with `npm run build` in `website/` before finishing when feasible.

## Figma-To-Website Guidance

- Treat Figma as design input, not as a mandate to reuse mobile implementation details.
- Prefer shared website primitives and reusable CSS/component patterns over page-local one-off styling.
- Preserve existing website behavior and copy unless the task explicitly requests a behavior or copy change.
- Use semantic HTML and accessible controls for interactive elements.

## Website Figma Design References

Use these Figma nodes as the canonical website design references when implementing or reviewing the corresponding pages:

- **Homepage desktop/full**: [Female Fairness – Website](https://www.figma.com/design/yl6vFK056PT3duheHQOTUi/Female-Fairness-%E2%80%93-Website?node-id=11-3&m=dev) (`fileKey: yl6vFK056PT3duheHQOTUi`, `node-id: 11-3`)
- **Homepage mobile**: [Female Fairness – Website](https://www.figma.com/design/yl6vFK056PT3duheHQOTUi/Female-Fairness-%E2%80%93-Website?node-id=11-194&m=dev) (`fileKey: yl6vFK056PT3duheHQOTUi`, `node-id: 11-194`)
- **About page desktop/full**: [Female Fairness – Website](https://www.figma.com/design/yl6vFK056PT3duheHQOTUi/Female-Fairness-%E2%80%93-Website?node-id=11-115&m=dev) (`fileKey: yl6vFK056PT3duheHQOTUi`, `node-id: 11-115`)
- **About page mobile**: no dedicated Figma node is currently provided. Infer the mobile layout from the About page desktop/full design, the Homepage mobile design, and the website's responsive conventions.
