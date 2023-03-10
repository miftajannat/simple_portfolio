/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '60px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '668px', 'max': '767px'},
          {'min': '768px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      },

        fontFamily:{
         herrvonmuellerhoff: 'Herr Von Muellerhoff',
        },

    
    },
  },
  plugins: [],
}
