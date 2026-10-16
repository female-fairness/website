import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const indexHtml = join(dist, 'index.html');

const routes = [
  'about',
  'merch',
  'survey',
  'en',
  'en/about',
  'en/merch',
  'en/survey',
  'da',
  'da/about',
  'da/merch',
  'da/survey',
];

await Promise.all(
  routes.map(async (route) => {
    const routeIndex = join(dist, route, 'index.html');

    await mkdir(dirname(routeIndex), { recursive: true });
    await cp(indexHtml, routeIndex);
  }),
);

await cp(indexHtml, join(dist, '404.html'));
