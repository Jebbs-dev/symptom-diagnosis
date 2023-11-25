import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        footer: "2fr repeat(2, 1.2fr) 1.5fr  2fr",
        cart: "1fr 2fr 1fr",
        diagnosis: "2fr 1fr"
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      screens: {
        'xm': '350px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
