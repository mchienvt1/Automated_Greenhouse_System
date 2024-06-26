/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#8B4513', // Mã màu nâu tùy chỉnh
        customGreen: '#81D081'
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

