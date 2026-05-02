"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost-dark" | "ghost-light";

interface ButtonProps {
  variant?: Variant;
  size?: "default" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-900 shadow-gold hover:bg-gold-soft btn-primary-highlight",
  "ghost-dark":
    "bg-transparent text-[#F1E8D6] border-line-dark hover:border-gold hover:text-gold",
  "ghost-light":
    "bg-transparent text-ink border-line hover:bg-paper-2 dark:text-[#F1E8D6] dark:border-line-dark dark:hover:border-gold dark:hover:text-gold dark:hover:bg-transparent",
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", px + "%");
    el.style.setProperty("--my", py + "%");
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) * 0.18;
    const dy = (e.clientY - cy) * 0.18;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  function handleClick(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = e.clientX - r.left + "px";
    ripple.style.top = e.clientY - r.top + "px";
    ripple.style.width = ripple.style.height = "20px";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
    onClick?.();
  }

  const classes = cn(
    "btn-highlight relative isolate overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-medium tracking-[0.005em] transition-all duration-200",
    size === "lg" ? "h-[52px] px-[26px] text-[15px]" : "h-[42px] px-[18px] text-sm",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
