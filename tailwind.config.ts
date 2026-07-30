import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "system-ui", "sans-serif"],
      },
      direction: {
        rtl: "rtl",
        ltr: "ltr",
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          200: "#bac8ff",
          300: "#91a7ff",
          400: "#748ffc",
          500: "#5c7cfa",
          600: "#4c6ef5",
          700: "#4263eb",
          800: "#3b5bdb",
          900: "#364fc7",
        },
        accent: {
          50: "#fff0f6",
          100: "#ffd6e7",
          200: "#ffc2d6",
          300: "#ffa8c2",
          400: "#ff87b4",
          500: "#ff6ea8",
          600: "#e64980",
          700: "#c2255c",
          800: "#9c1449",
          900: "#781237",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;