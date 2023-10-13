import { expect, it } from 'vitest';

it('should match snapshot', async () => {
  const { execa } = await import('execa');

  const { stdout } = await execa('tailwindcss', ['-i', 'test/__fixtures__/globals.css']);

  expect(stdout).toMatchSnapshot();
});
