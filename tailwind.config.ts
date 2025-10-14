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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'rgb(55, 65, 81)',
            a: {
              color: 'rgb(59, 130, 246)',
              '&:hover': {
                color: 'rgb(37, 99, 235)',
              },
              textDecoration: 'none',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
              marginTop: '2em',
              marginBottom: '1em',
            },
            code: {
              color: 'rgb(55, 65, 81)',
              backgroundColor: 'rgb(243, 244, 246)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
