import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        estate: {
          navy:   "#12323B",   // Primary anchor color
          gold:   "#F1C46E",   // CTA only
          mint:   "#4BA18F",   // Accent / highlights
          muted:  "#718096",   // Sub-headlines & captions
          border: "#E2E8F0",   // Card borders
          bg:     "#F8FAFC",   // Off-white section bg
          card:   "#FFFFFF",   // Card surface
        }
      },
      boxShadow: {
        card: "0 1px 3px rgba(18,50,59,0.06), 0 4px 16px rgba(18,50,59,0.04)",
        "card-hover": "0 4px 24px rgba(18,50,59,0.10), 0 1px 6px rgba(18,50,59,0.05)",
        nav: "0 1px 0 #E2E8F0",
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "pulse-slow":   "pulse 4s ease-in-out infinite",
        "fade-in":      "fadeIn 0.6s ease-out forwards",
        "slide-up":     "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
