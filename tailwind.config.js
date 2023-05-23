/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      zs: '400px',
      ds: '450px',
      xs: '510px',
      ms: '550px',
      gs: '600px',
      sm: '648px',
      lm: '780px',
      mm: '850px',
      gm: '880px',
      jg: '900px',
      lg: '950px',
      kg: '1000px',
      zg: '1050px',
      xg: '1100px',
      xsg: '1200px'
    },
    extend: {
      colors: {
        'baseWhite': '#FDFDFD',
        'mainWhite': '#F9FAFC',
        'mainBlue': '#3C68FF',
        'mainYellow': '#FFE43B',
        'mainBlack': '#171717',
        'mainPurple': '#6368E5',
        'supBlack': '#1E2833',
        'supGrey': '#949396',
        'bluBlack': '#1E2833'
      },
      fontFamily: {
        cabin: 'Cabin',
        dmsans: 'DM Sans',
        poppins: 'Poppins'
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
