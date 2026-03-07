import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      screens: {
        md: '768px',
      },
      colors: {
        primary: '#5483B3',
        secondary: '#3B82F6',
        sec: '#052659'
      }
    }
  }
} satisfies Config