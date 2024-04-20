/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      screens: {
        'md': '768px',
        'lg': '1200px',
        'xl': '1440px',
      },
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        'primary': '#6B3CC9',
        'secondary': '#F28D35',
        'analogous1': '#6A44F2'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

