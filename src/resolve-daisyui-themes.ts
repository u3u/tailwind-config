type Themes = typeof import('daisyui/src/theming/themes').default;

export const resolveDaisyuiThemes = (): Themes => {
  try {
    // v3+
    return require('daisyui/src/theming/themes');
  } catch {
    // v2
    return require('daisyui/src/colors/themes');
  }
};
