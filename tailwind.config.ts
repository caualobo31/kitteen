import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        "surface-1": "#FFFFFF",
        "surface-2": "#F0EAE0",
        border: "#E5DCC9",
        "text-primary": "#1A1814",
        "text-muted": "#6B5D4F",
        "text-subtle": "#9B8F7E",
        accent: "#D55C2F",
        "accent-hover": "#B84A22",
        highlight: "#3D5A4A",
        success: "#4A7C59",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
