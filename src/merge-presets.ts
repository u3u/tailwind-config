import deepmerge from 'deepmerge';
import type { Config } from 'tailwindcss';

export const mergePresets = <T extends Partial<Config>>(presets: T[]) => {
  return deepmerge.all<Config>(presets);
};
