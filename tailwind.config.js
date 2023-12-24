/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interTight: ["Inter Tight", "sans-serif"],
      },
      colors: {
        primary_main: "#1B3562",
        neutrals_100: "#1E1E2D",
        neutrals_200: "#30303B",
        neutrals_300: "#545769",
        neutrals_500: "#B0B5BF",
        neutrals_700: "#E9EAED",
        button_active: "#F6C542",
        background_color: "#BFC3CA",
      },
      screens: {
        screens: {
          md: "640px",
          lg: "768px",
          xl: "1024px",
        },
      },
    },
  },
  plugins: [],
};
