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
      fontFamily: {
        noto: ["var(--font-noto-sans-arabic)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "color-accent-light": "rgb(var(--color-accent-light))",
        "color-accent-medium": "rgb(var(--color-accent-medium))",
        "color-accent-dark": "rgb(var(--color-accent-dark))",
        "color-error": "rgb(var(--color-error))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: ["grid-cols-1", "grid-cols-2", "grid-cols-3"],
};
export default config;
