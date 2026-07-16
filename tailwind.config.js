/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Nordic Navy & Azure ─────────────────────────────────────────
        // Derived from the Renova Trade logo (deep navy + bright azure)
        // with a teal-green sustainability accent. See design-system.md §1.
        primary: {
          DEFAULT: '#002050', // logo navy — headers, dark sections, body headings
          dark: '#001233',    // near-black navy — footer depth, hero overlays
          light: '#0A3A78',   // lifted navy — gradients, dark-surface cards
        },
        secondary: '#33415C', // blue-graphite — body/secondary text (10.2:1 on white)
        accent: {
          DEFAULT: '#0369A1', // azure — CTAs, links, highlights (5.9:1 with white text)
          light: '#38BDF8',   // sky azure — icons/accents on dark surfaces
          dark: '#075985',    // pressed/hover state
        },
        steel: {
          DEFAULT: '#38BDF8', // cool accent for icons on dark (matches accent.light)
          dark: '#0369A1',
        },
        eco: '#34D399',       // teal-green — sustainability accents on dark surfaces
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
        sm: '0 1px 2px rgba(0,18,51,0.05)',
        md: '0 4px 6px rgba(0,18,51,0.08)',
        lg: '0 10px 15px rgba(0,18,51,0.08)',
        xl: '0 20px 25px rgba(0,18,51,0.12)',
        // layered "engineered metal" elevation per design-system.md §12
        depth: '0 1px 1px rgba(0,18,51,0.03), 0 2px 2px rgba(0,18,51,0.03), 0 4px 4px rgba(0,18,51,0.03), 0 8px 8px rgba(0,18,51,0.03), 0 16px 16px rgba(0,18,51,0.03)',
        'depth-lg': '0 2px 2px rgba(0,18,51,0.04), 0 4px 4px rgba(0,18,51,0.04), 0 8px 8px rgba(0,18,51,0.04), 0 16px 16px rgba(0,18,51,0.04), 0 32px 32px rgba(0,18,51,0.04)',
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
        'spin-slow': 'spin-slow 40s linear infinite',
        'sway': 'sway 9s ease-in-out infinite',
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
