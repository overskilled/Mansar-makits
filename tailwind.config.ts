const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

function toRGB(hex: string): string {
	const bigint = parseInt(hex.replace("#", ""), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return `${r} ${g} ${b}`;
}


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	safelist: [
		{
			pattern: /animate-delay-.+/,
		},
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: toRGB("#E3B505"),
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				success: 'rgb(var(--color-success) / <alpha-value>)',
				info: 'rgb(var(--color-info) / <alpha-value>)',
				warning: 'rgb(var(--color-warning) / <alpha-value>)',
				pending: 'rgb(var(--color-pending) / <alpha-value>)',
				danger: 'rgb(var(--color-danger) / <alpha-value>)',
				light: 'rgb(var(--color-light) / <alpha-value>)',
				dark: 'rgb(var(--color-dark) / <alpha-value>)',
				darkmode: {
					'50': 'rgb(var(--color-darkmode-50) / <alpha-value>)',
					'100': 'rgb(var(--color-darkmode-100) / <alpha-value>)',
					'200': 'rgb(var(--color-darkmode-200) / <alpha-value>)',
					'300': 'rgb(var(--color-darkmode-300) / <alpha-value>)',
					'400': 'rgb(var(--color-darkmode-400) / <alpha-value>)',
					'500': 'rgb(var(--color-darkmode-500) / <alpha-value>)',
					'600': 'rgb(var(--color-darkmode-600) / <alpha-value>)',
					'700': 'rgb(var(--color-darkmode-700) / <alpha-value>)',
					'800': 'rgb(var(--color-darkmode-800) / <alpha-value>)',
					'900': 'rgb(var(--color-darkmode-900) / <alpha-value>)'
				},
				background: 'hsl(var(--background))',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				jost: ["jost"],
				roboto: ["Roboto Mono", "monospace"],
				poppins: ["Poppins"]
			},
			container: {
				center: 'true'
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%'
			},
			strokeWidth: {
				'0.5': '0.5',
				'1.5': '1.5',
				'2.5': '2.5'
			},
			keyframes: {
				'intro-divider': {
					'100%': {
						opacity: '1'
					}
				},
				'intro-menu': {
					'100%': {
						opacity: '1',
						transform: 'translateX(0px)'
					}
				},
				'active-side-menu-chevron': {
					'100%': {
						opacity: '1',
						'margin-right': '-27px'
					}
				},
				'intro-top-menu': {
					'100%': {
						opacity: '1'
					}
				},
				'active-top-menu-chevron': {
					'100%': {
						opacity: '1',
						'margin-bottom': '-56px'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spiner': {
					from: {
						width: '10%',
						transform: 'translateX(0px)'
					},
					'30%': {
						width: '50%'
					},
					to: {
						width: '10%',
						transform: 'translateX(100vw)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spiner': 'spiner 1s infinite linear'
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		plugin(function ({ addBase, matchUtilities }: { addBase: any; matchUtilities: any }) {
			addBase({
				":root": {
					"--color-primary": toRGB("#E3B505"),
					"--color-secondary": toRGB("#000000"),
					"--color-success": toRGB(colors.teal["600"]),
					"--color-info": toRGB(colors.cyan["500"]),
					"--color-warning": toRGB(colors.amber["500"]),
					"--color-pending": toRGB(colors.amber["600"]),
					"--color-danger": toRGB(colors.red["700"]),
					"--color-light": toRGB(colors.slate["100"]),
					"--color-dark": toRGB(colors.slate["800"]),
				},
			});

			matchUtilities(
				{
					"animate-delay": (value: string) => ({
						"animation-delay": value,
					}),
				},
				{
					values: (() => {
						const values: Record<number, string> = {};
						for (let i = 1; i <= 50; i++) {
							values[i * 10] = `${i * 0.1}s`;
						}
						return values;
					})(),
				}
			);

			matchUtilities(
				{
					"animate-fill-mode": (value: string) => ({
						"animation-fill-mode": value,
					}),
				},
				{
					values: {
						none: "none",
						forwards: "forwards",
						backwards: "backwards",
						both: "both",
					},
				}
			);
		}),
		require("tailwindcss-animate"),
	],
	variants: {
		extend: {
			boxShadow: ["dark"],
		},
	},
};
