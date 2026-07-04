/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        mono: ["Roboto Mono", "ui-monospace"],
      },
      boxShadow: {
        neon: '0 0 18px rgba(0, 255, 153, .35), 0 0 42px rgba(0, 153, 255, .22)',
        danger: '0 0 18px rgba(255, 60, 60, .35), 0 0 42px rgba(255, 0, 120, .18)',
        cyber: '0 0 12px rgba(0, 255, 153, .30), 0 0 22px rgba(0, 153, 255, .18), 0 0 60px rgba(0, 255, 153, .10)',
      },
      colors: {
        cyberGreen: '#00ff99',
        cyberBlue: '#00a3ff',
        cyberRed: '#ff3b6b'
      },
    },
  },
  plugins: [],
};

