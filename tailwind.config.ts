import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '50': '#f0faff',
          '100': '#e0f5fe',
          '200': '#b9ecfe',
          '300': '#7cdffd',
          '400': '#36d0fa',
          '500': '#0cbaeb',
          '600': '#0099cc',
          '700': '#0178a3',
          '800': '#066586',
          '900': '#0b536f',
          '950': '#07354a',
        },
        ink: '#12242c',
        ground: '#f7f7f6',
        moss: '#6d7a4a',
        stone: '#d2cbbc',
      },
      fontFamily: {
        sans: ["var(--font-body)", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
