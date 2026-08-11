/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090B0F',
        graphite: '#12151B',
        steel: '#1B1E24',
        gunmetal: '#252930',
        gold: {
          antique: '#C7954F',
          champagne: '#E2BD7A',
          bronze: '#8E6532',
          light: '#F4D8A5',
        },
        ivory: '#F2EFE9',
        silver: '#9A9CA1',
        steelgray: '#363A42',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #8E6532 0%, #C7954F 40%, #E2BD7A 70%, #B27A3B 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(226,189,122,0.15) 0%, rgba(9,11,15,0) 70%)',
        'graphite-card': 'linear-gradient(180deg, rgba(27,30,36,0.8) 0%, rgba(18,21,27,0.9) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(199, 149, 79, 0.3)',
        'gold-glow-lg': '0 0 40px 0px rgba(226, 189, 122, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0,0,0,0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
