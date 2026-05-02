"use client";

import { useTheme } from "@/components/primitives/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line-dark text-[#C7D0DA] transition-all duration-300 hover:border-gold hover:text-gold dark:border-[rgba(216,166,109,0.25)] dark:text-[#A4B0BC] dark:hover:border-gold dark:hover:text-gold"
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={`absolute h-[16px] w-[16px] transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.8}
      />
      <Moon
        className={`absolute h-[16px] w-[16px] transition-all duration-300 ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.8}
      />
    </button>
  );
}
