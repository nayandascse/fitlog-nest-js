import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        fit: {
          bg: "#070707",
          panel: "#101010",
          panel2: "#151515",
          line: "#292929",
          lime: "#ccff00",
          muted: "#8b8b8b"
        }
      },
      boxShadow: {
        "lime-glow": "0 0 30px rgba(204,255,0,.08)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  }
};

export default config;
