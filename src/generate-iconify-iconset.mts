// https://github.com/iconify/tools
import fs from 'node:fs/promises';
import { cleanupSVG, parseColors, runSVGO, type IconSet } from '@iconify/tools';

export interface GenerateIconifyIconsetOptions {
  /** @default 'currentColor' */
  defaultColor?: string;

  /** @default 'iconify' */
  outDir?: string;
  processColors?: ParseColorsCallback;
  replaceToDefaultColors?: string[];
}

export type ParseColorsCallback = ParseColorsOptions['callback'];

export type ParseColorsOptions = NonNullable<Parameters<typeof parseColors>[1]>;

export * from '@iconify/tools';

/**
 * @example
 *   await importDirectory('./icon-svgs', {
 *     includeSubDirs: true,
 *     prefix: 'icon',
 *   });
 */
export const generateIconifyIconset = async (iconSets: IconSet[], options: GenerateIconifyIconsetOptions = {}) => {
  const {
    defaultColor = 'currentColor',
    outDir = 'iconify',
    replaceToDefaultColors = [],

    // eslint-disable-next-line arrow-return-style/arrow-return-style
    processColors = (attr, colorStr, color) => {
      return !color || replaceToDefaultColors.includes(colorStr) ? defaultColor : colorStr;
    },
  } = options;

  for (const iconSet of iconSets) {
    // Validate, clean up, fix palette and optimise
    // eslint-disable-next-line unicorn/no-array-for-each
    await iconSet.forEach(async (name, type) => {
      if (type !== 'icon') return;

      const svg = iconSet.toSVG(name);

      if (!svg) {
        // Invalid icon
        iconSet.remove(name);

        return;
      }

      // Clean up and optimise icons
      try {
        cleanupSVG(svg);

        await parseColors(svg, {
          callback: processColors,
          defaultColor,
        });

        runSVGO(svg);
      } catch (err) {
        // Invalid icon
        console.error(`Error parsing ${name}:`, err);
        iconSet.remove(name);

        return;
      }

      // Update icon
      iconSet.fromSVG(name, svg);
    });

    // Export as IconifyJSON
    const exported = `${JSON.stringify(iconSet['export'](), null, 2)}\n`;

    await fs.mkdir(outDir, { recursive: true });

    // Save to file
    await fs.writeFile(`${outDir}/${iconSet.prefix}.json`, exported, 'utf8');
  }
};
