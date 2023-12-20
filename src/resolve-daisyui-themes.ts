type Themes = typeof import('daisyui/src/theming/themes').default;

export const resolveDaisyuiThemes = (): Partial<Themes> => {
  try {
    // v3+
    return require('daisyui/src/theming/themes');
  } catch {
    // v2
    try {
      // "require" call with a try/catch block to handle this failure at run-time instead of bundle-time.
      return require('daisyui/src/colors/themes');
    } catch {
      return {};
    }
  }
};
