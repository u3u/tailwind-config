import base from '@u3u/tailwind-config';
import daisyui from '@u3u/tailwind-config/daisyui';
import { mergePresets } from '@u3u/tailwind-config/merge-presets';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [mergePresets([base, daisyui])],
};
