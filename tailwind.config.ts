import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vazir: ["var(--font-vazirmatn)", "sans-serif"],
    },
    extend: {
      colors: {
        purple: {
          600: '#7e22ce',
          700: '#6b21a8',
        }
      }
    },
  },
  plugins: [],
});

export default config;