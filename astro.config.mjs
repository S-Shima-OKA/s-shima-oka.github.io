// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://s-shima-oka.github.io',
  // base: '/nerd-out', //ローカル確認時はコメントアウト
  // output: 'static',
  // publicDir: 'public',
  integrations: [tailwind()]
});