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
      lightGrey:"#f1f2f4",
      'white': '#ffffff',
      'red':{
        900:"#D24325"
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