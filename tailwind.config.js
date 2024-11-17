/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': '"Plus Jakarta Sans", sans-serif',
        'poppins': '"Poppins", sans-serif'
      },

      colors: {
        'main-bg-color': '#FAFAFA',
        'main-text-color': '#181818',
        'sec-text-color': '#072125',
        'third-color': '#00FF84',
        'fourth-color': '#F9CCC7',
        'btn-color': '#F44335',
        'card-bg': '#2D3142',
        'dark-bg': '#1F2937',
        'sec-dark-bg': '#2C3E50'
      },

      backgroundImage: { 
        'bottom-cover': "url('/assets/img/bottom-cover.png')"
      }
    },
  },
  plugins: [],
}

