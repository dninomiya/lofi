module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dot: ['DotGothic16', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
