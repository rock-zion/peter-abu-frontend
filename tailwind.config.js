/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-bg-color-0': 'var(--bg-offwhite-0)',
        'my-bg-color-1': 'var(--bg-offwhite-1)',
        'my-grey-0': 'var(--grey-0)',
        'my-grey-1': 'var(--grey-1)',
        'my-white': 'var(--white)',
        'my-orange': 'var(--orange)',
        'my-lemon': 'var(--lemon)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: { max: '780px' },
      // => @media (min-width: 780px) { ... }
    },
  },
  plugins: [],
};
