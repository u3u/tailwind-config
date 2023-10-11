import { generate } from '@ant-design/colors';
import { mapKeys } from 'remeda';

export interface GenerateColorsOptions {
  backgroundColor?: string;
  theme?: 'dark' | 'default';
}

export const generateColors = (color: string, options?: GenerateColorsOptions) => {
  return toColors(generate(color, options));
};

export const toColors = (colors: string[]) => {
  const palette = mapKeys(colors, (k) => Math.max(Number(k) * 100, 50)) as Record<string, string>;

  palette.DEFAULT = palette['500'];

  return palette;
};
