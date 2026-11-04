import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        sand: "#F0F0F0",
        terracotta: "#111111",
        charcoal: "#111111",
        muted: "#6B6B6B",
        white: "#FFFFFF",
      },
      fontFamily: {
        lato: ["Inter", "sans-serif"],
        playfair: ["Cormorant Garamond", "serif"],
        brand: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
