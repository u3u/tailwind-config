import type { Config } from 'tailwindcss';

export const defineConfig = <T extends Partial<Config>>(config: T) => {
  return config;
};
