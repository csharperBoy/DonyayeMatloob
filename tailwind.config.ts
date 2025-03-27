// import type { Config } from "tailwindcss";
// const withMT = require("@material-tailwind/react/utils/withMT");

// const config: Config = withMT({
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontFamily: {
//       vazir: ["var(--font-vazirmatn)", "sans-serif"],
//     },
//     extend: {
//       colors: {
//         purple: {
//           600: '#7e22ce',
//           700: '#6b21a8',
//         }
//       }
//     },
//   },
//   plugins: [],
// });

// export default config;
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      vazir: ["Vazirmatn", "sans-serif"], // فونت اصلی منوها
      yekan: ["Yekan", "sans-serif"], // فونت عنوان سایت
      iransans: ["IRANSans", "sans-serif"], // فونت دکمه‌ها
    },
    extend: {
      colors: {
        purple: {
          600: '#7e22ce', // رنگ بنفش اصلی
          700: '#6b21a8',
        }
      }
    },
  },
  plugins: [],
});

export default config;