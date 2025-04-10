import type { Config } from 'tailwindcss'

export default {
  darkMode: "class",
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './app/**/*.tsx',
    './src/**/*.tsx',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(24 24 27)", // zinc-900
        foreground: "rgb(244 244 245)", // zinc-100
        primary: {
          DEFAULT: "rgb(244 244 245)", // zinc-100
          foreground: "rgb(24 24 27)", // zinc-900
        },
        secondary: {
          DEFAULT: "rgb(39 39 42)", // zinc-800
          foreground: "rgb(244 244 245)", // zinc-100
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(39 39 42)", // zinc-800
          foreground: "rgb(161 161 170)", // zinc-400
        },
        accent: {
          DEFAULT: "rgb(39 39 42)", // zinc-800
          foreground: "rgb(244 244 245)", // zinc-100
        },
        popover: {
          DEFAULT: "rgb(24 24 27)", // zinc-900
          foreground: "rgb(244 244 245)", // zinc-100
        },
        card: {
          DEFAULT: "rgb(24 24 27)", // zinc-900
          foreground: "rgb(244 244 245)", // zinc-100
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config 