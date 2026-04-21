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
        background: "#F8FAFC",
        foreground: "#12323B",
        estate: {
          navy: "#12323B", // Primary Navy
          gold: "#F1C46E", // Golden CTA
          mint: "#4BA18F", // Mint Accent
          muted: "#718096", // Muted Subtext
          border: "#E2E8F0", // Card Borders
          card: "#FFFFFF", // Card Background
        }
      },
    },
  },
  plugins: [],
};
export default config;
