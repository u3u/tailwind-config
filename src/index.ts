import '@total-typescript/ts-reset';
import aspectRatio from '@tailwindcss/aspect-ratio';
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
    utilities,
    variants,
  ],

  presets: [base],
});
