import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // 1. Core Settings
  preflight: true,
  jsxFramework: 'react',

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  // 2. Theme (MERGED — only one theme block ✅)
  theme: {
    extend: {
      tokens: {
        colors: {
          // ── BRAND ──
          brand: {
            dark: { value: '#061311' },
            teal: { value: '#0f3a2e' },
            glass: { value: 'rgba(255, 255, 255, 0.1)' }
          },

          // ── ABOUT SECTION ──
          about: {
            bg: { value: '#F7F7F7' },
            text: { value: '#2C3E50' },
            card: { value: '#0A2A22' },
            subtleCard: { value: '#E1E1E1' },
            circle: { value: '#F0F0F0' },
          },

          // ── LEARN SECTION ──
          learn: {
            bg: { value: '#FFFFFF' },
            title: { value: '#2C3E50' },
            card: { value: '#10352A' },
            circle: { value: '#E1E1E1' },
          },

          // ── EXPERT SECTION ──
          expert: {
            bgGradient: {
              value: 'linear-gradient(135deg, #f8f9fa 0%, #e0e6ed 100%)'
            },
            textCharcoal: { value: '#1a202c' },
            aiChat: {
              gradient: {
                value: 'linear-gradient(135deg, #103a2e 0%, #061311 100%)'
              },
              userBubble: { value: 'rgba(255, 255, 255, 0.1)' },
              userText: { value: '#cbd5f5' }
            },
            input: { value: '#2d3748' },
          },

          // ── GLOBAL COLORS ──
          primary: { value: '#ffd93d' },
          secondary: { value: '#ff6b6b' },
        },

        // ── FONTS ──
        fonts: {
          body: { value: 'var(--font-inter), system-ui, sans-serif' }
        }
      }
    }
  },

  // 3. Output Directory
  outdir: 'styled-system'
})