/** @type {import('tailwindcss').Config} */
import('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkblue: '#05386B',
				offwhite: '#fed5b7',
				golden: '#c6a53e',
				neogreen: '#5cdb95'
			},
			fontFamily: {
				display: ['Forum', 'serif'],
				sans: ['Noto-Sans-Japanese', 'sans-serif'],
				serif: ['Playfair-Display', 'serif']
			}
		}
	},
	plugins: []
};
