import { dynamicIconsPlugin, getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

export * from '@egoist/tailwindcss-icons';

export const withIcons = () => {
  return [
    iconsPlugin({
      collections: {
        // https://icon-sets.iconify.design/
        // https://icon-sets.iconify.design/fa
        ...getIconCollections([
          //
          'ant-design',
          // 'bi',
          'fa', // Font Awesome 4
          'mdi',
          // 'radix-icons',
          'tabler',
          'heroicons',
          'lucide',
          'ep', // Element Plus
        ]),
      },
    }),

    dynamicIconsPlugin(),
  ];
};
