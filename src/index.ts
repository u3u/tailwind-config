import '@total-typescript/ts-reset';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import animated from 'tailwindcss-animated';
import base from './base';
import { defineConfig } from './define-config';
import { utilities } from './utilities';
import { variants } from './variants';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  darkMode: 'class',

  plugins: [
    //
    animated,
    aspectRatio,
    containerQueries,
    typography,
    utilities,
    variants,
  ],

  presets: [base],
});
