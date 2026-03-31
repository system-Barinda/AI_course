import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // ... your existing config (preflight, include, etc.)
  jsxFramework: 'react',

  // 1. ADD THE THEME SECTION HERE
  theme: {
    extend: {
      tokens: {
        colors: {
          // Define the specific greens from your screenshot
          brand: {
            dark: { value: '#061311' },    // The near-black background
            teal: { value: '#0f3a2e' },    // The glowing green accent
            glass: { value: 'rgba(255, 255, 255, 0.1)' } // For the transparent buttons
          }
        },
        fonts: {
          body: { value: 'var(--font-sans), system-ui, sans-serif' }
        }
      }
    }
  },

  outdir: 'styled-system'
})

// Correct: Square brackets [] make it an array (iterable)
include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

// Incorrect: This would cause your error
include: './src/**/*.{js,jsx,ts,tsx}',