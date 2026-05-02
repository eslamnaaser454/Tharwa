import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#081826",
          800: "#0B2233",
          700: "#11304A",
          600: "#1A3F5C",
        },
        gold: {
          DEFAULT: "#D8A66D",
          soft: "#E5BE8B",
          deep: "#B98400",
          tint: "rgba(216,166,109,0.14)",
        },
        paper: { DEFAULT: "#FBF8F2", 2: "#F4EFE4" },
        off: "#F8F5EF",
        ink: "#0F2A3F",
        text: "#1A2A3A",
        muted: { DEFAULT: "#6B7280", soft: "#94A0AE" },
        line: { DEFAULT: "#E8E0D0", dark: "rgba(216,166,109,0.18)" },
        success: "#3F8F6E",
        danger: "#C4654E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        arabic: ["var(--font-tajawal)", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "22px",
      },
      boxShadow: {
        "sm-soft":
          "0 1px 2px rgba(11,34,51,.04), 0 1px 1px rgba(11,34,51,.03)",
        "md-soft":
          "0 8px 24px -8px rgba(11,34,51,.12), 0 2px 6px rgba(11,34,51,.05)",
        "lg-soft":
          "0 24px 60px -20px rgba(11,34,51,.25), 0 8px 16px -8px rgba(11,34,51,.08)",
        gold: "0 18px 40px -16px rgba(185,132,0,.45)",
      },
    },
  },
  plugins: [],
};

export default config;
