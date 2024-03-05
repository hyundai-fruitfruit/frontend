/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        customPink: '#FF7070',
        customgreen: '#57AD80',
        customgrey: '#F8F8F8',
      },
      boxShadow: {
        'clay-card':
          '1.25em 1.25em 2.5em hsl(0deg 0% 20%), inset -0.3125em -0.3125em 0.625em hsl(0deg 0% 10% / 70%), inset 0 0.5em 1em hsl(0deg 0% 5%)',
        'clay-btn':
          '0.5em 0.5em 1em 0 hsl(0deg 0% 15% / 50%), inset -0.5em -0.5em 1em 0 hsl(0deg 0% 20%), inset 0.25em 0.25em 0.5em 0 hsl(0deg 0% 10% / 45%)',
      },
      borderRadius:{
        'extra': '2.2rem',
      }
    },
  },
  plugins: [],
};
