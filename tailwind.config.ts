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
          base: "var(--background)", // dynamically use globals.css background
          card: "#FFFFFF",
          navy: "#13333F",
          teal: "#3AA696",
          ochre: "#E6BE6D",
          orange: "#FF6B35",
          indigo: "#6366F1",
          textMain: "#13333F", // Deep Charcoal/Navy
          textMuted: "#3AA696" // Muted Teal or we can use a lighter navy
        }
      },
      boxShadow: {
        'clay': '10px 10px 30px rgba(19, 51, 63, 0.08), -10px -10px 30px rgba(255,255,255,0.4), inset -5px -5px 15px rgba(19, 51, 63, 0.03), inset 5px 5px 15px rgba(255,255,255,0.3)',
        'clay-btn': '5px 5px 15px rgba(19, 51, 63, 0.08), -5px -5px 15px rgba(255,255,255,0.4), inset -2px -2px 6px rgba(19, 51, 63, 0.03), inset 2px 2px 6px rgba(255,255,255,0.3)',
        'clay-active': 'inset 6px 6px 15px rgba(19, 51, 63, 0.08), inset -6px -6px 15px rgba(255,255,255,0.4)'
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