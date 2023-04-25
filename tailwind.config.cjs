/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#242424',
        bug: '#96a412',
        dark: '#3f2c23',
        dragon: '#7a64dd',
        electric: '#f9b41f',
        fairy: '#eaa6ef',
        fighting: '#772f1c',
        fire: '#c72000',
        flying: '#7a8ee4',
        ghost: '#605fa8',
        grass: '#379604',
        ground: '#ccae59',
        ice: '#6dd2f4',
        normal: '#9c998c',
        poison: '#843a85',
        psychic: '#e9457d',
        rock: '#a58f44',
        steel: '#b2b2bf',
        water: '#2285e3',
      },
    },
    fontFamily: {
      arcade: ['arcade'],
    },
  },
  plugins: [],
}
