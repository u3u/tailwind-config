import daisyuiPlugin from 'daisyui';
import themes from 'daisyui/src/theming/themes';
import base from './base';
import { defineConfig } from './define-config';

const { colors } = base.theme.extend;
const { alipay, primary, tomato, wechat } = colors;

export const daisyui = {
  base: false,

  prefix: 'daisy-',

  themes: [
    {
      light: {
        ...themes['[data-theme=light]'],
        // '--animation-btn': '0.25s', // duration of animation when you click on button
        // '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
        // '--border-btn': '0', // border width of buttons
        // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
        '--btn-text-case': 'none', // set default text transform for buttons
        // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
        // '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
        // '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
        // '--tab-border': '1px', // border width of tabs
        // '--tab-radius': '0.5rem', // border radius of tabs
        accent: wechat[500],
        'accent-focus': wechat[400],
        'base-content': '#333',
        error: tomato[500],
        'error-content': '#fff',
        info: primary[500],
        'info-content': '#fff',
        neutral: '#333',
        'neutral-focus': '#000',
        primary: primary[500],
        'primary-content': '#fff',
        'primary-focus': primary[400],
        secondary: alipay[500],
        'secondary-focus': alipay[400],
        success: wechat[500],
        'success-content': '#fff',
        'warning-content': '#fff',
      },
    },
  ],
};

export default defineConfig({
  content: [],

  daisyui,

  plugins: [daisyuiPlugin.handler],
});
