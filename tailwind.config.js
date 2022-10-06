/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: 0.5,
            transform: 'translateY(-15%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: 0.5,
            transform: 'translateX(3%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 250ms ease forwards',
        'fade-in-down': 'fade-in-down 250ms ease forwards',
        'fade-in-left': 'fade-in-left 250ms ease forwards'
      }
    }
  },
  plugins: []
};
