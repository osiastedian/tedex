const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
module.exports = {
  presets: [require('../../tailwind.config.js')],
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
