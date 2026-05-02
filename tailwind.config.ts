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
          navy: "#5271ff",
          "navy-light": "#5370ff",
          "navy-dark": "#060e24",
          blue: "#0065cb",
          "blue-dark": "#0057ad",
          gold: "#f8b917",
          "gold-light": "#fac93a",
          cream: "#f6f6f6",
          "gray-text": "#4b5563",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        rainbow: "rainbow 4s linear infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5.5s ease-in-out 0.75s infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
