/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#050505',
        surface:   '#0f0f12',
        border:    '#22222a',
        primary:   '#ff3b8f', // Electric Magenta
        secondary: '#00f0ff', // Cyan
        accent:    '#ff8a00', // Amber
        textPrimary: '#ffffff',
        textMuted:   '#94a3b8',
        success:   '#10b981',
        error:     '#ef4444',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse':'glowPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'mesh-drift':'meshDrift 15s ease-in-out infinite alternate',
        'aurora':    'aurora 10s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        meshDrift: {
          '0%':   { transform: 'translate(0%, 0%) scale(1) rotate(0deg)' },
          '100%': { transform: 'translate(5%, -5%) scale(1.1) rotate(5deg)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
    },
  },
  plugins: [],
};
