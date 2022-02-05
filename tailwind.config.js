module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#181818',
        bar: '#2b2b2b',
      },
      fontFamily: {
        megrim: ['Megrim', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
