// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  safelist: ['hover:text-sky-500', '!h-5', 'hover:bg-gray-100', 'dark:hover:bg-[#151519]'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Roboto Mono"', '"Helvetica"', '"Arial"', 'sans-serif'],
      rubik: ['"Rubik"', '"Helvetica"', '"Arial"', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        error: '#e55039',
        info: '#4a69bd',
        success: '#78e08f',
        warning: '#f6b93b',
        discord: '#7289DA',
        spotify: '#1DB954',
        twitch: '#6441A5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-animatecss'),
    plugin(function ({ addComponents }) {
      const components = {
        '.mask-center': {
          maskPosition: 'center !important',
        },
      };

      addComponents(components);
    }),
  ],
};
