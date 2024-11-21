/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#F7B727', // Màu vàng
        'primary-900': 'rgba(247, 183, 39, 0.9)',
        'primary-700': 'rgba(247, 183, 39, 0.7)',    
        'secondary': '#33C6F4',    // Màu xanh dương nhạt
        'secondary-900': 'rgba(51, 198, 244, 0.9)',
        'tertiary': '#2E3192',     // Màu xanh dương đậm
        'tertiary-900': 'rgba(46, 49, 146, 0.9)',
        'tertiary-100': 'rgba(46, 49, 146, 0.1)', 
      },
    },
  },
  plugins: [],
};
