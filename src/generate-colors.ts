import { generate } from '@ant-design/colors';
import { mapKeys } from 'remeda';

export const generateColors = (...args: Parameters<typeof generate>) => {
  return toColors(generate(...args));
};

export const toColors = (colors: string[]) => {
  const palette = mapKeys(colors, (k) => Math.max(Number(k) * 100, 50)) as Record<string, string>;

  palette.DEFAULT = palette['500'];

  return palette;
};
