/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lightGrey: {
        100: '#f1f2f4',
        300: "#B2B2B2"
      },
      'white': '#ffffff',
      'red': {
        900: "#D24325"
      },
      'green': {
        900: '#205960',
      },
      // ...
    },
    extend: {},
  },
  plugins: [],
}