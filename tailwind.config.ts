import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        clay: {
          base: "#E8EEF2",
          card: "#FFFFFF",
          accent1: "#9FA8DA",
          accent2: "#F48FB1",
          accent3: "#81D4FA",
          textMain: "#37474F",
          textMuted: "#78909C"
        }
      },
      boxShadow: {
        'clay': '10px 10px 30px rgba(0,0,0,0.06), -10px -10px 30px rgba(255,255,255,0.9), inset -5px -5px 15px rgba(0,0,0,0.02), inset 5px 5px 15px rgba(255,255,255,0.7)',
        'clay-btn': '5px 5px 15px rgba(0,0,0,0.06), -5px -5px 15px rgba(255,255,255,0.9), inset -2px -2px 6px rgba(0,0,0,0.02), inset 2px 2px 6px rgba(255,255,255,0.7)',
        'clay-active': 'inset 6px 6px 15px rgba(0,0,0,0.06), inset -6px -6px 15px rgba(255,255,255,0.9)'
      },
      borderRadius: {
        'clay': '2rem',
        'clay-sm': '1rem'
      }
    },
  },
  plugins: [],
};
export default config;