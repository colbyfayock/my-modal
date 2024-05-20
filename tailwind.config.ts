import type { Config } from 'tailwindcss';

const config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/src/**/*.{ts,tsx}',
	],
  theme: {},
  plugins: [],
} satisfies Config

export default config