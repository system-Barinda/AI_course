import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // 1. Core Settings
  preflight: true,
  jsxFramework: 'react',
  
  // This MUST be inside the defineConfig object
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  // 2. Custom Design Tokens
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            dark: { value: '#061311' },
            teal: { value: '#0f3a2e' },
            glass: { value: 'rgba(255, 255, 255, 0.1)' }
          }
        },
        fonts: {
          body: { value: 'var(--font-sans), system-ui, sans-serif' }
        }
      }
    }
  },

  //3.custom desing tokens


  theme: {
    extend: {
      tokens: {
        colors: {
          // New tokens for the "Step by Step" layout
          about: {
            bg: { value: '#F7F7F7' }, // Soft off-white background
            text: { value: '#2C3E50' }, // Dark charcoal for main headings
            card: { value: '#0A2A22' }, // Deep teal/green for the cards
            subtleCard: { value: '#E1E1E1' }, // Light gray for the left-side sub-card
            circle: { value: '#F0F0F0' }, // Light gray for the circles
          },
        },
        fonts: {
          // Assume var(--font-inter) is defined in your main layout
          body: { value: 'var(--font-inter), system-ui, sans-serif' },
        },
      },
    },
  },

  theme: {
    extend: {
      tokens: {
        colors: {
          learn: {
            bg: { value: '#FFFFFF' }, // Clean white background for the text section
            title: { value: '#2C3E50' }, // Dark charcoal for the "Learn to Make" title
            card: { value: '#10352A' }, // Rich green base for the dark cards
            circle: { value: '#E1E1E1' }, // Light gray for the dots
          },
        },
        fonts: {
          // Assume var(--font-inter) is defined globally
          body: { value: 'var(--font-inter), system-ui, sans-serif' },
        },
      },
    },
  },
  
  // 3. Output Directory
  outdir: 'styled-system'
})