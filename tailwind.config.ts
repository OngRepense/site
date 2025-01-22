import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F07D00",
        secondary: "#234B64",
        tertiary: "#FFF1C3",
      },
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
        caveat: ['"Caveat"', "serif"],
      },
      maxWidth: {
        '8xl': '86.875rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
