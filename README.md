# @u3u/tailwind-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

## Features

- Common utilities
- Common variants
- Common animation
- Common theme colors
- Multiple preset combinations
- [Tailwind Animated](https://www.tailwindcss-animated.com/) out of the box
- [Iconify](#with-iconify) icon sets out of the box
- [DaisyUI](#with-daisyui) out of the box
- [NextUI](#with-nextui) out of the box
- [Generate theme colors](#generate-theme-colors)
- [Generate custom iconify icon sets](#generate-custom-icons)
- [Merge presets](#merge-presets)

## Install

```sh
pnpm add @u3u/tailwind-config -D
```

## Usage

In your `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config')],
};
```

### With [DaisyUI](https://daisyui.com/)

`pnpm add daisyui -D`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config/daisyui')],
};
```

### With [NextUI](https://nextui.org)

`pnpm add @nextui-org/react framer-motion`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config/nextui')],
};
```

### With [DaisyUI](https://daisyui.com/) and [NextUI](https://nextui.org/)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config/ui')],
};
```

### With [Iconify](https://iconify.design/)

This plugin comes from [tailwindcss-icons](https://github.com/egoist/tailwindcss-icons), thanks to the great work of the author!

```js
const { getIconCollections, iconsPlugin, withIcons } = require('@u3u/tailwind-config/icons');
const customIcons = require('./custom-icons.json'); // See Generate Custom Icons

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    // common icon sets
    ...withIcons(),

    // custom icon sets
    iconsPlugin({
      collections: {
        // custom additional icon sets
        custom: customIcons,

        // custom common icon sets
        // https://icon-sets.iconify.design/
        ...getIconCollections(['radix-icons']),
      },
    }),
  ],

  presets: [require('@u3u/tailwind-config')],
};
```

#### Generate Custom Icons

Add `generate-icons.mjs` file

```js
import { generateIconifyIconset, importDirectory } from '@u3u/tailwind-config/generate-iconify-iconset';

const iconSets = [
  // Your `*.svg` directory path
  await importDirectory('./custom-svgs', {
    includeSubDirs: true,
    prefix: 'custom',
  }),
];

await generateIconifyIconset(iconSets);
```

Then run `node generate-icons.mjs` to generate custom iconset json files.

### Generate Theme colors

> [!NOTE]
>
> Set `process.env.THEME` env variable to change `primary` color  
> you can also set it in files like `.env`, `.env.local`.  
> Example: `THEME="#1890ff" astro dev`

```js
const { generateColors } = require('@u3u/tailwind-config/generate-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config')],

  theme: {
    extend: {
      colors: {
        custom: generateColors('#1890ff'),
      },
    },
  },
};
```

### With Base Config (no plugins)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@u3u/tailwind-config/base')],
};
```

### Merge Presets

```js
const { mergePresets } = require('@u3u/tailwind-config/merge-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    mergePresets([
      //
      require('@u3u/tailwind-config'),
      require('@u3u/tailwind-config/daisyui'),
    ]),
  ],
};
```

## License

[MIT](./LICENSE) License © 2023 [u3u](https://github.com/u3u)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@u3u/tailwind-config
[npm-version-href]: https://npmjs.com/package/@u3u/tailwind-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@u3u/tailwind-config
[npm-downloads-href]: https://npmjs.com/package/@u3u/tailwind-config
