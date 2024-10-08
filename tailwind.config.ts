import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      caption: ["var(--font-caption)", "ui-sans-serif", "system-ui"],
    },
    extend: {
      animation: {
        'ping-once': 'pingOnce 1s ease-out forwards',
      },
      keyframes: {
        pingOnce: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22 fill=%22none%22 stroke=%22rgba(226, 232, 240, 0.09)%22 stroke-width=%220.1%22><line x1=%220%22 y1=%220%22 x2=%2210%22 y2=%2210%22/><line x1=%2210%22 y1=%220%22 x2=%220%22 y2=%2210%22/></svg>')",
      },
      backgroundSize: {
        "grid-size": "32px 32px",
      },
      rotate: {
        "-45": "-45deg",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
