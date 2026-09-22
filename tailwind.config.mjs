import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Reliable Builders — modern architectural palette.
        // Deep navy (trust, craft) + warm stone neutrals (clean, premium) + brass accent (warmth).
        navy: {
          50:  '#EEF1F6',
          100: '#D6DEEA',
          200: '#AEBDD2',
          300: '#7E93B4',
          400: '#526C93',
          500: '#385179',
          600: '#2A3E60',   // primary brand navy
          700: '#213152',
          800: '#182640',   // deep navy (footers, hero overlays)
          900: '#101A2C',
        },
        brass: {
          50:  '#FBF6EE',
          100: '#F4E8D3',
          200: '#E7CFA6',
          300: '#D8B478',
          400: '#CCA05B',
          500: '#B98A45',   // primary accent brass
          600: '#9E7238',
          700: '#7C592D',
          800: '#5A4021',
          900: '#3B2A15',
        },
        stone: {
          DEFAULT: '#F6F4F0',  // warm near-white page background
          warm:    '#EFEBE3',  // section alt background
          deep:    '#E4DED2',  // cards / borders
        },
        ink: {
          DEFAULT: '#1A1D21',  // near-black body text
          muted:   '#54585E',
          soft:    '#868A91',
        },
      },
      fontFamily: {
        // Modern grotesk display — Space Grotesk via Google Fonts
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Body sans — Inter
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.6rem, 6.5vw, 4.75rem)', { lineHeight: '1.03', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 3.6vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.3rem, 2.6vw, 1.85rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'prose-narrow': '38rem',
        'prose-wide':   '52rem',
        'editorial':    '74rem',
      },
      letterSpacing: {
        'eyebrow': '0.2em',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(16,26,44,0.04), 0 8px 24px rgba(16,26,44,0.06)',
        'lift': '0 4px 12px rgba(16,26,44,0.08), 0 18px 44px rgba(16,26,44,0.12)',
      },
    },
  },
  plugins: [typography],
};
