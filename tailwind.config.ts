import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Brand colors
        "brand-primary": "hsl(var(--brand-primary))",
        "brand-coral": "hsl(var(--brand-coral))",
        "brand-orange": "hsl(var(--brand-orange))",
        "brand-green": "hsl(var(--brand-green))",
        "brand-pink": "hsl(var(--brand-pink))",
        "brand-cyan": "hsl(var(--brand-cyan))",
        "brand-blue": "hsl(var(--brand-blue))",
        
        // Neutrals
        "neutral-50": "hsl(var(--neutral-50))",
        "neutral-100": "hsl(var(--neutral-100))",
        "neutral-200": "hsl(var(--neutral-200))",
        "neutral-300": "hsl(var(--neutral-300))",
        "neutral-400": "hsl(var(--neutral-400))",
        "neutral-500": "hsl(var(--neutral-500))",
        "neutral-600": "hsl(var(--neutral-600))",
        "neutral-700": "hsl(var(--neutral-700))",
        "neutral-800": "hsl(var(--neutral-800))",
        "neutral-900": "hsl(var(--neutral-900))",
        "neutral-950": "hsl(var(--neutral-950))",
        
        // Buttons
        "button-primary": "hsl(var(--button-primary))",
        "button-primary-hover": "hsl(var(--button-primary-hover))",
        "button-secondary": "hsl(var(--button-secondary))",
        "button-secondary-hover": "hsl(var(--button-secondary-hover))",
        "button-white": "hsl(var(--button-white))",
        "button-white-hover": "hsl(var(--button-white-hover))",
      },
      fontFamily: {
        'neue-plak': ['var(--font-neue-plak)'],
        'jakarta': ['var(--font-jakarta)'],
        'inter': ['var(--font-inter)'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
