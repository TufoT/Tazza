/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inco': ['Inconsolata', 'monospace']
      },
      backgroundImage: {
        'hero': 'url(/img/background.jpg)'
      },
      height: {
        'h-bg': '52rem',
        'cf': '62rem'
      },
      dropShadow: {
        'xl' : '0px 0px 25px linear-gradient( to right, #ffffff , #fffacc)'
      },
    },
  },
  plugins: [],
}

