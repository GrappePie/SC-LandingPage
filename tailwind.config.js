/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      lg_992: "992px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        alex: ['var(--font-alex)'],
        kaushan: ['var(--font-kaushan)'],
        pacifico: ['var(--font-pacifico)'],
        eb_garamond: ['var(--font-eb-garamond)'],
        workSans: ['var(--font-workSans)'],
        //Engravers Gothic BT Regular
        engravers: ['var(--font-engravers)'],
        //Centaur
        centaur: ['var(--font-centaur)'],
      },
      colors: {
        dark: "#3c4858",
        black: "#161c2d",
        "dark-footer": "#192132",
        "sc-gold": "#cfb687",
        "sc-blue": "#063c4a",
        "sc-green": "#00533e",
        "sc-pink": "#E6007E",
        "sc-white": "#ecf2f2",
        "sc-white2": "#F2F1F8",
      },

      boxShadow: {
        sm: "0 2px 4px 0 rgb(60 72 88 / 0.15)",
        DEFAULT: "0 0 3px rgb(60 72 88 / 0.15)",
        md: "0 5px 13px rgb(60 72 88 / 0.20)",
        lg: "0 10px 25px -3px rgb(60 72 88 / 0.15)",
        xl: "0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(60 72 88 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(60 72 88 / 0.05)",
        testi: "2px 2px 2px -1px rgb(60 72 88 / 0.15)",
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      maxWidth: ({ theme, breakpoints }) => ({
        1200: "71.25rem",
        992: "60rem",
        768: "45rem",
      }),

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
