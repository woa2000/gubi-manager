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
        'gubi-gray': {
          100: '#F5F7FA',
          300: '#CBD2D9', 
          500: '#7B8794',
          700: '#3E4C59',
          900: '#1F2933',
        },
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
      fontSize: {
        // Gubi Design System Typography Scale
        'gubi-display-1': ['3.5rem', '4rem'], // 56px/64px
        'gubi-h1': ['2.5rem', '3rem'], // 40px/48px  
        'gubi-h2': ['2rem', '2.5rem'], // 32px/40px
        'gubi-h3': ['1.5rem', '2rem'], // 24px/32px
        'gubi-body-1': ['1rem', '1.5rem'], // 16px/24px
        'gubi-body-2': ['0.875rem', '1.25rem'], // 14px/20px
        'gubi-caption': ['0.75rem', '1rem'], // 12px/16px
      },
      spacing: {
        // Gubi Design System Spacing Scale (8px base)
        'gubi-1': '0.125rem', // 2px
        'gubi-2': '0.25rem',  // 4px
        'gubi-3': '0.5rem',   // 8px
        'gubi-4': '0.75rem',  // 12px
        'gubi-5': '1rem',     // 16px
        'gubi-6': '1.5rem',   // 24px
        'gubi-7': '2rem',     // 32px
        'gubi-8': '2.5rem',   // 40px
        'gubi-9': '3rem',     // 48px
        'gubi-10': '4rem',    // 64px
        'gubi-11': '5rem',    // 80px
        'gubi-12': '6rem',    // 96px
      },
      borderRadius: {
        // Gubi Design System Border Radius
        'gubi-xs': '0.125rem', // 2px
        'gubi-sm': '0.25rem',  // 4px
        'gubi-md': '0.5rem',   // 8px
        'gubi-lg': '1rem',     // 16px
        'gubi-xl': '1.5rem',   // 24px
      },
      boxShadow: {
        // Gubi Design System Elevation
        'gubi-1': '0 1px 2px rgba(0, 0, 0, 0.08)',
        'gubi-2': '0 2px 8px rgba(0, 0, 0, 0.10)',
        'gubi-3': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        // Gubi Design System Motion
        'gubi-fast': '150ms',
        'gubi-base': '200ms', 
        'gubi-slow': '300ms',
      },
      transitionTimingFunction: {
        'gubi': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        // Gubi Design System Breakpoints
        'gubi-xs': '0px',
        'gubi-sm': '480px',
        'gubi-md': '768px', 
        'gubi-lg': '1024px',
        'gubi-xl': '1440px',
        'gubi-xxl': '1920px',
      },
    },
  },
  plugins: [],
};
