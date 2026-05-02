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
        // GNC brand tokens — update these in Phase 2
        brand: {
          navy: "#1a2f5e",       // primary dark
          blue: "#2d4fa3",       // primary mid
          gold: "#f0a500",       // accent
          "gold-light": "#fbbf24",
          "navy-light": "#2a3f70",
          cream: "#f8f7f4",      // off-white background
          "gray-text": "#4b5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
