module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dot: ["DotGothic16", "monospace"],
      },
      transitionProperty: {
        width: "width",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "24px",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
