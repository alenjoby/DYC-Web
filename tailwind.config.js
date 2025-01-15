/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Index file in the same directory
    './Frontend/**/*.{html,js}', // Include all HTML and JS files in the Frontend folder
  ],  
  theme: {
    extend: {
      colors: {
        scrollbar: {
          olive: '#86885b', // Scrollbar thumb color
          beige: '#f5f5dc', // Scrollbar track color
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
};
