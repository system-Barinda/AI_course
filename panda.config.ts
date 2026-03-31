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

  // 3. Output Directory
  outdir: 'styled-system'
})