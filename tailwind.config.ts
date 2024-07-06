import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colours: {
      'blue': {
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
    },
    extend: {
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
