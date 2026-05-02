"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "article" | "span" | "section";
}

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      custom={delay}
      className={className}
    >
      {children}
    </Component>
  );
}
