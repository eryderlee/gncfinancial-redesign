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
        brand: {
          navy: "#5271ff",        // primary background — header, hero, dark sections
          "navy-light": "#5370ff", // deeper blue variant
          blue: "#0065cb",        // primary accent — buttons, links
          "blue-dark": "#0057ad", // hover state for blue elements
          gold: "#f8b917",        // gold accent — dividers, logo, CTA text
          "gold-light": "#fac93a", // gold hover
          cream: "#f6f6f6",       // light section background
          "gray-text": "#4b5563", // body text on light backgrounds
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
