import { createThemes } from "tw-colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        "slate-200": "#e2e8f0",
        white: "white",
        "base-300": "#e3e9f4",
        "text-color": "#394e6a",
      },
      dark: {
        "slate-200": "#0f172a",
        white: "#0f172a",
        "base-300": "#0a1120",
        "text-color": "#c8cbd0",
      },
    }),
  ],
};
export default config;
