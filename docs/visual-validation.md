# Website Visual Validation

Use this workflow when website changes should be visually checked before merging to `main`.

## Recommended Tooling

Use Playwright for browser-driven visual validation:

```bash
npm install -D @playwright/test
npx playwright install chromium
```

Add scripts similar to these, adjusted to the project’s existing script names:

```json
{
  "scripts": {
    "verify": "npm run lint && npm run typecheck && npm run build",
    "test:visual": "playwright test",
    "verify:visual": "npm run verify && npm run test:visual"
  }
}
```

## Playwright Config Pattern

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
  projects: [
    {
      name: "desktop-chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
  ],
});
```

Adjust the port and dev-server command if the project does not use
`http://localhost:3000` or `npm run dev`.

## First Visual Test Pattern

Create tests under `tests/visual/`:

```ts
import { expect, test } from "@playwright/test";

test("home page visual check", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot("home.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
```

Create or intentionally update baselines with:

```bash
npx playwright test --update-snapshots
```

Run validation with:

```bash
npm run verify:visual
```

## Chat Instruction Pattern

Use this wording when asking Codex to handle a website task end to end:

```text
Branch, implement, verify, run Playwright visual validation, report screenshot/artifact paths, then open a PR.
```

Expected Codex behavior:

1. Check branch and worktree status.
2. If on `main`, pull latest remote changes before creating the branch.
3. Create a task branch unless explicitly told to work on `main`.
4. Implement the requested change.
5. Run the project’s static verification command.
6. Start or reuse the local dev server.
7. Run Playwright visual validation for the changed pages.
8. Report changed pages, viewport sizes, test result, and screenshot/artifact paths.
9. If the visual diff is intentional, update snapshots only when the new UI matches the requested change.
10. Push and open a PR only after reporting verification results.

## PR Evidence Pattern

For visual website changes, include screenshots or artifact links in the PR:

```md
## Verification

- `npm run verify` passed
- `npm run test:visual` passed

## Visual Evidence

| Page | Desktop             | Mobile              |
| ---- | ------------------- | ------------------- |
| Home | screenshot/artifact | screenshot/artifact |
```

Use screenshots for pages or states that changed. Do not require screenshots for purely internal or non-visual changes.

## Practical Rollout

Start with screenshot capture and PR evidence for changed pages. Add strict snapshot comparison for stable pages once the design is less volatile.
