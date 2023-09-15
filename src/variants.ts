import plugin from 'tailwindcss/plugin.js';

export const variants = plugin(({ addVariant }) => {
  addVariant('zh', '&:lang(zh)');
  addVariant('en', '&:lang(en)');

  addVariant('hocus', ['&:hover', '&:focus']);
  addVariant('can-hover', '@media (hover: hover)');
  addVariant('no-hover', '@media (hover: none)');
});
