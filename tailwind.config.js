/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        colorDark: '#dbb144',
        colorMedium: '#fe449c',
        colorLight: '#e4e6e8',
        colorLight2: '#b3b7bb',
        colorLighTDark: '#76787a',
        colorLayout: '#eff2f5',
        colorLayout2: '#f5f8f6',
        colorButtonDark: '#82c638',
        colorButtonMedium: '#bee09b',
        colorExit: 'green',
        colorError: 'rgb(249, 43, 43)'
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: []
}
