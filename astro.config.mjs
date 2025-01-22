// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/S-Shima-OKA/nerd-out',
  // outDir: "./docs",
  // base: '/nerd-out', //ローカル確認時はコメントアウト
  output: 'static',
  publicDir: 'public',
  integrations: [tailwind()]
});