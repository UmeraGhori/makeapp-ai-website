import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F5",
        foreground: "#1E1520",
        ivory: {
          50: "#FFFDFD",
          100: "#FAF7F5",
          200: "#F4EFEA",
          300: "#ECE5DD",
          400: "#DFD4C6",
        },
        blush: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
        },
        lavender: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
        },
        plum: {
          900: "#1A0F1B",
          800: "#2B192E",
          700: "#3D2441",
          600: "#55325B",
          500: "#704378",
          400: "#91609A",
          300: "#B993C0",
          200: "#DCBFE1",
          100: "#F2E5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(225, 29, 72, 0.06), 0 2px 8px 0 rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px -10px rgba(244, 63, 94, 0.35)",
        phone: "0 25px 60px -15px rgba(43, 25, 46, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08)",
        card: "0 10px 30px -5px rgba(61, 36, 65, 0.05), 0 0 0 1px rgba(225, 29, 72, 0.06)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 2s infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
