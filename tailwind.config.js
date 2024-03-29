/** @type {import('tailwindcss').Config} */
import('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkblue: '#05386B',
				offwhite: '#fed5b7',
				deepred: '#850101',
				golden: '#c6a53e',
				neogreen: '#5cdb95'
			},
			fontFamily: {
				display: ['Forum', 'serif'],
				sans: ['Noto-Sans-Japanese', 'sans-serif'],
				serif: ['Playfair-Display', 'serif']
			},
			backgroundImage: {
				darkhero: "url('/assets/images/darker-background.jpg')",
				lighthero: "url('/assets/images/lighter-background.jpg')",
				waterhero: "url('/assets/images/watery-background.jpg')",
				multihero: "url('/assets/images/sampler-background.jpg')"
			}
		}
	},
	plugins: []
};
