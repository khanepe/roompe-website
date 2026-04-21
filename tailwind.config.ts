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
        'clay': '10px 10px 20px rgba(0,0,0,0.05), -10px -10px 20px rgba(255,255,255,0.8), inset -5px -5px 10px rgba(0,0,0,0.03), inset 5px 5px 10px rgba(255,255,255,0.9)',
        'clay-btn': '5px 5px 10px rgba(0,0,0,0.05), -5px -5px 10px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.03), inset 2px 2px 5px rgba(255,255,255,0.9)',
        'clay-active': 'inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px rgba(255,255,255,0.8)'
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