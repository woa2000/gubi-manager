/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gubi Design System Colors
        'gubi-purple': '#5A439B',
        'gubi-purple-dark': '#4A3784', 
        'gubi-pink': '#E85A9B',
        'gubi-light-blue': '#00A9E0',
        'gubi-dark-blue': '#2C3E50',
        'gubi-black': '#111111',
        'gubi-white': '#FFFFFF',
        'gubi-gray-100': '#F5F7FA',
        'gubi-gray-300': '#CBD2D9',
        'gubi-gray-500': '#7B8794',
        'gubi-gray-700': '#3E4C59',
        'gubi-gray-900': '#1F2933',
        'gubi-success': '#34C759',
        'gubi-warning': '#FFCC00',
        'gubi-error': '#FF3B30',
        'gubi-info': '#00A9E0',
        
        // Legacy colors (para compatibilidade)
        'woof-orange': '#FF6B00',
        'dark-brown': '#4A2E00', 
        'warm-yellow': '#FFC25C',
        'teal-accent': '#009688',
        'dark-gray': '#333333',  
        'light-gray': '#F4F4F4',
      },
      fontFamily: {
        // Gubi Design System Typography
        'gubi-base': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'gubi-accent': ['Space Grotesk', 'Poppins', 'sans-serif'],
        
        // Legacy fonts (para compatibilidade)
        sans: ['Lato', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
