declare module 'tailwindcss-animated' {
  import type plugin from 'tailwindcss/plugin';

  const animated: ReturnType<typeof plugin>;

  export default animated;
}
