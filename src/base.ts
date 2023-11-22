import { defineConfig } from './define-config';
import { generateColors } from './generate-colors';

export default defineConfig({
  content: [],

  theme: {
    extend: {
      animation: {
        'button-pulse': 'button-pulse 2s infinite 1s cubic-bezier(0.25, 0, 0, 1)',
        'gradient-text': 'gradient-text 3s ease-in-out infinite alternate',
        'heart-beat': 'heart-beat 1.3s .3s ease-in-out infinite',
        shine: 'shine 0.85s 150ms cubic-bezier(0.65, 0, 0.35, 1)',
        skeleton: 'skeleton 1.2s ease-in-out infinite',
        'skeleton-loading': 'skeleton-loading 8s ease-in-out infinite',
      },

      backgroundImage: {
        'gradient-shine': 'linear-gradient(90deg, rgba(255, 243, 225, 0), #fff3e1)',

        'gradient-start':
          'radial-gradient(circle farthest-corner at 100% 0, #f09c33 0%, #f59234 4%, #f98736 7%, #fd7b38 10%, #ff6e3c 14%, #ff5f41 18%, #ff4e46 21%, #ff384b 25%, #fd1851 29%, #f90059 32%, #f50062 36%, #f0006c 39%, #e90077 43%, #e10083 46%, #d70090 50%, var(--theme, #20a0ff) 75%, var(--theme, #20a0ff) 100%)',
      },

      boxShadow: {
        border: '0 0 0 1px rgba(0, 0, 0, 0.1)',
        'border-inset': 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'border-inset-x': 'inset 1px 0 0 rgba(0, 0, 0, 0.1)',
        'border-inset-y': 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
        'border-x': '1px 0 0 rgba(0, 0, 0, 0.1)',
        'border-y': '0 1px 0 rgba(0, 0, 0, 0.1)',

        panel: '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'panel-2xs': '0 2px 5px 0 rgba(0, 0, 0, 0.05)',
        'panel-lg': '0 3px 10px 0 rgba(0, 0, 0, 0.2)',
        'panel-md': '0 4px 15px 0 rgba(0, 0, 0, 0.1)',
        'panel-sm': '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
        'panel-xl': '0 2px 30px 0 rgba(0, 0, 0, 0.1)',
        'panel-xs': '0 2px 10px 0 rgba(0, 0, 0, 0.05)',
      },

      colors: {
        alipay: generateColors('#1890ff'), // #1677ff
        darkgray: generateColors('#969696'),
        dimgray: generateColors('#666666'),
        elm: generateColors('#20a0ff'),
        primary: generateColors(process?.env?.THEME || '#1a66fe'),
        snow: generateColors('#eeeeee'),
        stripe: generateColors('#6875e2'),
        tomato: generateColors('#ff4949'),
        wechat: generateColors('#09c260'),
        whitesmoke: generateColors('#f7f7f7'),
      },

      container: {
        center: true,

        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },

      dropShadow: {
        menu: '0 2px 10px rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        emoji: ['"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'],
      },

      keyframes: {
        'button-pulse': {
          from: {
            boxShadow: '0 0 0 0 var(--button-pulse-color, currentColor)',
          },

          to: {
            boxShadow: '0 0 0 var(--button-pulse-size, 12px) transparent',
          },
        },

        'gradient-text': {
          from: {
            backgroundPosition: '0',
          },

          to: {
            backgroundPosition: '100%',
          },
        },

        'heart-beat': {
          '14%': { transform: 'scale3d(1.3, 1.3, 1.3)' },
          '28%': { transform: 'scale3d(1, 1, 1)' },
          '42%': { transform: 'scale3d(1.3, 1.3, 1.3)' },
          '70%': { transform: 'scale3d(1, 1, 1)' },
        },

        shine: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-4rem, 0, 0) skewX(45deg)',
          },

          '100%': {
            opacity: '0',
            transform: 'translate3d(4rem, 0, 0) skewX(45deg)',
          },

          '50%': {
            opacity: '0.15',
          },
        },

        skeleton: {
          from: {
            backgroundPosition: '-200px 0px',
          },

          to: {
            backgroundPosition: 'calc(200px + 100%) 0px',
          },
        },

        'skeleton-loading': {
          from: {
            backgroundPosition: '200% 0',
          },

          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },

      transitionDuration: {
        400: '400ms',
        DEFAULT: '300ms',
      },

      transitionTimingFunction: {
        gradient: 'cubic-bezier(0.35, 0.35, 0, 1)',
        'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        progress: 'cubic-bezier(0.46, 0.06, 0.26, 1.01)',
        quick: 'cubic-bezier(0, 0.8, 0.04, 0.98)',
      },
    },
  },
});
