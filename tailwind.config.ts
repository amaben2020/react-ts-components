/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans'],
        gothic: ['var(--font-gothic)', 'sans'],
      },
      containers: {
        '2xs': '16rem',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
