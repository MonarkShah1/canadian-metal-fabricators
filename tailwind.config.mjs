/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: '#355D9A',
                secondary: '#000000',
                accent: '#FFFFFF',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
            }
        },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
