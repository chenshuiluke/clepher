import { createThemes } from "tw-colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "sidebar-bg-active-color": "#1e293b",
        "sidebar-active-color": "#c5cbd3",
        "content-bg": "#f0f9ff",
        "data-table-btn-bg-color": "#0069ff",
      },
      dark: {
        "slate-200": "#0f172a",
        white: "#0f172a",
        "base-300": "#0a1120",
        "text-color": "#c8cbd0",
        "sidebar-bg-active-color": "#1e293b",
        "sidebar-active-color": "#c5cbd3",
        "content-bg": "#0c1425",
        "data-table-btn-bg-color": "#0069ff",
      },
    }),
  ],
};
export default config;
