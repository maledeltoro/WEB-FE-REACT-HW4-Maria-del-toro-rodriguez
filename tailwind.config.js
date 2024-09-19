/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#ADD8E6',  // Azul claro
        pink: '#FF69B4',       // Rosado
        black: '#000000',      // Negro
      },
    },
  },
  plugins: [],
};
