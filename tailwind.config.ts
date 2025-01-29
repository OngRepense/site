import type { Config } from "tailwindcss";

export default {
darkMode: ["class"],
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
			quaternary: "#00696E",
			softBlue: "#295774",
			borderBlue: "#31607D",
		},
		fontFamily: {
			nunito: ['"Nunito"', "sans-serif"],
			caveat: ['"Caveat"', "serif"],
		},
		maxWidth: {
			'8xl': '86.875rem',
		},
		backgroundImage: {
			'custom-gradient-primary': 'linear-gradient(180deg, rgba(240, 125, 0, 0.72) 0%, rgba(240, 125, 0, 0) 100%)',
			'custom-gradient-primary-02': 'linear-gradient(180deg, rgba(240, 125, 0, 0) 0%, rgba(240, 125, 0, 1)  100%)',
			'custom-gradient-tertiary': 'linear-gradient(180deg, rgba(255, 241, 195, 0.72) 0%, rgba(240, 125, 0, 0) 100%)',
			'custom-gradient-tertiary-02': 'linear-gradient(180deg, rgba(240, 125, 0, 0) 0%, rgba(255, 241, 195, 1)  100%)',
			'custom-gradient-quaternary': 'linear-gradient(180deg, rgba(0, 105, 110, 0.72) 0%, rgba(240, 125, 0, 0) 100%)',
			'custom-gradient-quaternary-02': 'linear-gradient(180deg, rgba(240, 125, 0, 0) 0%, rgba(0, 105, 110, 1)  100%)'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
},
plugins: [require("tailwindcss-animate")],
} satisfies Config;
