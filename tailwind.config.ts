import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e8f0ff",
          200: "#c6daff",
          300: "#94baff",
          400: "#5c93ff",
          500: "#316bff",
          600: "#1f52db",
          700: "#1a42ad",
          800: "#193a8a",
          900: "#182f66",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
