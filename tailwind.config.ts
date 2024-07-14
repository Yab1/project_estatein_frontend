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
					"90": "var(--white-90)",
					"95": "var(--white-95)",
					"97": "var(--white-97)",
					"99": "var(--white-99)",
				},
				grey: {
					"08": "var(--grey-08)",
					"10": "var(--grey-10)",
					"15": "var(--grey-15)",
					"20": "var(--grey-20)",
					"30": "var(--grey-30)",
					"40": "var(--grey-40)",
					"50": "var(--grey-50)",
					"60": "var(--grey-60)",
				},
				purple: {
					"60": "var(--purple-60)",
					"65": "var(--purple-65)",
					"70": "var(--purple-70)",
					"75": "var(--purple-75)",
					"90": "var(--purple-90)",
					"95": "var(--purple-95)",
					"97": "var(--purple-97)",
					"99": "var(--purple-99)",
				},
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;
