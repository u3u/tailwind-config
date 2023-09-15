import base from '.';
import { daisyui } from './daisyui';
import { defineConfig } from './define-config';
import nextui from './nextui';

export default defineConfig({
  daisyui,

  presets: [base, nextui],
});
