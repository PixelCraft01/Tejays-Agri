/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#075B3A',
        deep: '#043D2A',
        emerald: '#087A4B',
        teal: '#2E8C82',
        leaf: '#72B943',
        lightGreen: '#E8F3EA',
        gold: '#E7B84B',
        warmGold: '#DDA83B',
        offWhite: '#F7F7F2',
        charcoal: '#151918',
        dark: '#0B1210',
        muted: '#737A76',
        border: '#DDE3DE'
      },
      boxShadow: {
        soft: '0 20px 40px rgba(7, 91, 58, 0.08)',
        card: '0 10px 30px rgba(11, 18, 16, 0.06)'
      },
      screens: {
        xs: '375px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(7, 91, 58, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 91, 58, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}
