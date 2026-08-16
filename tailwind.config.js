/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokyo: {
          bg: '#1a1b26',
          card: '#24283b',
          blue: '#7aa2f7',
          purple: '#bb9af7',
          cyan: '#7dcfff',
          green: '#9ece6a',
          text: '#a9b1d6',
          border: '#414868'
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}