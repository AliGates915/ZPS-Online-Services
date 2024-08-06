/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          primaryColor: "#8873ef",
          headingColor: "#081e21",
          smallTextColor: "#193256",
        },
        boxShadow: {
          'neon': '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
        },
      },
    },
    fontFamily: {
      custom: ['Poppins']
    },
    extend: {},
  plugins: [],
}