/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Logo-exact palette ──────────────────────────────────────────
        // Taken directly from the Renova Trade logo swatches:
        //   Navy #0A2354 (wordmark) · Blue #213D6E (mid-tone)
        //   Cyan #489FC7 (swirl left) · Green #70BC91 (swirl right)
        primary: {
          DEFAULT: '#0A2354', // logo navy — headers, footer, dark sections
          dark: '#06152F',    // deepened logo navy — hero overlays, depth
          light: '#213D6E',   // logo mid-blue — gradients, dark-surface cards
        },
        secondary: '#33415C', // blue-graphite — body/secondary text (10.2:1 on white)
        accent: {
          DEFAULT: '#0369A1', // deepened logo cyan — CTAs/links (5.9:1 w/ white text; #489FC7 itself fails contrast on white)
          light: '#489FC7',   // logo cyan — icons/accents on dark surfaces (5.1:1 on navy)
          dark: '#075985',    // pressed/hover state
        },
        steel: {
          DEFAULT: '#489FC7', // logo cyan — cool accent for icons on dark
          dark: '#0369A1',
        },
        eco: '#70BC91',       // logo green — sustainability accents (6.7:1 on navy)
        surface: '#FFFFFF',
        background: '#F8FAFC',
        muted: '#E8EEF5',
        border: '#DEE7F0',
        destructive: '#DC2626',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(6,21,47,0.05)',
        md: '0 4px 6px rgba(6,21,47,0.08)',
        lg: '0 10px 15px rgba(6,21,47,0.08)',
        xl: '0 20px 25px rgba(6,21,47,0.12)',
        // layered "engineered metal" elevation per design-system.md §12
        depth: '0 1px 1px rgba(6,21,47,0.03), 0 2px 2px rgba(6,21,47,0.03), 0 4px 4px rgba(6,21,47,0.03), 0 8px 8px rgba(6,21,47,0.03), 0 16px 16px rgba(6,21,47,0.03)',
        'depth-lg': '0 2px 2px rgba(6,21,47,0.04), 0 4px 4px rgba(6,21,47,0.04), 0 8px 8px rgba(6,21,47,0.04), 0 16px 16px rgba(6,21,47,0.04), 0 32px 32px rgba(6,21,47,0.04)',
        'accent-glow': '0 8px 24px rgba(3,105,161,0.35)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'kenburns': 'kenburns 36s ease-in-out infinite alternate',
        'dash-flow': 'dash-flow 3.5s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        // Ambient decorative motion (shapes/blobs) — slow & subtle
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-x': 'float-x 6s ease-in-out infinite',
        'float-y': 'float-y 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'sway': 'sway 9s ease-in-out infinite',
        'bob-x': 'bob-x 5s ease-in-out infinite',
        'bob-y': 'bob-y 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(3deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '33%': { transform: 'translateX(12px) translateY(-8px)' },
          '66%': { transform: 'translateX(-8px) translateY(6px)' },
        },
        'float-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(18px)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'bob-x': {
          '0%, 100%': { transform: 'translateX(-12px)' },
          '50%': { transform: 'translateX(12px)' },
        },
        'bob-y': {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.08) translateY(-1.5%)' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
