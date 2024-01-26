/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
		"./pages/**/*.html",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      margin: ['responsive'],
      screens: {
        mobile: '0.875rem',
        tablet: '1rem',
        laptop: '1.25rem',
        desktop: '1.5rem',
      },
      fontFamily: {
        'hiromisake' : ['hiromisake'],
        'nova' : ['nova'],
      },
        colors: {
          customBlue: '#254866',
          customBlue2: '#172D40',
          customPurple: '#321137',
          customLightP: '#5F3D65',
          customGreen: '#183434',
        }
    },
  },
  plugins: [],
}

