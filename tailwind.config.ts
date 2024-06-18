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
        white: {
          main: "#F9F9F9",
        },
        gray: {
          main: "#686868",
          accent: "rgba(227, 227, 227, 0.3)",
        },
        black: {
          main: "#141414",
          accent: "#1F1F1F",
          additional: "#262626",
        },
        blue: {
          main: "#4F92F7",
        },
        green: {
          main: "#30B94D",
        },
        red: {
          main: "#E90516",
        },
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
