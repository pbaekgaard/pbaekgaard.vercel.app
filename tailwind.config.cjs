const tailwind_theme = require('tailwindcss/defaultTheme');
const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...tailwind_theme.fontFamily.mono],
				rubik: ['Londrina Sketch']
			},
			visibility: ['group-hover'],
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			}
		}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: ['lofi', 'business'],
		base: false
	}
};

module.exports = config;
