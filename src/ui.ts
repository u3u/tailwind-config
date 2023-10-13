import deepmerge from 'deepmerge';
import type { Config } from 'tailwindcss';
import base from '.';
import daisyui from './daisyui';
import { defineConfig } from './define-config';
import nextui from './nextui';

export default defineConfig({
  presets: [deepmerge.all<Config>([base, daisyui, nextui])],
});
