import base from '.';
import daisyui from './daisyui';
import { defineConfig } from './define-config';
import { mergePresets } from './merge-presets';
import nextui from './nextui';

export default defineConfig({
  presets: [mergePresets([base, daisyui, nextui])],
});
