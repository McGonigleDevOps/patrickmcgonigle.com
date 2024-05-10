/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Montserrat', 'sans-serif']
		},
		extend: {
			fontFamily: {
				'brand-cursive': ['Pacifico','cursive'],
			}
		},
	},
	daisyui: {
		themes: [
		  {
			myLightTheme: {
   				"primary": "#b8316f",
				"secondary": "#e879f9",
			   	"accent": "#00ffff",
			   	"neutral": "#ff00ff",
				"base-100": "#f3f4f6",
				"info": "#0000ff",
				"success": "#00ff00",
				"warning": "#fde047",
				"error": "#ff0000",
			},
		  },
		],
	  },
	  plugins: [require("daisyui")],
}
