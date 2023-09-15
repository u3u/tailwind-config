import { nextui } from '@nextui-org/react';
import base from './base';
import { defineConfig } from './define-config';

const { colors } = base.theme.extend;
const { primary } = colors;

export default defineConfig({
  content: ['./node_modules/@nextui-org/theme/dist/{,!(node_modules)/**/}*.js'],

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary,
          },
        },
      },
    }),
  ],
});
