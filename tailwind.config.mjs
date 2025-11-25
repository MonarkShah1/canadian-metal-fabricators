/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563EB', // Electric Royal Blue
                    dark: '#1e40af',
                    light: '#60a5fa',
                },
                secondary: '#000000',
                accent: '#F59E0B', // Amber for warnings/highlights
                slate: {
                    850: '#151F32', // Custom depth for cards (slightly lighter than 900)
                    900: '#0F172A', // Deep background
                    950: '#020617', // Almost black
                }
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            }
        },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
