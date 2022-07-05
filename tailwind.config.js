/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif'
    },
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
          800: '#FF7518',
          900: '#F54703',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        indigo: {
          600: '#7B83EB',
          700: '#5059C9',
        }
      },
    },
  },
  plugins: [],
}
